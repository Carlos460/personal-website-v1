import Head from "next/head";
import Navbar from "./navbar/index";
import Footer from "./footer/index";

export default function DefaultLayout(props: { title: string, children: object }) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content="My portfolio website featuring my latest projects." />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:image" content="/img/portfolio.png"></meta>
      </Head>
      <Navbar />
      {props.children}
      <Footer></Footer>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@1,300&display=swap');
        :root {
          --black: #191919;
          --yellow: #FFD72A;
          --yellow-light: #ffe056;
          --orange: #f77225;
          --blue-dark: #072336;
          --dark-secondary: #000B14;
        }
        * {
          scroll-behavior: smooth;
          font-family: 'Montserrat', sans-serif;
          box-sizing: border-box;
          padding: 0rem;
          margin: 0rem;
        }
      `}</style>
    </>
  );
}
