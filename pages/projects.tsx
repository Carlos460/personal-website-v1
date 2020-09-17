import DefaultLayout from "@layouts/default";
import { GetStaticProps } from "next";
import { getConfig, getAllProjects } from "@api";
import ProjectCard from "@includes/project-card"

export default function ProjectsPage(props) {
  return (
    <DefaultLayout title={props.title} description={props.description}>
      <section className="project-container">
        <p>List of posts:</p>
        <div className="project-list">
          {props.projects.map(function (project) {
            return (
              <div className="project-card-container">
                <ProjectCard title={project.title} visit_link={"/"} viewcode_link={project.code_link} learnmore_link={"/projects/" + project.slug}></ProjectCard>
              </div>
            );
          })
          }
        </div>
      </section>

      <style jsx>{`
      .project-container {
        text-align: center;
        width: 100%;
        min-height: auto;
        background-color: black;
        color: white;
        padding: 5rem 0rem;
      }
      .project-list {
        width: 80%;
        margin: 5rem auto;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
      }
      .project-card-container {
        margin: 1rem;
        width: 25rem;
        height: 30rem;
      }
        `}</style>
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
  const allProjects = await getAllProjects();
  return {
    props: {
      projects: allProjects,
      title: config.title,
      description: config.description,
    },
  };
};
