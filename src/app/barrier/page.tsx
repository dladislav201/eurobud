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
            бар'єрів, що поєднують продуктивність і довговічність продукту,
            навіть у зонах з інтенсивним рухом транспорту.
          </p>
          <div className="barrier-main-btn-container">
            <a className="main-btn black" href="/conversation">
              Замовити розрахунок
            </a>
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

          <h2 className="headline small">Шлагбауми</h2>
          <p className="contact-index">Більше систем</p>
          <a href="/gate" className="contact-link">
            Ворота
          </a>
          <a href="/automatic" className="contact-link">
            Автоматика
          </a>
          <a href="/shutter" className="contact-link">
            Ролети
          </a>
          <a href="/panorama" className="contact-link">
            Розсувні системи
          </a>
        </div>
      </section>

      {/* <div className="carousel-open-card-container one" data-container="one">
                    <div className="carousel-open-card-text-wrapper">
                        <h1 className="carousel-open-card-title">Безпека в  кожній деталі.</h1>
                        <p className="barrier-open-card-undtitle">
                            Ми дбаємо про кожен  аспект. Від вбудованих  у кришку ліхтарів до сигнальних лампочок на ґратах. 
                            Від системи ручного розблокування до резервного акумулятора,  що захищає від збоїв електроживлення. 
                            Від виявлення перешкод до автоматичної діагностики несправностей.
                        </p>
                        <button className="round-button big carousel-open-card-btn"  data-container="one"> 
                            <span className="modal-close-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M12.12,10l4.07-4.06a1.5,1.5,0,1,0-2.11-2.12L10,7.88,5.94,3.81A1.5,1.5,0,1,0,3.82,5.93L7.88,10,3.81,14.06a1.5,1.5,0,0,0,0,2.12,1.51,1.51,0,0,0,2.13,0L10,12.12l4.06,4.07a1.45,1.45,0,0,0,1.06.44,1.5,1.5,0,0,0,1.06-2.56Z"></path>
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
                <div className="carousel-open-card-container two" data-container="two">
                    <div className="carousel-open-card-text-wrapper">
                        <h1 className="carousel-open-card-title">Міцність та витривалість.</h1>
                        <p className="barrier-open-card-undtitle">
                            Конструкції виготовлені  зі сталі, щоб прослужити  довгий час навіть при дії навколишнього середовища, 
                            двигуни розраховані на безліч робочих циклів,  а шлагбауми мають спеціальний еліптичний перетин, 
                            щоб протистояти потужним вітровим навантаженням.
                        </p>
                        <button className="round-button big carousel-open-card-btn"  data-container="two">
                            <span className="modal-close-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M12.12,10l4.07-4.06a1.5,1.5,0,1,0-2.11-2.12L10,7.88,5.94,3.81A1.5,1.5,0,1,0,3.82,5.93L7.88,10,3.81,14.06a1.5,1.5,0,0,0,0,2.12,1.51,1.51,0,0,0,2.13,0L10,12.12l4.06,4.07a1.45,1.45,0,0,0,1.06.44,1.5,1.5,0,0,0,1.06-2.56Z"></path>
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
                <div className="carousel-open-card-container three" data-container="three">
                    <div className="carousel-open-card-text-wrapper">
                        <h1 className="carousel-open-card-title">Будь-який діапазон.</h1>
                        <p className="barrier-open-card-undtitle">
                            Незалежно від розміру вашого проєму, ми маємо ідеальне рішення. Стрижні шириною від трьох до 
                            дев'яти метрів, які також доступні в протилежних версіях, які можуть працювати синхронно,  щоб 
                            ще більше збільшити діапазон функціонування.
                        </p>
                        <button className="round-button big carousel-open-card-btn"  data-container="three">
                            <span className="modal-close-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M12.12,10l4.07-4.06a1.5,1.5,0,1,0-2.11-2.12L10,7.88,5.94,3.81A1.5,1.5,0,1,0,3.82,5.93L7.88,10,3.81,14.06a1.5,1.5,0,0,0,0,2.12,1.51,1.51,0,0,0,2.13,0L10,12.12l4.06,4.07a1.45,1.45,0,0,0,1.06.44,1.5,1.5,0,0,0,1.06-2.56Z"></path>
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
                <div className="carousel-open-card-container three" data-container="four">
                    <div className="carousel-open-card-text-wrapper">
                        <h1 className="carousel-open-card-title">Повний контроль.</h1>
                        <p className="barrier-open-card-undtitle">
                            Незалежно від розміру вашого проєму, ми маємо ідеальне рішення. Стрижні шириною від трьох до 
                            дев'яти метрів, які також доступні в протилежних версіях, які можуть працювати синхронно,  щоб 
                            ще більше збільшити діапазон функціонування.
                        </p>
                        <button className="round-button big carousel-open-card-btn"  data-container="three">
                            <span className="modal-close-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M12.12,10l4.07-4.06a1.5,1.5,0,1,0-2.11-2.12L10,7.88,5.94,3.81A1.5,1.5,0,1,0,3.82,5.93L7.88,10,3.81,14.06a1.5,1.5,0,0,0,0,2.12,1.51,1.51,0,0,0,2.13,0L10,12.12l4.06,4.07a1.45,1.45,0,0,0,1.06.44,1.5,1.5,0,0,0,1.06-2.56Z"></path>
                                </svg>
                            </span>
                        </button>
                    </div>
                </div> */}
    </main>
  );
}
