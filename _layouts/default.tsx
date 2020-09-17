import Head from "next/head";
import Footer from "@includes/footer";
import Navbar from "@includes/navbar";
import Hamburger from "@includes/hamburger";

export default function DefaultLayout(props) {
  return (
    <main>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Head>
      <Navbar />
      <Hamburger />
      {props.children}
      <Footer></Footer>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inconsolata:wght@500&display=swap");
        :root {
          --primary-color: #4381c1;
        }
        html,
        body {
          background-color: balck;
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
    </main>
  );
}
