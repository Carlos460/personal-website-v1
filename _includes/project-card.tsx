import Link from "next/link";

export default function ProjectCard(props) {
  return (
    <div>
      <section className="project-card">
        <div className="overlay">
          <header className="card-content">
            <h1>{props.title}</h1>

          </header>
          <nav>
            <Link href={props.link}>            
            <button className="project-button">View</button>
            </Link>
          </nav>
        </div>
      </section>
      <style>{`
    .project-card{
      background-image: url(/img/tree.jpg);
      background-size: cover;
      color: white;
      padding:0.5rem;
      height: 30rem;
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
    }
    .card-content{
      padding: 0.5rem;
    }
    .project-button{ 
      height: 3rem;
      width: 5rem;
    }
    `}</style>
    </div>
  );
}
