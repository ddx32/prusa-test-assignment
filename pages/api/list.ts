import { NextApiRequest, NextApiResponse } from "next";

const sourceData: Printer[] = [
  {
    id: 1,
    title: "Original Prusa MINI",
    buildVolume: "18x18x18 cm",
    layerHeight: "0.05 - 0.35 mm",
    maxTravelSpeed: "200+ mm/s",
    maxTemperatures: "280 °C",
    controller: "Custom 32-bit Buddy motherboard",
    filamentDiameter: "1.75 mm",
    diyKit: false,
    builtPrinter: true,
  },
  {
    id: 2,
    title: "Original Prusa MK3S+",
    buildVolume: "25x21x21 cm",
    layerHeight: "0.05 - 0.35 mm",
    maxTravelSpeed: "200+ mm/s",
    maxTemperatures: "280 °C",
    controller: "Einsy RAMBo",
    filamentDiameter: "1.75 mm",
    diyKit: true,
    builtPrinter: true,
  },
  {
    id: 3,
    title: "Original Prusa MK2S",
    buildVolume: "25x21x20 cm",
    layerHeight: "0.05 - 0.35 mm",
    maxTravelSpeed: "200+ mm/s",
    maxTemperatures: "260 °C",
    controller: "RAMBo",
    filamentDiameter: "1.75 mm",
    diyKit: true,
    builtPrinter: false,
  },
  {
    id: 4,
    title: "Original Prusa SL1",
    buildVolume: "120 × 68 × 150 mm",
    layerHeight: "0.025 – 0.1 mm",
    maxTravelSpeed: "-",
    maxTemperatures: "-",
    controller: "PrusaA64",
    filamentDiameter: "-",
    diyKit: false,
    builtPrinter: true,
  },
];

export function getData(searchQuery?: string): { data: Printer[] } {
  if (!searchQuery) {
    return { data: sourceData };
  }

  const caseInsensitiveQuery = searchQuery.toUpperCase();
  const result = sourceData.filter((item: Printer) =>
    item.title.toUpperCase().includes(caseInsensitiveQuery)
  );
  return { data: result };
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { query } = req;
  if (typeof query.search === "string") {
    res.status(200).json(getData(query.search));
  } else {
    res.status(500);
  }
}
