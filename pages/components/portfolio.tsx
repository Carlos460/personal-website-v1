export default function Portfoliio() {
    return (
        <div >
            <div className="container" id="portfolio">
                <h1>Portfolio</h1>
            </div>
            <style jsx>{`
            .container {
                min-height: 50rem;
                background-color: black;
                text-align: center;
                padding: 1rem 2rem;
            }
            h1 {
                color: white;
            }
            `}</style>
        </div>
    );
}