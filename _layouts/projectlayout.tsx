import DefaultLayout from "@layouts/default";
import Head from "next/head";
import Link from "next/link";

export default function ProjectLayout(props) {
  return (
    <DefaultLayout title={props.title} description="hello">
      <main className="project-layout-container">
        <header className="project-layout-header">
          <h1>{props.title}</h1>
        </header>
        <article className="project-layout-content">
          <div dangerouslySetInnerHTML={{ __html: props.content }} />
        </article>
      </main>

      <style jsx>{`
      .project-layout-container {
        background-color: black;
        color: white;
      }
      .project-layout-header {
        padding: 8rem 2rem;
        height: 100vh;
        background-image: url(/img/tree.jpg);
        background-size: cover;
      }
      .project-layout-content {
        height: auto;
        padding: 1rem;
      }
  
  `}</style>
    </DefaultLayout>
  );
}
