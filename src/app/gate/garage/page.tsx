import { Ribbon } from "@/components";

export default function Garage() {
  return (
    <main className="main flex gate">
      <Ribbon />

      <section className="product-banner" data-switch-parent>
        <div className="wrapper inline-wide">
          <h1 className="product-banner-title">Гаражні ворота</h1>
        </div>
        <div className="product-hero-container">
          <video
            id="switchVideo"
            className="product-hero-video"
            poster="../media/poster/gate-garage-poster.jpg"
            autoPlay
            playsInline
            muted
            loop
          >
            <source src="/video/gate-garage-clip.mp4" type="video/mp4" />
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
            Від 22 600 грн до 15 серпня.
          </p>
        </div>
      </section>

      <section className="product-features garage">
        <div className="product-features-block winter-care-garage">
          <div className="wrapper inline-narrow">
            <div className="float-right">
              <h1 className="headline medium">
                Комфорт на протязі всього року.
              </h1>
            </div>
            <div className="media-wrapper">
              <figure className="picture"></figure>
            </div>
            <div className="float-right">
              <p className="description medium">
                Енергоефективні сендвіч панелі та морозостійкі ущільнювачі
                зберігають комфортний мікроклімат у приміщенні навіть за дуже
                низькоъ температури на вулиці.
              </p>
              <div className="add-char-container">
                <div className="add-char-item">
                  <h1 className="headline medium">
                    <span className="count-anim-wrapper">
                      <span className="number-value-group thickness">
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
                      <span>&nbsp;мм</span>
                    </span>
                  </h1>
                  <p className="add-char-caption">товщина сендвіч панелей</p>
                </div>
                <div className="add-char-border"></div>
                <div className="add-char-item">
                  <p className="add-char-caption">Зберігає комфорт до</p>
                  <h1 className="headline medium">
                    <span className="count-anim-wrapper">
                      <span>-</span>
                      <span className="number-value-group temperature">
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
              </div>
            </div>
          </div>
        </div>
        <div className="product-features-block manual-control">
          <div className="wrapper inline-narrow">
            <div className="float-right">
              <h1 className="headline medium">Легко керувати навіть вручну.</h1>
            </div>
            <div className="media-wrapper">
              <figure className="picture"></figure>
            </div>
            <div className="float-right">
              <p className="description medium">
                Завдяки оптимально збалансованим пружинам та ергономічній
                двосторонній ручці воротне полотно великої маси легко піднімати
                та опускати навіть вручну.
              </p>
              <div className="add-char-container">
                <div className="add-char-item">
                  <p className="add-char-caption">300 кг відчуваються як</p>
                  <h1 className="headline medium">
                    <span className="count-anim-wrapper">
                      <span className="number-value-group weight">
                        <span className="number-group low number-1">
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
                      <span>&nbsp;кг</span>
                    </span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="product-features-block corrosion-protection">
          <div className="wrapper inline-narrow float-right">
            <h1 className="headline average">Підвищений захист від корозій.</h1>
          </div>
          <div className="video-wrapper">
            <video className="video" autoPlay playsInline muted loop>
              <source
                src="/video/garage-gate-corrosion-protection.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="wrapper inline-narrow float-right">
            <p className="description medium">
              Комплектуючі виготовлені з нержавіючої сталі AISI430. Тому
              фурнітура воріт зберігає працездатність та бездоганний зовнішній
              вигляд навіть за високої вологості.
            </p>
          </div>
        </div>
        <div className="product-features-block material-gallery">
          <div className="wrapper inline-narrow float-right">
            <h1 className="headline average">
              Обирайте текстуру на свій смак.
            </h1>
          </div>
          <div className="gate-material-gallery">
            <div className="material-group textured active" data-absolute-item>
              <div className="material-content">
                <figure className="material-picture"></figure>
              </div>
              <p className="material-info">
                Рельєфне тиснення woodgrain візуально і тактильно імітує
                поверхню дерева.
              </p>
            </div>
            <div className="material-group smooth" data-absolute-item>
              <div className="material-content">
                <figure className="material-picture"></figure>
              </div>
              <p className="material-info">
                Гладка поверхня з матовою шовковистою текстурою.
              </p>
            </div>
          </div>
          <div className="product-gallery-btn-container">
            <div className="btn-groove dark">
              <button className="arrow-btn arrow-btn-previous disabled">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
                  <path d="M21.559,12.062 L15.618,17.984 L21.5221,23.944 C22.105,24.533 22.1021,25.482 21.5131,26.065 C21.2211,26.355 20.8391,26.4999987 20.4571,26.4999987 C20.0711,26.4999987 19.6851,26.352 19.3921,26.056 L12.4351,19.034 C11.8531,18.446 11.8551,17.4999987 12.4411,16.916 L19.4411,9.938 C20.0261,9.353 20.9781,9.354 21.5621,9.941 C22.1471,10.528 22.1451,11.478 21.5591,12.062 L21.559,12.062 Z"></path>
                </svg>
              </button>
              <button className="arrow-btn arrow-btn-next">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
                  <path d="M23.5587,16.916 C24.1447,17.4999987 24.1467,18.446 23.5647,19.034 L16.6077,26.056 C16.3147,26.352 15.9287,26.4999987 15.5427,26.4999987 C15.1607,26.4999987 14.7787,26.355 14.4867,26.065 C13.8977,25.482 13.8947,24.533 14.4777,23.944 L20.3818,17.984 L14.4408,12.062 C13.8548,11.478 13.8528,10.5279 14.4378,9.941 C15.0218,9.354 15.9738,9.353 16.5588,9.938 L23.5588,16.916 L23.5587,16.916 Z"></path>
                </svg>
              </button>
            </div>
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
            poster="../media/poster/gate-garage-poster.jpg"
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
