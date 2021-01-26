import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <div>
      <div className={`navbar`}>
        <ul className="link-list">
          <li className="link-container">
            <a className="link" href="/#about">
              <motion.div whileHover={{ y: -3 }} whileTap={{ y: 1 }}>
                <b>About</b>
              </motion.div>
            </a>
          </li>
          <li className="link-container">
            <a className="link" href="/#portfolio">
              <motion.div whileHover={{ y: -3 }} whileTap={{ y: 1 }}>
                <b>Portfolio</b>
              </motion.div>
            </a>
          </li>
          <li className="link-container">
            <Link
              href="https://drive.google.com/file/d/1XeROqVfO1h99G9Kd_2I0yltY78lW0OpZ/view?usp=sharing"
              passHref
            >
              <a className="link" rel="noreferrer" target="_blank">
                <motion.div whileHover={{ y: -3 }} whileTap={{ y: 1 }}>
                  <b>Resume</b>
                </motion.div>
              </a>
            </Link>
          </li>
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
          border-bottom: solid 2px var(--light-secondary);
        }

        .link-container {
          text-align: right;
          padding: 0.8rem 0rem;
          margin: 0px 15px;
          transition: color 0.2s ease-out;
        }
        .link {
          margin: auto;
          text-decoration: none;
          color: var(--light-secondary);
        }
      `}</style>
    </div>
  );
}
