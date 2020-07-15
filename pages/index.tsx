import Head from "next/head";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import Typewriter from "./components/typewriter";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Navbar pageTitle='Carlos Flores'></Navbar>
        <div className='header'>
          <div className='project-showcase'>
            <div className='showcase-card'></div>
          </div>
          <div className='header-title'>
            <h1 className='title'>Software Developer | Front End</h1>
            <Typewriter></Typewriter>
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
          background-image: url(/img/mountain.jpg);
          background-repeat: no-repeat;
          background-size: cover;
          background-position: bottom;
          display: flex;
          flex-wrap: wrap;
        }
        .project-showcase {
          text-align: center;
          width: 100%;
        }
        .showcase-card {
          height: 15rem;
          width: 25rem;
          margin: 1rem auto;
          background-color: white;
          border-radius: 0.2rem;
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
          box-sizing: border-box;
          padding: 0;
          margin: 0;
        }
      `}</style>
    </div>
  );
}
