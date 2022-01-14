import Head from "next/head";
import Image from "next/image";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza restaurant</title>
        <meta name="description" content="best pizza restaurant in town" />
      </Head>
      <Featured/>
      <PizzaList/>
    </div>
  );
}
