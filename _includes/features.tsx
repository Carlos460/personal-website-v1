import ProjectCard from "./project-card";

export default function Portfoliio() {
  return (
    <div>
      <div className="container" id="portfolio">
        <h1>Featuring my latest projects...</h1>
        <div className="project-holder">
          <div className="feature-area">
            <ProjectCard title="Punity" visit_link={"/"} viewcode_link={"private"} learnmore_link={"/projects/punity"}></ProjectCard>
          </div>
          <div className="projects" >
            <ProjectCard title="moon-base" visit_link={"/"} viewcode_link={"/"} learnmore_link={"/projects/"}></ProjectCard>
            <ProjectCard title="Task-it" visit_link={"/"} viewcode_link={"https://github.com/Carlos460/Task-it"} learnmore_link={"/projects/task-it"}></ProjectCard>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          background-color: #000000;
          text-align: center;
          padding: 4rem 10rem;
          height: auto;
          color: white;
        }
        .project-holder {
          height: 100%;
          width: 100%;
          margin-top: 4rem;
        }
        .feature-area {
          width: 100%;
          height: 35rem;
          margin: 1rem 0rem;
        }
        .projects {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 35rem 35rem;
          gap: 1rem;
        }
        @media (max-width: 1400px) {
          .container {
            padding: 4rem 4rem;
          }
          .projects {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}