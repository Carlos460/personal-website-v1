import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [navbarHidden, setNavbarHidden] = useState('');
  const [navbarTransparent, setNavbarTransparent] = useState('');
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
          <Link href="/#portfolio">
            <a className="link"><b>Porfolio</b></a>
          </Link>
          <Link href="/#contact">
            <a className="link"><b>Contact</b></a>
          </Link>
          <Link href="/">
            <a className="link"><b>Resume</b></a>
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
