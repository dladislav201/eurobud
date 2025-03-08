import { ContactInfo, Installation } from "@/components";
import Link from "next/link";

export default function Barrier() {
  return (
    <main className="main">
      <section className="barrier-hero-section" data-nav-trigger>
        <figure className="barrier-hero-figure"></figure>
        <div className="barrier-hero-text-section">
          <div className="barrier-hero-text-wrapper one">
            <p className="barrier-hero-uptitle">Шлагбауми</p>
          </div>
          <div className="barrier-hero-text-wrapper two">
            <h1 className="barrier-hero-title">Безпека вашого</h1>
          </div>
          <div className="barrier-hero-text-wrapper three">
            <h1 className="barrier-hero-title">простору.</h1>
          </div>
        </div>
      </section>

      <section className="barrier-hero-describe-section">
        <div className="barrier-hero-describe-wrapper">
          <p className="barrier-hero-undtitle">
            Забезпечуйте безпеку свого паркувального місця, зберігайте
            конфіденційність місць загального користування, контролюйте вхід і
            вихід з обмежених зон за допомогою елегантно спроектованих дорожніх
            бар&apos;єрів, що поєднують продуктивність і довговічність продукту,
            навіть у зонах з інтенсивним рухом транспорту.
          </p>
          <div className="barrier-main-btn-container">
            <Link className="main-btn black" href="/conversation">
              Замовити розрахунок
            </Link>
          </div>
        </div>
      </section>

      <section className="barrier-card-container">
        <div className="barrier-card four">
          <figure className="barrier-card-figure four"></figure>
          <div className="barrier-card-text-wrapper">
            <h1 className="barrier-card-title">Повний контроль.</h1>
            <p className="barrier-card-undtitle">
              Легко керуйте пультом або навіть смартфоном.
            </p>
            <p
              className="barrier-card-btn open-card-oncard"
              data-container="four"
            >
              Детальніше
              <span className="material-symbols-outlined">chevron_right</span>
            </p>
          </div>
        </div>
        <div className="barrier-card one">
          <figure className="barrier-card-figure one"></figure>
          <div className="barrier-card-text-wrapper">
            <h1 className="barrier-card-title">Безпека в кожній деталі.</h1>
            <p className="barrier-card-undtitle">
              Ми дбаємо про кожен аспект встановлення.
            </p>
            <p
              className="barrier-card-btn open-card-oncard"
              data-container="one"
            >
              Детальніше
              <span className="material-symbols-outlined">chevron_right</span>
            </p>
          </div>
        </div>
        <div className="barrier-card two">
          <figure className="barrier-card-figure two"></figure>
          <div className="barrier-card-text-wrapper">
            <h1 className="barrier-card-title">Міцність та витривалість.</h1>
            <p className="barrier-card-undtitle">
              Міцні сталеві конструкції, довговічні двигуни.
            </p>
            <p
              className="barrier-card-btn open-card-oncard"
              data-container="two"
            >
              Детальніше
              <span className="material-symbols-outlined">chevron_right</span>
            </p>
          </div>
        </div>
        <div className="barrier-card three">
          <figure className="barrier-card-figure three"></figure>
          <div className="barrier-card-text-wrapper">
            <h1 className="barrier-card-title">Будь-який діапазон.</h1>
            <p className="barrier-card-undtitle">
              Шлагбауми для будь-якої ширини проєму.
            </p>
            <p
              className="barrier-card-btn open-card-oncard"
              data-container="three"
            >
              Детальніше
              <span className="material-symbols-outlined">chevron_right</span>
            </p>
          </div>
        </div>
      </section>

      <Installation />
      <ContactInfo />
    </main>
  );
}
