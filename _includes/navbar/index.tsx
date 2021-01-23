import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  return (
    <div>
      <div className={`navbar`}>
        <ul className="link-list">
          <a className="link" href="/#about">
            <b>About</b>
          </a>
          <a className="link" href="/#contact">
            <b>Contact</b>
          </a>
          <Link
            href="https://drive.google.com/file/d/1QnxS-72U0BmqWf8ZIRuZ6k71yZPXEgAh/view?usp=sharing"
            passHref
          >
            <a className="link" target="_blank">
              <b>Resume</b>
            </a>
          </Link>
        </ul>
      </div>

      <style jsx>{`
        .navbar {
          width: 100%;
          display: flex;
          justify-content: center;
          margin-top: 20px;
        }
        .link-list {
          list-style: none;
          padding: 0px 8px;
          display: flex;
          border-top: solid 2px var(--light-secondary);
        }

        .link {
          text-align: right;
          padding: 0.8rem 0rem;
          margin: 0px 15px;
          text-decoration: none;
          color: var(--light-secondary);
          transition: color 0.2s ease-out;
        }
        .link:hover {
          color: var(--primary);
        }
      `}</style>
    </div>
  );
}
