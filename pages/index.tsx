import Head from 'next/head';
import Portfolio from './components/portfolio';
import Header from './components/header';
import Contact from './components/contact';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main>
        <Header></Header>
        <Portfolio></Portfolio>
        <Contact></Contact>
      </main>
      <footer>

      </footer>
      <style jsx global>{`
        :root {
          --primary-color: #4381C1;
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
    </div >
  )
}
