import { useState, useEffect } from "react";

export default function ProjectCard(props) {
  const [cick, clicked] = useState(false);

  useEffect(() => {});
  return (
    <div>
      <div className="project-card">
        <h1>{props.title}</h1>
      </div>
    <style>{`
    .project-card{
      background-color: #327D9D;
      border-radius: 0.2rem;
      margin: 1rem;
      padding: 1rem;
      height: 15rem;
      width: 25rem;
      transition: transform 0.2s ease;
    }
    .project-card:hover {
      cursor: pointer;
      transform: scale(1.1);
    }
    
    `}</style>
    </div>
  );
}
