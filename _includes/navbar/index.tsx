import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [navbarHidden, setNavbarHidden] = useState("");
  const [previouseScrollPosition, setPreviouseScrollPostion] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      const currentScrollPosition = window.pageYOffset;
      const navbarSettingState = currentScrollPosition < previouseScrollPosition
        ? setNavbarHidden("show-navbar")
        : setNavbarHidden("hide-navbar");
      setPreviouseScrollPostion(currentScrollPosition);
    };
  }, [previouseScrollPosition]);

  return (
    <div>
      <div className={`navbar ${navbarHidden}`}>
        <h1 className="brand-name">Carlos Flores</h1>
        <ul className="link-list">
          <Link href="/#portfolio">
            <a className="link">Porfolio</a>
          </Link>
          <Link href="/">
            <a className="link">Contact</a>
          </Link>
          <Link href="/">
            <a className="link">Resume</a>
          </Link>
        </ul>
      </div>

      <style jsx>{`
        .navbar {
          width: 100%;
          display: flex;
          position: fixed;
          z-index: 10;
          top: 0rem;
          transition: top 0.2s;
          background-color: black;
        }
        .hide-navbar {
          top: -5rem;
        }
        .show-navbar{
          top: 0rem;
        }
        .brand-name {
          margin: 0.5rem 1rem;
          color: white;
        }
        .link-list {
          list-style: none;
          margin: 0rem 5rem 0rem auto;
          display: flex;
          width: 30rem;
          justify-content: space-between;
        }

        .link {
          height: 3rem;
          width: 8rem;
          align-text: center;
          margin: 0.5rem 2rem;
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
      `}</style>
    </div>
  );
}
