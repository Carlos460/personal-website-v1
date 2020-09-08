import Head from "next/head";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import Navbar from "./components/navbar";
import Hamburger from "./components/hamburger";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Carlos Flores</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hamburger></Hamburger>
        <Navbar pageTitle="Carlos Flores"></Navbar>
        <div className="header">
          <div className="header-image"></div>
          <div className="header-content">
            <div className="text-container">
              <h1 className="header-title">Front End | Software Developer</h1>
              <p>Proficient with javacript and working with React.js</p>
            </div>
            <div className="button-container">
              <Link href="#portfolio">
                <button className="header-button">LATEST PROJECTS!</button>
              </Link>
            </div>
          </div>
        </div>
        <Portfolio></Portfolio>
        <Contact></Contact>
      </main>
      <footer></footer>
      <style jsx>{`
        .header {
          padding-top: 5rem;
          min-height: 100vh;
          background-image: url(/img/background.jpg);
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
          color: white
        }
        .header-title{ 
          font-size: 4rem;
        }
        .text-container > p{
          font-size: 1.8rem;
        }
        .button-container {
          margin: 2rem auto;
          display: flex;
          justify-content: center;
        }
        .header-button {
          height: 4rem;
          width: 12rem;
          font-size: 1rem;
          outline: none;
          border:solid 2px #fff;
          background: transparent;
          color: #fff !important;
          transition: all 0.2s ease;
        }
        .header-button:hover{
          cursor: pointer;
          border:solid 2px transparent;
          background: #fff;
          color: #1f1f1f !important;
        }
      `}</style>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inconsolata:wght@500&display=swap");
        :root {
          --primary-color: #4381c1;
        }
        html,
        body {
          scroll-behavior: smooth;
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          font-family: "Inconsolata", monospace;
          box-sizing: border-box;
          padding: 0;
          margin: 0;
        }
      `}</style>
    </div>
  );
}
