import Head from "next/head";
import Navbar from "@includes/navbar";

export default function DefaultLayout(props) {
  return (
    <main>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Head>
      <Navbar />
      {props.children}
    </main>
  );
}
