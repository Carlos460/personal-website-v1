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
        <h1>{props.title}</h1>
      </div>
      <div className="outer-modal" ref={Modal}>
        <div className="inner-modal">
          <h1>{props.title}</h1>
        </div>
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
