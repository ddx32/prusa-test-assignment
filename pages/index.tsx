import Head from "next/head";
import { getData } from "./api/list";
import React, { useEffect, useRef, useState } from "react";

async function fetchPrintersByName(
  query: string,
  setPrinters: (a: Printer[]) => void
) {
  const res = await fetch(`${window.location.origin}/api/list?search=${query}`);
  const { data } = await res.json();
  setPrinters(data);
}

function getFilteredPrinters(
  printers: Printer[],
  filter: Record<string, boolean>
): Printer[] {
  return printers.filter((printer: Printer) => {
    return Object.entries(filter).reduce(
      (acc: boolean, current: [string, boolean]) => {
        const [paramName, value] = current;
        if (value && !printer[paramName as keyof Printer]) {
          acc = false;
        }
        return acc;
      },
      true
    );
  });
}

export default function CompareTable({ data }: { data: Printer[] }) {
  const [printers, setPrinters] = useState(data);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState({
    diyKit: false,
    builtPrinter: false,
  });

  // Make sure we call the API only after we change the `query` state
  const isInitialRender = useRef(true);
  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }
    (async () => await fetchPrintersByName(query, setPrinters))();
  }, [query]);

  function setIndividualFilter(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event);
    setFilter({
      ...filter,
      [event.target.name]: event.target.checked,
    });
  }

  return (
    <div className="container">
      <Head>
        <title>Compare Prusa printers</title>
      </Head>

      <main>
        <section>
          <h2>Filter table</h2>
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <input type="checkbox" name="diyKit" onChange={setIndividualFilter} />{" "}
          DIY kit
          <input
            type="checkbox"
            name="builtPrinter"
            onChange={setIndividualFilter}
          />{" "}
          Built printer
        </section>
        <table>
          <tbody>
            <tr>
              <th>Title</th>
              <th>Build volume</th>
              <th>Layer height</th>
              <th>Max travel speed</th>
              <th>Max temperatures</th>
              <th>Controller</th>
              <th>Filament diameter</th>
            </tr>

            {getFilteredPrinters(printers, filter).map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.buildVolume}</td>
                <td>{item.layerHeight}</td>
                <td>{item.maxTravelSpeed}</td>
                <td>{item.maxTemperatures}</td>
                <td>{item.controller}</td>
                <td>{item.filamentDiameter}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  return { props: getData() };
}
