import Head from 'next/head';
import Navbar from '@includes/navbar/index';
import Footer from '@includes/footer/index';

export default function DefaultLayout(props: {
  title: string;
  children: object;
}) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta
          name="description"
          content="My portfolio website featuring my latest projects."
        />
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
          --white: #ffffff;
          --dark: #191919;
          --dark-secondary: #000b14;
          --blue-dark: #072336;
          --blue: #067eed;
          --blue-light: #c1e6ff;
          --orange: #ff7c1f;
        }
        * {
          scroll-behavior: smooth;
          font-family: 'Montserrat', sans-serif;
          box-sizing: border-box;
          padding: 0px;
          margin: 0px;
        }
      `}</style>
    </>
  );
}
