import { Ribbon } from "@/components";

export default function Sliding() {
  return (
    <main className="main">
      <Ribbon />

      <section className="product-banner" id="resizedVideoContainer">
        <div className="wrapper inline-wide">
          <h1 className="product-banner-title">Ролети</h1>
          <p className="product-banner-slogan">
            Керуйте комфортом однією кнопкою.
          </p>
        </div>
        <div
          className="product-hero-container"
          id="resizedVideo"
          data-switch-parent
        >
          <video
            id="switchVideo"
            className="product-hero-video"
            poster="/img/shutter-poster.jpg"
            autoPlay
            playsInline
            muted
            loop
          >
            <source src="/video/shutter-clip.mp4" type="video/mp4" />
          </video>
          <div className="video-play-btn-container">
            <button className="btn-play btn-secondary" data-switch-btn></button>
          </div>
        </div>
      </section>

      <section className="installation-container">
        <div className="installation-img-container">
          <figure className="installation-img"></figure>
        </div>
        <div className="installation-title-position">
          <h1 className="headline average">
            Довіряйте встановлення професіоналам.
          </h1>
        </div>
        <div className="installation-content-position">
          <p className="installation-undtitle">
            Співробітники наших сервісних центрів отримують знання та досвід
            доступні через навчальні проекти. Якщо ви не можете отримати
            потрібної допомоги у виробників або постачальників вашого виробу, ми
            допоможемо вам.
          </p>
          <a className="second-link" href="/conversation">
            Отримати консульацію
            <span className="material-symbols-outlined">chevron_right</span>
          </a>
        </div>
      </section>

      <section className="contact-container">
        <div className="wrapper inline-wide">
          <h1 className="contact-title">Як замовити</h1>
          <p className="contact-undtitle">
            Ми тут щоб знайти найкраще рішення для вас та вашого об'єкту.
          </p>
          <a className="contact-btn-onpage" href="/conversation">
            Розпочати
            <span className="material-symbols-outlined">chevron_right</span>
          </a>
          <h2 className="headline small">Ролети</h2>
          <p className="contact-index">Більше систем</p>
          <a href="/gate" className="contact-link">
            Ворота
          </a>
          <a href="/automatic" className="contact-link">
            Автоматика
          </a>
          <a href="/panorama" className="contact-link">
            Розсувні системи
          </a>
          <a href="/barrier" className="contact-link">
            Шлагбауми
          </a>
        </div>
      </section>
    </main>
  );
}
