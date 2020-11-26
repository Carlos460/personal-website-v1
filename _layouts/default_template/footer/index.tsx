import Link from 'next/link'

import { FooterLink } from './styles'


export default function Footer() {
  return (
    <div>
      <footer>
        <section className="footer-title">
          <h1> <Link href='/'><FooterLink><u>Go to the Top</u></FooterLink></Link></h1>
          <br />
          <div className="links-conatainer">
            <br />
            <h4>Email: carlosfloresalex@gmail.com</h4>
          </div>
          <div className='links-container'>
            <FooterLink href='https://github.com/Carlos460' target='_blank'><b>Github</b></FooterLink>
            <FooterLink href='https://www.linkedin.com/in/carlos-flores-1795981b6/' target='_blank'><b>Linkin</b></FooterLink>
          </div>
        </section>
      </footer>
      <style jsx>{`
      .footer-title{
        background-color: var(--dark-secondary);
        color: white;
        width: 100%;
        min-height: 10rem;
        display: flex;
        flex-direction: column;
        text-align: center;
      }
      .links-container {
        display: flex;
        flex: direction: row;
        justify-content: space-around;
        width: 20rem;
        margin: 1rem auto;
      }
      `}</style>
    </div>
  );
}