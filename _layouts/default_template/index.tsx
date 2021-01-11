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
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

        :root {
          --light: #f5f4f4;
          --light-secondary: #d4d4d4;
          --dark: #131212;
          --dark-secondary: #202020;
          --dark-light: #252525;
          --primary: #fcf700;
          --primary-dark: #072336;
          --primary-light: #95d5ff;
          --secondary: #ffa742;
          --disabled: #8a8a8a;
          --warning: #e40000;
        }
        body {
          background-color: var(--dark);
        }
        * {
          scroll-behavior: smooth;
          font-family: 'Montserrat', sans-serif;
          box-sizing: border-box;
          padding: 0px;
          margin: 0px;
        }
      `}</style>
      <script
        type="text/javascript"
        src="https://platform.linkedin.com/badges/js/profile.js"
        async
        defer
      ></script>
    </>
  );
}
