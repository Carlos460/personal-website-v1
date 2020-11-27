import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [navbarHidden, setNavbarHidden] = useState('');
  const [navbarTransparent, setNavbarTransparent] = useState('transparent');
  const [previouseScrollPosition, setPreviouseScrollPostion] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      const currentScrollPosition = window.pageYOffset;
      currentScrollPosition < previouseScrollPosition
        ? setNavbarHidden('show-navbar')
        : setNavbarHidden('hide-navbar');
      setPreviouseScrollPostion(currentScrollPosition);

      currentScrollPosition < 40
        ? setNavbarTransparent('transparent')
        : setNavbarTransparent('');
    };
  }, [previouseScrollPosition]);

  return (
    <div>
      <div className={`navbar ${navbarHidden} ${navbarTransparent}`}>
        <h1 className="brand-name">
          <Link href="/">
            <a className="link">Carlos Flores</a>
          </Link>
        </h1>
        <ul className="link-list">
          <Link href="/#portfolio" passHref>
            <a className="link"><b>Porfolio</b></a>
          </Link>
          <a className="link" href='mailto:carlosfloresalex@gmail.com?subject=Greetings from:' target='_blank'><b>Contact</b></a>
          <Link href='https://drive.google.com/file/d/1WoYpNKDvkWbdiN2oTzjRY3j3lJloqzCT/view?usp=sharing' passHref>
            <a className="link" target='_blank'><b>Resume</b></a>
          </Link>
        </ul>
      </div>

      <style jsx>{`
        .navbar {
          width: 100%;
          height: 4rem;
          padding: 0rem 15%;
          display: flex;
          justify-content: space-between;
          position: fixed;
          z-index: 10;
          top: 0rem;
          transition: top 0.2s, background-color 0.2s;
          background-color: rgba(0,0,0,0.9);
        }
        .hide-navbar {
          top: -5rem;
        }
        .show-navbar{
          top: 0rem;
        }
        .transparent {
          background-color: rgba(0,0,0,0);
        }
        .brand-name {
          margin: auto 0rem;
          color: white;
        }
        .link-list {
          list-style: none;
          margin: auto 0rem;;
          display: flex;
          width: 30rem;
          justify-content: space-between;
        }

        .link {
          height: 3rem;
          width: 8rem;
          align-text: center;
          padding: 0.8rem 0rem;
          text-decoration: none;
          color: white;
          text-align: center;
        }
        @media only screen and (max-width: 600px) {
          .link-list {
            margin: 0rem 0rem 0rem auto;
          }
        }
        @media only screen and (max-width: 850px){
          .brand-name{
            display: none;
          }
          .link-list{
            width: 100%;
            margin: 0rem;
            padding: 0.8rem 0rem;
          }
        }
      `}</style>
    </div>
  );
}
