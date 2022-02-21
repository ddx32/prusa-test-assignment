import React, { useEffect, useRef, useState } from "react";
import ProductTable from "../components/ProductTable";
import { skuVariants } from "../constants/parameters";

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

export default function CompareProducts({ data }: { data: Printer[] }) {
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
    <>
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

        {skuVariants.map((variant) => (
          <label key={variant[0]}>
            <input
              type="checkbox"
              name={variant[0]}
              onChange={setIndividualFilter}
            />{" "}
            {variant[1]}
          </label>
        ))}
      </section>

      <ProductTable printers={getFilteredPrinters(printers, filter)} />
    </>
  );
}
