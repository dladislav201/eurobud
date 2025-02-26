import Link from "next/link";

export default function Success() {
  return (
    <main className="main success">
      <section className="contact-page-container">
        <div className="contact-page-content">
          <div className="headline-container">
            <div className="wrapper inline-narrow">
              <h1 className="contact-page-title">Дякуємо.</h1>
              <p className="contact-page-info">
                Ми зателефонуємо вам найближчим часом.
              </p>
              <Link className="contact-page-link" href="/">
                Головна
                <span className="material-symbols-outlined special">
                  chevron_right
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
