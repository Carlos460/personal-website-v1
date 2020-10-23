import Link from "next/link";

export default function ProjectCard(props) {
  return (
    <section className="project-card">
      <header className="card-content">
        <h1>{props.title}</h1>
      </header>
      <nav className="button-container">
        <Link href={props.learnmore_link}>
          <button className="project-card-button">Learn More</button>
        </Link>
        <ViewCodeButton viewcode_link={props.viewcode_link}></ViewCodeButton>
        <Link href={props.visit_link}>
          <button className="project-card-button">Visit</button>
        </Link>
      </nav>
      <style>{`
    .project-card{
      background-image: url(/img/tree.jpg);
      background-size: cover;
      color: white;
      padding: 0.5rem;
      height: 100%;
      min-hieght: 10rem;
      width: 100%;
      transition: transform 0.2s ease;
      overflow: hidden;
      position:relative;
    }
    .project-card:hover .overlay {
      background-color: rgba(0,0,0,0.0);
    }
    .overlay {
      background-color: rgba(0,0,0,0.5);
      position: absolute;
      top: 0px;
      left: 0px;
      height: 100%;
      width: 100%;
      transition: background-color 0.3s ease;
      display: flex;
      flex-direction: column;
    }
    .card-content{
      padding: 1.2rem;
    }
    .button-container {
      position: absolute;
      bottom: 1rem;
      right: 1rem;
      display: flex;
    }
    .project-card-button{
      height: 2rem;
      width: 5rem;
      outline: none;
      border: solid 2px #fff;
      background: transparent;
      color: #fff !important;
      transition: all 0.2s ease;
    }
    .project-card-button:hover {
      cursor: pointer;
      border: solid 2px transparent;
      background: #fff;
      color: #1f1f1f !important;
    }
    `}</style>
    </section>
  );
}

function ViewCodeButton(props) {
  if (props.viewcode_link === "private") {
    return (
      <button className="project-card-button">Private</button>
    );
  } else {
    return (
      <a href={props.viewcode_link}>
        <button className="project-card-button">View code</button>
      </a>
    );
  }

}