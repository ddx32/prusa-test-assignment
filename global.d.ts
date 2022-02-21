declare interface Printer {
  id: number;
  title: string;
  buildVolume: string;
  layerHeight: string;
  maxTravelSpeed: string;
  maxTemperatures: string;
  controller: string;
  filamentDiameter: string;
  diyKit: boolean;
  builtPrinter: boolean;
}

declare type paramName = [keyof Printer, string];
