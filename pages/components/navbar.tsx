import Link from 'next/link'
import { AppProps } from 'next/app'
import { type } from 'os';

type NavbarProps = {
    pageTitle: string
}

export default function Navbar(props: NavbarProps) {
    return (
        <div className="container">
            <h1 className="brand-name">{props.pageTitle}</h1>

            <ul className="link-list">
                <Link href="#portfolio"><a className="link">Porfolio</a></Link>
                <Link href="#contact"><a className="link">Contact</a></Link>
                <Link href="/resume"><a className="link">Resume</a></Link>
            </ul>

            <style jsx>{`
            .container {
                background-color: transparent;
                display: flex;
                height: 4rem;
                position: sticky;
                top: 0rem
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
            }
            .link {
                margin: 1.5rem 1rem;
                text-decoration: none;
                color: white;
            }

            @media only screen and (max-width: 600px){
                .link-list {
                    margin: 0rem 0rem 0rem auto;
                }
            }
            `}</style>
        </div>
    );
}