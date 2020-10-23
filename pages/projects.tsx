import DefaultLayout from "@layouts/default";
import { GetStaticProps } from "next";
import ProjectCard from "@includes/project-card"

export default function ProjectsPage(props) {
  return (
    <DefaultLayout title={props.title} description={props.description}>
      <section className="project-container">
        <h1>List of posts:</h1>
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