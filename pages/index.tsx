import Head from "next/head";
import { getData } from "./api/list";
import React, { useEffect, useRef, useState } from "react";
import BasicLayout from "../layout/BasicLayout";
import ProductTable from "../components/ProductTable";

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
    setFilter({
      ...filter,
      [event.target.name]: event.target.checked,
    });
  }

  return (
    <BasicLayout>
      <Head>
        <title>Compare Prusa printers</title>
      </Head>

      <main>
        <h1>Compare Prusa printers</h1>
        <section>
          <label>
            Search by name:
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>
          <label>
            <input
              type="checkbox"
              name="diyKit"
              onChange={setIndividualFilter}
            />{" "}
            DIY kit
          </label>
          <label>
            <input
              type="checkbox"
              name="builtPrinter"
              onChange={setIndividualFilter}
            />{" "}
            Built printer
          </label>
        </section>
        <ProductTable printers={getFilteredPrinters(printers, filter)} />
      </main>
    </BasicLayout>
  );
}

export async function getServerSideProps() {
  return { props: getData() };
}
