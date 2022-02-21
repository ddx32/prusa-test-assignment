import Head from "next/head";
import { getData } from "./api/list";
import BasicLayout from "../layout/BasicLayout";
import CompareProducts from "../components/CompareProducts";

export default function Homepage({ data }: { data: Printer[] }) {
  return (
    <BasicLayout>
      <Head>
        <title>Compare Prusa printers</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <CompareProducts data={data} />
      </main>
    </BasicLayout>
  );
}

export async function getServerSideProps() {
  return { props: getData() };
}
