import ProjecLayout from "@layouts/project";
import { GetStaticPaths, GetStaticProps } from "next";
import { getPostBySlug, getAllPosts } from "@api";

export default function ProjectTemplate(props) {
  return <ProjecLayout title={props.title} content={props.content} />;
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: await getPostBySlug(context.params.slug),
  };
};

// @ts-ignore
export const getStaticPaths: GetStaticPaths = async () => {
  let paths = await getAllPosts();
  // @ts-ignore
  paths = paths.map((project) => ({
    params: { slug: project.slug },
  }));
  return {
    paths: paths,
    fallback: false,
  };
};

/*
If a page has dynamic routes, Next.js needs to know all the possible paths 
at build time. getStaticPaths supplies the list of paths that has to be 
rendered to HTML at build time. The fallback property ensures that if you 
visit a route that does not exist in the list of paths, it will return a 404 page.
*/
