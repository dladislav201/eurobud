import { Installation, ProductBanner, Ribbon } from "@/components";

export default function Swing() {
  return (
    <main className="main gate">
      <Ribbon saleProduct={"розпашних воріт"} saleProcent={20} />

      <ProductBanner
        title={"Розпашні ворота"}
        videoSrc={"/video/gate-swing-clip.mp4"}
        posterSrc={"/img/gate-swing-poster.jpg"}
        price={26000}
        isBuyBtn={true}
      />

      <section className="product-features sliding">
        <div className="product-features-block gate-comfort">
          <div className="wrapper inline-narrow">
            <h1 className="headline medium">Прості та зручні.</h1>
          </div>
          <div className="media-wrapper">
            <img className="picture" src="/img/gate-swing-comfort.jpg" />
          </div>
          <div className="wrapper inline-narrow">
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
          <div className="wrapper inline-narrow">
            <h1 className="headline medium">
              Більше простору для вашого саду.
            </h1>
          </div>
          <div className="wrapper inline-narrow">
            <p className="description average">
              Розпашні ворота відкриваються всередину або назовні, залишаючи
              простір вздовж паркану вільним, що дозволяє зберегти природну
              красу вашого саду або споруд вздовж паркану.
            </p>
          </div>
        </div>

        <div className="product-features-block swing-design">
          <div className="wrapper inline-narrow">
            <h1 className="headline average">
              Будь-який дизайн.
              <span className="rainbow-gradient">Будь-який колір</span>.
            </h1>
          </div>
          <div className="media-wrapper">
            <img className="picture" src="/img/gate-swing-design.jpg" />
          </div>

          <div className="wrapper inline-narrow">
            <p className="description average">
              Ви можете самостійно вибрати матеріал для заповнення воріт, а
              також колір для фарбування конструкцій, щоб зберегти гармонію в
              вашому існуючому інтер&apos;єрі.
            </p>
          </div>
        </div>
      </section>

      <Installation />
    </main>
  );
}
