import Head from "next/head";
import { getData } from "./api/list";

export default function CompareTable({ data }) {
  return (
    <div className="container">
      <Head>
        <title>Compare Prusa printers</title>
      </Head>

      <main>
        <h1>Hey there!</h1>
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

            {data.map((item) => (
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
