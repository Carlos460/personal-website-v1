import Link from "next/link";
import { AppProps } from "next/app";
import { type } from "os";
import { useEffect } from "react";

type NavbarProps = {
  pageTitle: string;
};

export default function Navbar(props: NavbarProps) {
  useEffect(() => {
    const nav = document.querySelector(".navbar");

    const turnTansparent = () => {
      nav.classList.remove("show-background");
      nav.classList.add("transparent");
    };
    const showBackground = () => {
      nav.classList.remove("transparent");
      nav.classList.add("show-background");
    };

    window.onscroll = function () {
      let changeStyle =
        window.pageYOffset < 150 ? turnTansparent() : showBackground();
    };
  });

  return (
    <div className='navbar transparent'>
      <h1 className='brand-name'>{props.pageTitle}</h1>

      <ul className='link-list'>
        <Link href='#portfolio'>
          <a className='link'>Porfolio</a>
        </Link>
        <Link href='#contact'>
          <a className='link'>Contact</a>
        </Link>
        <Link href='/resume'>
          <a className='link'>Resume</a>
        </Link>
      </ul>

      <style jsx>{`
        .navbar {
          width: 100%;
          display: flex;
          position: fixed;
          top: 0rem;
          transition: background-color 0.2s;
        }
        .transparent {
          background-color: transparent;
        }
        .show-background {
          background-color: #68aec8;
        }
        .brand-name {
          margin: 0.5rem 1rem;
          color: white;
        }
        .link-list {
          list-style: none;
          margin: 0rem 5rem 0rem auto;
          display: flex;
          width: 20rem;
          justify-content: space-between;
        }
        .link {
          align-text: center;
          margin: 1.5rem 1rem;
          text-decoration: none;
          color: white;
        }
        .link::after {
          content: "";
          position: absolute;
          bottom: 1.2rem;
          display: block;
          background-color: white;
          width: 3.8rem;
          height: 0.2rem;
          opacity: 0;
          transition: opacity 0.2s ease-in;
        }
        .link:hover::after {
          opacity: 1;
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
