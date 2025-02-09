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
              <a className="contact-page-link" href="/">
                Головна
                <span className="material-symbols-outlined special">
                  chevron_right
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
