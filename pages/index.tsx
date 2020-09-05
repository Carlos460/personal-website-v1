import Head from "next/head";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Carlos Flores</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar pageTitle="Carlos Flores"></Navbar>
        <div className="header">
          <div className="header-image"></div>
          <div className="header-title">
            <h1 className="title">Software Developer | Front End</h1>
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
          transform: deg(180);
          background-repeat: no-repeat;
          background-size: cover;
          background-position: bottom;
          display: flex;
          flex-wrap: wrap;
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
        .header-title {
          width: 100%;
          text-align: center;
        }
        h1 {
          color: white;
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
