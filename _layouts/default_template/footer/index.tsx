
export default function Footer() {
  return (
    <div>
      <footer>
        <section className="footer-title">
          <h1>This is the footer</h1>
        </section>
      </footer>
      <style jsx>{`
      .footer-title{
        background-color: var(--dark-secondary);
        color: white;
        width: 100%;
        min-height: 10rem;
      }
      `}</style>
    </div>
  );
}