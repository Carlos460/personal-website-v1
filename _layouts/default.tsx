import Head from "next/head";
import Navbar from "@includes/navbar/index";
import Hamburger from "@includes/hamburger/index";
import Footer from "@includes/footer/index";

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
        @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
        :root {
          --black: #191919;
          --yellow: #FFD72A;
          --yellow-light: #ffe056;
          --orange: #f77225;
          --blue-dark: #072336;
        }
        * {
          scroll-behavior: smooth;
          font-family: 'Montserrat', sans-serif;
          box-sizing: border-box;
          padding: 0rem;
          margin: 0rem;
        }
      `}</style>
    </main>
  );
}
