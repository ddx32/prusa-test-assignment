import { useState } from "react";
import StyledTable from "../layout/StyledTable";
import TableHeading from "./TableHeading";
import BuyButton from "./BuyButton";
import HiddenParams from "./HiddenParams";
import { paramList, skuVariants } from "../constants/parameters";

function toggleParameter(
  paramName: paramName,
  hiddenParams: paramName[],
  setHiddenParams: (a: paramName[]) => void
): void {
  if (hiddenParams.includes(paramName)) {
    setHiddenParams(hiddenParams.filter((param) => param !== paramName));
  } else {
    setHiddenParams([...hiddenParams, paramName]);
  }
}

export default function ProductTable({ printers }: { printers: Printer[] }) {
  const [hiddenParams, setHiddenParams] = useState<paramName[]>([]);

  return (
    <>
      <StyledTable>
        <thead>
          <tr>
            <th className="title-heading">Title</th>
            {paramList.map(
              (param) =>
                !hiddenParams.includes(param) && (
                  <TableHeading
                    key={param[0]}
                    param={param}
                    eyeClick={() =>
                      toggleParameter(param, hiddenParams, setHiddenParams)
                    }
                  />
                )
            )}
            <th className="title-heading ">Variants</th>
          </tr>
        </thead>

        <tbody>
          {printers.map((printer: Printer) => (
            <tr key={printer.id}>
              <td className="title-content">{printer.title}</td>
              {paramList.map(
                (param) =>
                  !hiddenParams.includes(param) && (
                    <td className="param" key={param[0]}>
                      {printer[param[0]]}
                    </td>
                  )
              )}
              <td className="buy-variants">
                {skuVariants.map(
                  (variant) =>
                    printer[variant[0]] && (
                      <BuyButton key={variant[0]} variant={variant} />
                    )
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      <HiddenParams
        hiddenParams={hiddenParams}
        onParamClick={(param) =>
          toggleParameter(param, hiddenParams, setHiddenParams)
        }
      />
    </>
  );
}
