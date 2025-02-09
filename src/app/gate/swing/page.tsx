import { Ribbon } from "@/components";

export default function Swing() {
  return (
    <main className="main flex gate">
      <Ribbon />

      <section className="product-banner" data-switch-parent>
        <div className="wrapper inline-wide">
          <h1 className="product-banner-title">Розпашні ворота</h1>
        </div>
        <div className="product-hero-container" data-switch-parent>
          <video
            id="switchVideo"
            className="product-hero-video"
            poster="/img/gate-swing-poster.jpg"
            autoPlay
            playsInline
            muted
            loop
          >
            <source src="/video/gate-swing-clip.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="product-welcome-group">
          <div className="btn-groove">
            <a className="btn btn-main btn-small" href="/conversation">
              Замовити розрахунок
            </a>
            <button className="btn-play btn-secondary" data-switch-btn></button>
          </div>
          <p className="product-welcome-pricing">
            Від 26 000 грн до 15 серпня.
          </p>
        </div>
      </section>

      <section className="product-features sliding">
        <div className="product-features-block gate-comfort">
          <div className="wrapper inline-narrow float-right">
            <h1 className="headline medium">Прості та зручні.</h1>
          </div>
          <div className="media-wrapper">
            <figure className="picture"></figure>
          </div>
          <div className="wrapper inline-narrow float-right">
            <p className="description average">
              Ворота можуть відкриватися як у бік дороги, так і в бік будинку.
              Вони не бояться сильних поривів вітру та можуть перекривати проєми
              шириною до 5 метрів.
            </p>
            <div className="add-char-container">
              <div className="add-char-item thin">
                <p className="add-char-caption">До</p>
                <h1 className="headline great">
                  <span className="count-anim-wrapper">
                    <span className="number-value-group opening-width">
                      <span className="number-group low number-5">
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
                    <span>&nbsp;м</span>
                  </span>
                </h1>
                <p className="add-char-caption">ширина проєму</p>
              </div>
            </div>
          </div>
        </div>
        <div className="product-features-block tree-space">
          <div className="wrapper inline-narrow float-right">
            <h1 className="headline medium">
              Більше простору для вашого саду.
            </h1>
          </div>
          <div className="wrapper inline-narrow float-right">
            <p className="description average">
              Розпашні ворота відкриваються всередину або назовні, залишаючи
              простір вздовж паркану вільним, що дозволяє зберегти природну
              красу вашого саду або споруд вздовж паркану.
            </p>
          </div>
        </div>

        <div className="product-features-block swing-design">
          <div className="wrapper inline-narrow float-right">
            <h1 className="headline average">
              Будь-який дизайн.{" "}
              <span className="rainbow-gradient">Будь-який колір</span>.
            </h1>
          </div>
          <div className="media-wrapper">
            <figure className="picture"></figure>
          </div>

          <div className="wrapper inline-narrow float-right">
            <p className="description average">
              Ви можете самостійно вибрати матеріал для заповнення воріт, а
              також колір для фарбування конструкцій, щоб зберегти гармонію в
              вашому існуючому інтер'єрі.
            </p>
          </div>
        </div>
      </section>

      <section className="grey-container for-automatic">
        <div className="wrapper inline-narrow float-right">
          <p className="product-features-eyebrow">Автоматика</p>
          <h1 className="headline average">
            Відкривайте ворота однією кнопкою.
          </h1>
        </div>
        <div className="video-wrapper" data-switch-parent>
          <video
            id="switchVideo"
            className="video"
            poster="/img/gate-garage-poster.jpg"
            autoPlay
            playsInline
            muted
            loop
          >
            <source src="/video/gate-garage-clip.mp4" type="video/mp4" />
          </video>
          <figcaption className="video-caption">
            *Автоматика ALUTECH для гаражних воріт.
          </figcaption>
        </div>
        <div className="wrapper inline-narrow float-right">
          <div className="slide-container">
            <p className="description average">
              Керуйте воротами, просто натискаючи кнопку на пульті. Відкривайте
              та закривайте в'їзні ворота, навіть не виходячи з авто.
            </p>
            <a className="second-link average black" href="/automatic">
              Більше про автоматику
              <span className="material-symbols-outlined normall">
                chevron_right
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className="installation-container">
        <div className="installation-img-container">
          <figure className="installation-img"></figure>
        </div>
        <div className="wrapper inline-narrow float-right">
          <h1 className="headline average">Обирайте професіоналів.</h1>
          <p className="description average">
            Співробітники наших сервісних центрів отримують знання та досвід
            доступні через навчальні проекти.
          </p>
          <div className="slide-container">
            <p className="description average margin-top">
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
  );
}
