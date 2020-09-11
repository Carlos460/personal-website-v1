import DefaultLayout from "@layouts/default";
import Link from "next/link";
import { GetStaticProps } from "next";
import { getConfig, getAllPosts } from "@api";

export default function Blog(props) {
  return (
    <DefaultLayout title={props.title} description={props.description}>
      <p>List of posts:</p>
      <ul
        style={{
          height: "20rem",
          width: "40rem",
          display: "flex",
          justifyContent: "center",
          paddingTop: "5rem",
        }}
      >
        {props.posts.map(function (post, idx) {
          return (
            <li key={idx}>
              <Link href={"/projects/" + post.slug}>
                <a>{post.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </DefaultLayout>
  );
}

/*
getStaticProps is called at the build time to 
pre-render pages by passing props to the default 
component of the page. We use this function to fetch 
the list of all posts at build time and render 
the posts archive on the homepage.
*/

export const getStaticProps: GetStaticProps = async () => {
  const config = await getConfig();
  const allPosts = await getAllPosts();
  return {
    props: {
      posts: allPosts,
      title: config.title,
      description: config.description,
    },
  };
};
