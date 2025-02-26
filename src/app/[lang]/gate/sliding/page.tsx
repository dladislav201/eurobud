import { ProductBanner, Ribbon } from "@/components";
import Link from "next/link";

export default function Sliding() {
  return (
    <main className="main flex gate">
      <Ribbon saleProduct={"відкатних воріт"} saleProcent={20} />

      <ProductBanner
        title={"Відкатні ворота"}
        videoSrc={"/video/gate-sliding-clip.mp4"}
        posterSrc={"/img/gate-sliding-poster.jpg"}
        price={24600}
        isBuyBtn={true}
      />

      <section className="product-features sliding">
        <div className="product-features-block gate-width">
          <div className="wrapper inline-narrow">
            <div className="float-right">
              <h1 className="headline medium">
                Ідеально підходять для широких проємів.
              </h1>
            </div>
            <div className="media-wrapper">
              <img className="picture" src="/img/gate-sliding-gate-width.jpg" />
            </div>
            <div className="float-right">
              <p className="description average">
                Використовуючи дві зустрічні стулки, можна перекрити проєм
                шириною до 9 м.
              </p>
              <div className="add-char-container">
                <div className="add-char-item thin">
                  <p className="add-char-caption">До</p>
                  <h1 className="headline great">
                    <span className="count-anim-wrapper">
                      <span className="number-value-group opening-width">
                        <span className="number-group low number-9">
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
        </div>
        <div className="product-features-block saving-space">
          <div className="wrapper inline-narrow">
            <div className="float-right">
              <h1 className="headline medium">
                Вільний простір перед в'їздом.
              </h1>
            </div>
            <div className="media-wrapper">
              <img
                className="picture"
                src="/img/gate-sliding-saving-space.jpg"
              />
            </div>
            <div className="float-right">
              <p className="description average">
                При відкритті, стулка воріт зсувається вздовж паркану і не
                займає місце перед в'їздом на ділянку.
              </p>
            </div>
          </div>
        </div>

        <div className="product-features-block winter-care-sliding">
          <div className="wrapper inline-narrow float-right">
            <h1 className="headline average">Зручно в будь-яких умовах.</h1>
          </div>
          <div className="media-wrapper">
            <img className="picture" src="/img/gate-sliding-winter-care.jpg" />
          </div>
          <div className="wrapper inline-narrow float-right">
            <p className="description average">
              Для відкриття воріт після снігопадів не потрібно розчищати площу
              перед ними. Достатньо звільнити від снігу невелику ділянку вздовж
              паркану.
            </p>
          </div>
        </div>
        <div className="product-features-block sliding-design">
          <div className="wrapper inline-narrow float-right">
            <h1 className="headline average">
              Будь-який дизайн. Будь-який колір.
            </h1>
          </div>
          <div className="media-wrapper">
            <img className="picture" src="/img/gate-sliding-design.jpg" />
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
            <Link className="second-link average black" href="/automatic">
              Більше про автоматику
              <span className="material-symbols-outlined normall">
                chevron_right
              </span>
            </Link>
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
            <Link className="second-link average white" href="/conversation">
              Отримати консультацію
              <span className="material-symbols-outlined normall">
                chevron_right
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
