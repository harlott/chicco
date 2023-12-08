import Head from 'next/head';
import HomePage from "../app/ui/HomePage";

export default function Index({ data }) {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Chicco Allotta: pianist in London!</title>
        <meta
          name="description"
          content="Chicco Allotta is a pianist based in London."
        />
      </Head>
      <HomePage data={data} />
    </>
  );
};


export async function getStaticProps() {
  let indexData = null;
  try {
    indexData = await import('../data-json/home-page.json');
  } catch (e) {
    console.log(e);
  }
  return {
    props: {
      data: JSON.parse(JSON.stringify(indexData.default)),
    },
  }
}

