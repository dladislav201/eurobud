import Link from "next/link";

export default function Conversation() {
  return (
    <main className="main">
      <section className="contact-page-container">
        <div className="contact-page-content">
          <div className="headline-container">
            <div className="wrapper inline-narrow">
              <h1 className="contact-page-title">
                Давайте разом знайдемо індивідуальне рішення для вашого
                об&apos;єкту.
              </h1>
              <p className="contact-page-info">
                Перш ніж ми зможемо почати, вкажіть контактні данні. Менеджер
                нашої бізнес-групи зателефонує вам та обговорить, які продукти
                вам найкраще підходять.
              </p>
            </div>
          </div>
          <form className="lead-form">
            <div className="field-wrapper">
              <div className="user-box" data-valid-parent>
                <input
                  className="contact-input"
                  name="__name"
                  type="text"
                  maxLength={40}
                  data-valid
                  required
                />
                <label className="input-label contact-input-label">
                  Ім&apos;я
                </label>
                <p className="error-msg">
                  <span className="material-symbols-outlined">error</span>
                  Будь ласка, введіть своє Ім&apos;я.
                </p>
              </div>
              <div className="user-box" data-valid-parent>
                <input
                  className="contact-input"
                  name="__phone"
                  type="tel"
                  maxLength={40}
                  data-valid
                  required
                />
                <label className="input-label contact-input-label">
                  Номер Телефону
                </label>
                <p className="error-msg">
                  <span className="material-symbols-outlined">error</span>
                  Будь ласка, введіть свій Номер Телефону.
                </p>
              </div>
            </div>
            <div className="rules-addoption-wrapper">
              <p className="rules-addoption-label">
                Надсилаючи форму ви приймаєте{" "}
                <Link
                  className="rules-addoption-link"
                  href="/policy"
                  target="_blank"
                >
                  Політику Конфіденційності
                </Link>{" "}
                та{" "}
                <Link
                  className="rules-addoption-link"
                  href="/terms"
                  target="_blank"
                >
                  Умови Використання
                </Link>{" "}
                Вебсайту.
              </p>
            </div>
            <button id="leadBtn" className="lead-btn" type="submit">
              Надіслати
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
