import { useState, useEffect, useRef } from "react";

export default function ProjectCard(props) {
  const Modal = useRef(null);
  const [click, clicked] = useState(false);

  const eventHandler = (e) => {
    const isOuterModal = e.target.classList.contains("outer-modal");
    isOuterModal ? clicked(false) : null;
  };

  const setModalState = () => {
    click
      ? Modal.current.classList.add("show")
      : Modal.current.classList.remove("show");
  };

  useEffect(() => {
    Modal.current.addEventListener("click", eventHandler);
    setModalState();
  });

  return (
    <div>
      <div
        onClick={() => {
          clicked(true);
        }}
        className="project-card"
      >
        <div className="overlay">
          <div className="card-content">
            <h1>{props.title}</h1>
          </div>
        </div>
      </div>
      <div className="outer-modal" ref={Modal}>
        <div className="inner-modal">
          <h1>{props.title}</h1>
        </div>
      </div>
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
    .project-card:hover {
      cursor: pointer;
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
    .outer-modal {
      display: grid;
      position: fixed;
      width: 100vw;
      height: 100vh;
      top: 0;
      left: 0;
      background-color: rgba(0,0,0,0.5);
      justify-content: center;
      align-items: center;
      opacity: 0;
      pointer-events: none;
      z-index: 10;
      transition: opacity 0.2s ease;
    }
    .inner-modal {
      height: 25rem;
      width: 25rem;
      background-color: white;
    }
    .show {
      opacity: 1;
      pointer-events: all;
    }
    
    `}</style>
    </div>
  );
}
