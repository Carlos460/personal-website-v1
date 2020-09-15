import DefaultLayout from "@layouts/default";
import Head from "next/head";
import Link from "next/link";

export default function ProjectLayout(props) {
  return (
    <DefaultLayout>
      <Head>
        <title>{props.title}</title>
      </Head>
      <article>
        <h1>{props.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: props.content }} />
      </article>

  <style>{`
  
  `}</style>
    </DefaultLayout>
  );
}
