import StyledTable from "../layout/StyledTable";

export default function ProductTable({ printers }: { printers: Printer[] }) {
  return (
    <StyledTable>
      <thead>
        <tr>
          <th>Title</th>
          <th>Build volume</th>
          <th>Layer height</th>
          <th>Max travel speed</th>
          <th>Max temperatures</th>
          <th>Controller</th>
          <th>Filament diameter</th>
        </tr>
      </thead>
      <tbody>
        {printers.map((item: Printer) => (
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
    </StyledTable>
  );
}
