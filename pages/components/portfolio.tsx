import ProjectCard from "./project-card";

export default function Portfoliio() {
  return (
    <div>
      <div className="container" id="portfolio">
        <h1>Featuring my latest Projects...</h1>
        <div className="project-holder">
          <div className="feature-area">
            <ProjectCard title="task-it"></ProjectCard>
          </div>
          <div className="projects">
            <ProjectCard title="moon-base"></ProjectCard>
            <ProjectCard title="personal-website"></ProjectCard>
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
          margin: 1rem 0rem;
        }
        .projects {
          display: grid;
          grid-template-columns: 1fr 1fr;
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
