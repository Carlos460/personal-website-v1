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
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <div
        style={{
          width: '100%',
        }}
      >
        <div style={{ maxWidth: '1800px', margin: '0px auto' }}>
          {props.children}
          <Footer></Footer>
        </div>
      </div>

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
          --orange: #7cda6a;
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
