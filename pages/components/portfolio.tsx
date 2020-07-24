import ProjectCard from './project-card';

export default function Portfoliio() {
  return (
    <div>
      <div className="container" id="portfolio">
        <h1>Portfolio</h1>
        <div className="project-holder">
          <ProjectCard title="task-it"></ProjectCard>
          <ProjectCard title="moon-base"></ProjectCard>
          <ProjectCard title="personal-website"></ProjectCard>
        </div>
      </div>
      <style jsx>{`
        .container {
          background-color: #eeeeee;
          text-align: center;
          padding: 5rem 2rem;
          height: auto;
        }
        .project-holder{
          margin: 2rem 0rem;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          height: auto;
        }
        h1 {
          color: black;
        }
      `}</style>
    </div>
  );
}
