import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hamburger() {
  const [hamburger, setHamburger] = useState("hide-hamburger");
  const [activeHam, setActiveHam] = useState(false);

  const hamState = activeHam ? ["change", "show-link-list"] : "";

  function resetHamburger() {
    setHamburger("hide-hamburger");
    setActiveHam(false);
  }

  useEffect(() => {
    // Hiding or Showing the Hamburger
    window.addEventListener("scroll", () => {
      const lastScrollPosition = window.scrollY;
      const hamburgerState =
        lastScrollPosition < 15 ? resetHamburger() : setHamburger("");
    });
  });
  return (
    <div>
      <div
        className={`hamburger ${hamburger} ${hamState[0]} `}
        onClick={() => { setActiveHam(!activeHam) }}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <ul className={`hamburger-link-list ${hamState[1]}`}>
        <Link href='#portfolio'>
          <a className='hamburger-link'>Porfolio</a>
        </Link>
        <Link href='#contact'>
          <a className='hamburger-link'>Contact</a>
        </Link>
        <Link href='/resume'>
          <a className='hamburger-link'>Resume</a>
        </Link>
      </ul>
      <style jsx>{`
              .hamburger {
                position: fixed;
                right: 0.5rem;
                top: 0.5rem;
                width: 3rem;
                height: 3rem;
                transition: top 0.2s ease;
                z-index: 5;
              }
              .hide-hamburger {
                top: -5rem;
              }
              .hamburger:hover {
                cursor: pointer;
              }
              .hamburger-link-list {
                position: fixed;
                display: flex;
                justify-content: space-around;
                background-color: transparent;
                height: 3rem;
                width 20rem;
                padding-top: 1rem;
                color: white;
                top: 0rem;
                right: -20rem;
                opacity: 0;
                transition: right 0.4s, opacity 0.2s;
                z-index: 5;
              }
              .show-link-list {
                right: 5rem;
                opacity: 1;
              }
              .hamburger-link {
                color: white;
                text-decoration: none;
              }
              .bar1, .bar2, .bar3 {
                width: 35px;
                height: 5px;
                background-color: white;
                margin: 6px 0;
                transition: 0.4s;
                pointer-events: none;
              }
              .change .bar1 {
                -webkit-transform: rotate(-45deg) translate(-9px, 6px);
                transform: rotate(-45deg) translate(-9px, 6px);
              }
              .change .bar2 {opacity: 0;}
              
              .change .bar3 {
                -webkit-transform: rotate(45deg) translate(-8px, -8px);
                transform: rotate(45deg) translate(-8px, -8px);
              }
            `}</style>
    </div>
  );
}