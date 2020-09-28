import DefaultLayout from "@layouts/default"
// Component Imports
import Features from "../_includes/features";
import Contact from "../_includes/contact";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <DefaultLayout>
        <main>
          <div className="header">
            <div className="header-image"></div>
            <div className="header-content">
              <div className="text-container">
                <h1 className="header-title">Front End | Software Developer</h1>
                <p>Proficient with javacript and working with React.js</p>
              </div>
              <div className="header-button-container">
                <Link href="#portfolio">
                  <button className="header-button">LATEST PROJECTS!</button>
                </Link>
              </div>
            </div>
          </div>
          <Features></Features>
          <Contact></Contact>
        </main>
      </DefaultLayout>

      <style jsx>{`
        .header {
          padding-top: 5rem;
          min-height: 100vh;
          background-image: url(/img/background.webp);
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          display: flex;
        }
        .header:after {
          content: "";
          position: absolute;
          z-index: 1;
          bottom: 0;
          left: 0;
          pointer-events: none;
          background-image: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0),
            rgba(0, 0, 0, 1) 90%
          );
          width: 100%;
          height: 8em;
        }
        .header-content {
          width: 60rem;
          height: 30rem;
          margin: auto;
        }
        .text-container {
          width: 100%;
          text-align: center;
          color: white;
        }
        .header-title {
          font-size: 4rem;
          margin: 1rem 0rem;
        }
        .text-container > p {
          font-size: 1.8rem;
        }
        .header-button-container {
          margin: 2rem auto;
          display: flex;
          justify-content: center;
        }
        .header-button {
          height: 4rem;
          width: 12rem;
          font-size: 1rem;
          outline: none;
          border: solid 2px #fff;
          background: transparent;
          color: #fff !important;
          transition: all 0.2s ease;
        }
        .header-button:hover {
          cursor: pointer;
          border: solid 2px transparent;
          background: #fff;
          color: #1f1f1f !important;
        }
      `}</style>
    </div>
  );
}