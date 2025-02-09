import { Ribbon } from "@/components";

export default function Panorama() {
  return (
    <>
      <label className="card-curtain"></label>
      <main className="main flex panorama">
        <Ribbon />

        <section
          className="product-banner"
          id="resizedVideoContainer"
          data-switch-parent
        >
          <div className="wrapper inline-wide">
            <h1 className="product-banner-title">Розсувні системи</h1>
          </div>
          <div className="product-hero-container" id="resizedVideo">
            <video
              id="switchVideo"
              className="product-hero-video"
              poster="/img/panorama-poster.jpg"
              autoPlay
              playsInline
              muted
              loop
            >
              <source src="/video/panorama-clip.mp4" type="video/mp4" />
            </video>
            <figcaption className="video-caption">
              *Автоматично гільйотинна className розсувна система, яка className
              керується дистанційно.
            </figcaption>
          </div>
          <div className="product-welcome-group">
            <div className="btn-groove">
              <a className="btn btn-main btn-small" href="/conversation">
                Замовити розрахунок
              </a>
              <button
                className="btn-play btn-secondary"
                data-switch-btn
              ></button>
            </div>
            <p className="product-welcome-pricing">
              Від 7 700 грн за м<sup className="square">2</sup> до 15 серпня.
            </p>
          </div>
        </section>

        <section id="scrollTarget" className="product-gallery-container">
          <div className="wrapper inline-wide">
            <h1 className="headline average">5 систем на вибір</h1>
          </div>
          <div id="productGallery" className="product-gallery">
            <ul
              id="galleryContainer"
              className="gallery-items-container transition"
            >
              <li id="galleryItem" className="gallery-item first-anim">
                <div className="picture-wrapper" data-gallery-switch-parent>
                  <video
                    id="gallerySwitchVideo"
                    className="video up-system"
                    poster="/img/gallery-product-slide-system-poster.jpg"
                    autoPlay
                    playsInline
                    muted
                    loop
                  >
                    <source
                      src="/video/gallery-product-slide-system.mp4"
                      type="video/mp4"
                    />
                  </video>
                  <button
                    id="gallerySwitchBtn"
                    className="btn-play btn-secondary"
                  ></button>
                </div>
                <div className="typography-wrapper">
                  <p className="description">
                    <span className="dark-span">Слайдингові</span> або
                    паралельно-зсувні системи: стулки їздять по нижньому профілю
                    та збираються в пачку з лівого або правого боку проєму,
                    передаючи навантаження на підлогу, не вимагаючи міцного
                    верхнього проєму.
                  </p>
                  <a className="item-link" href="/conversation">
                    Замовити розрахунок
                    <span className="material-symbols-outlined medium">
                      chevron_right
                    </span>
                  </a>
                </div>
              </li>
              <li id="galleryItem" className="gallery-item second-anim">
                <div className="picture-wrapper" data-gallery-switch-parent>
                  <video
                    id="gallerySwitchVideo"
                    className="video up-system"
                    poster="/img/gallery-product-up-system-poster.jpg"
                    autoPlay
                    playsInline
                    muted
                    loop
                  >
                    <source
                      src="/video/gallery-product-up-system.mp4"
                      type="video/mp4"
                    />
                  </video>
                  <button
                    id="gallerySwitchBtn"
                    className="btn-play btn-secondary"
                  ></button>
                </div>
                <div className="typography-wrapper">
                  <p className="description">
                    <span className="dark-span">Автоматичні гільйотини</span>{" "}
                    або вертикально-зсувні системи: горизонтальні стулки
                    рухаються вгору та вниз за допомогою електроприводу.
                    Керування здійснюється за допомогою спеціального пульта.
                  </p>
                  <a className="item-link" href="/conversation">
                    Замовити розрахунок
                    <span className="material-symbols-outlined medium">
                      chevron_right
                    </span>
                  </a>
                </div>
              </li>
              <li id="galleryItem" className="gallery-item">
                <div className="picture-wrapper">
                  <figure className="picture book-system"></figure>
                </div>
                <div className="typography-wrapper">
                  <p className="description">
                    <span className="dark-span">Поворотно-складні</span> або
                    книжкові системи: стулки одночасно рухаються по верхньому та
                    нижньому профілі. Складаються гармошкою з лівого або правого
                    боку проєму.
                  </p>
                  <a className="item-link" href="/conversation">
                    Замовити розрахунок
                    <span className="material-symbols-outlined medium">
                      chevron_right
                    </span>
                  </a>
                </div>
              </li>
              <li id="galleryItem" className="gallery-item">
                <div className="picture-wrapper">
                  <figure className="picture limitless-system"></figure>
                </div>
                <div className="typography-wrapper">
                  <p className="description">
                    <span className="dark-span">Верхньо-підвісні</span> або
                    безпорогові системи взагалі не потребують порогів, тому що
                    стулки повністю закріплені та їздять по верхньому профілю та
                    складаються пачкою збоку проєму або гармошкою з обох боків.
                  </p>
                  <a className="item-link" href="/conversation">
                    Замовити розрахунок
                    <span className="material-symbols-outlined medium">
                      chevron_right
                    </span>
                  </a>
                </div>
              </li>
              <li id="galleryItem" className="gallery-item">
                <div className="picture-wrapper">
                  <figure className="picture balcony-system"></figure>
                </div>
                <div className="typography-wrapper">
                  <p className="description">
                    <span className="dark-span">Балконні огорожі</span> або
                    балконмакси: скляні системи балюстрад, які встановлюються
                    окремо або в поєднанні з розсувними системами, повністю
                    закриваючи балкон.
                  </p>
                  <a className="item-link" href="/conversation">
                    Замовити розрахунок
                    <span className="material-symbols-outlined medium">
                      chevron_right
                    </span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className="product-gallery-btn-container">
            <div className="btn-groove">
              <button
                id="galleryPrvBtn"
                className="arrow-btn arrow-btn-previous disabled"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
                  <path d="M21.559,12.062 L15.618,17.984 L21.5221,23.944 C22.105,24.533 22.1021,25.482 21.5131,26.065 C21.2211,26.355 20.8391,26.4999987 20.4571,26.4999987 C20.0711,26.4999987 19.6851,26.352 19.3921,26.056 L12.4351,19.034 C11.8531,18.446 11.8551,17.4999987 12.4411,16.916 L19.4411,9.938 C20.0261,9.353 20.9781,9.354 21.5621,9.941 C22.1471,10.528 22.1451,11.478 21.5591,12.062 L21.559,12.062 Z"></path>
                </svg>
              </button>
              <button id="galleryNxtBtn" className="arrow-btn arrow-btn-next">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
                  <path d="M23.5587,16.916 C24.1447,17.4999987 24.1467,18.446 23.5647,19.034 L16.6077,26.056 C16.3147,26.352 15.9287,26.4999987 15.5427,26.4999987 C15.1607,26.4999987 14.7787,26.355 14.4867,26.065 C13.8977,25.482 13.8947,24.533 14.4777,23.944 L20.3818,17.984 L14.4408,12.062 C13.8548,11.478 13.8528,10.5279 14.4378,9.941 C15.0218,9.354 15.9738,9.353 16.5588,9.938 L23.5588,16.916 L23.5587,16.916 Z"></path>
                </svg>
              </button>
            </div>
          </div>
        </section>

        <section className="product-features panorama">
          <div className="product-features-block usability">
            <div className="wrapper inline-narrow">
              <p className="product-features-eyebrow">Зручність</p>
              <h1 className="headline average">Відкриваються одним рухом.</h1>
            </div>
            <div className="media-wrapper">
              <figure className="picture"></figure>
            </div>
            <div className="wrapper inline-narrow">
              <p className="description medium margin">
                У нашому асортименті є 5 типів розсувних систем, і всі вони
                створені для вашого комфорту, забезпечуючи легке та безшумне
                відкривання, як вручну, так і автоматично.
              </p>
              <div className="description-container">
                <img className="icon" src="/img/gear-icon.png" />
                <p className="description medium">Автоматизація</p>
                <p className="description small">
                  Обравши моторизовану версію, ви зможете автоматично відкривати
                  та закривати скляні стулки одним натисканням кнопки.
                </p>
              </div>
            </div>
          </div>
          <div className="product-features-block energy-efficiency">
            <div className="wrapper inline-narrow">
              <p className="product-features-eyebrow">Енергоефективність</p>
              <h1 className="headline average">
                Комфортна температура в будь-яку пору року.
              </h1>
            </div>
            <div className="media-wrapper">
              <figure className="picture"></figure>
            </div>
            <div className="wrapper inline-narrow">
              <p className="description medium">
                Системи витримують температури від -30 °C до +45 °C,
                забезпечуючи комфортний мікроклімат всередині приміщення навіть
                при екстримальних умовах.
              </p>
              <div className="add-char-container">
                <div className="add-char-item">
                  <p className="description small">Зимою від</p>
                  <h1 className="headline small">
                    <span className="count-anim-wrapper">
                      <span>-</span>
                      <span className="number-value-group panorama-system-temperature">
                        <span className="number-group low number-3">
                          <span className="number-item">0</span>
                          <span className="number-item">1</span>
                          <span className="number-item">2</span>
                          <span className="number-item">3</span>
                          <span className="number-item">4</span>
                          <span className="number-item">5</span>
                          <span className="number-item">6</span>
                          <span className="number-item">7</span>
                          <span className="number-item">8</span>
                          <span className="number-item">9</span>
                          <span className="number-item">0</span>
                        </span>
                        <span className="number-group fast number-0">
                          <span className="number-item">0</span>
                          <span className="number-item">1</span>
                          <span className="number-item">2</span>
                          <span className="number-item">3</span>
                          <span className="number-item">4</span>
                          <span className="number-item">5</span>
                          <span className="number-item">6</span>
                          <span className="number-item">7</span>
                          <span className="number-item">8</span>
                          <span className="number-item">9</span>
                          <span className="number-item">0</span>
                        </span>
                      </span>
                      <span>&nbsp;°С</span>
                    </span>
                  </h1>
                </div>
                <div className="add-char-item">
                  <p className="description small">Літом до</p>
                  <h1 className="headline small">
                    <span className="count-anim-wrapper">
                      <span>+</span>
                      <span className="number-value-group panorama-system-temperature">
                        <span className="number-group low number-4">
                          <span className="number-item">0</span>
                          <span className="number-item">1</span>
                          <span className="number-item">2</span>
                          <span className="number-item">3</span>
                          <span className="number-item">4</span>
                          <span className="number-item">5</span>
                          <span className="number-item">6</span>
                          <span className="number-item">7</span>
                          <span className="number-item">8</span>
                          <span className="number-item">9</span>
                          <span className="number-item">0</span>
                        </span>
                        <span className="number-group fast number-5">
                          <span className="number-item">0</span>
                          <span className="number-item">1</span>
                          <span className="number-item">2</span>
                          <span className="number-item">3</span>
                          <span className="number-item">4</span>
                          <span className="number-item">5</span>
                          <span className="number-item">6</span>
                          <span className="number-item">7</span>
                          <span className="number-item">8</span>
                          <span className="number-item">9</span>
                          <span className="number-item">0</span>
                        </span>
                      </span>
                      <span>&nbsp;°С</span>
                    </span>
                  </h1>
                </div>
              </div>
              <div className="description-container margin">
                <img className="icon" src="/img/thermometer-icon.png" />
                <p className="description medium">Зберігають тепло</p>
                <p className="description small">
                  Завдяки багатокамерним профільям менше тепла йде через
                  профіль, що допомагає підтримувати комфортну температуру
                  всередині приміщення.
                </p>
              </div>
              <div className="description-container">
                <img className="icon" src="/img/water-icon.png" />
                <p className="description medium">Захищають від конденсату</p>
                <p className="description small">
                  Системи передбачають можливість вентиляції, що дозволяє
                  регулювати рівень вологості в приміщенні, знижуючи ризик
                  утворення конденсату.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="installation-container">
          <div className="installation-img-container">
            <figure className="installation-img"></figure>
          </div>
          <div className="wrapper inline-narrow float-right">
            <h1 className="headline average">Обирайте професіоналів.</h1>
            <p className="description medium">
              Співробітники наших сервісних центрів отримують знання та досвід
              доступні через навчальні проекти.
            </p>
            <div className="slide-container">
              <p className="description medium margin-top">
                Якщо ви не можете отримати потрібної допомоги у виробників або
                постачальників вашого виробу, ми допоможемо вам.
              </p>
              <a className="second-link average white" href="/conversation">
                Отримати консультацію
                <span className="material-symbols-outlined normall">
                  chevron_right
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
