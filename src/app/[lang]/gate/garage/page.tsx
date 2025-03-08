import { Installation, ProductBanner, Ribbon } from "@/components";

export default function Garage() {
  return (
    <main className="main gate">
      <Ribbon saleProduct={"гаражних воріт"} saleProcent={20} />

      <ProductBanner
        title={"Гаражні ворота"}
        videoSrc={"/video/gate-garage-clip.mp4"}
        posterSrc={"/img/gate-garage-poster.jpg"}
        price={22600}
        isBuyBtn={true}
      />

      <section className="product-features garage">
        <div className="product-features-block">
          <div className="wrapper inline-narrow">
            <div className="float-right">
              <h1 className="headline medium">
                Комфорт на протязі всього року.
              </h1>
            </div>
            <div className="media-wrapper narrow">
              <img className="picture" src="/img/gate-garage-winter-care.jpg" />
            </div>
            <div className="float-right">
              <p className="description medium">
                Енергоефективні сендвіч панелі та морозостійкі ущільнювачі
                зберігають комфортний мікроклімат у приміщенні навіть за дуже
                низькоъ температури на вулиці.
              </p>
              <div className="add-char-container typography-mt">
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
                  <p className="add-char-caption">
                    товщина сендвіч <br /> панелей
                  </p>
                </div>
                <div className="add-char-border"></div>
                <div className="add-char-item">
                  <p className="add-char-caption">
                    Зберігає <br /> комфорт до
                  </p>
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

        <div className="product-features-block grey-bg">
          <div className="wrapper inline-narrow">
            <h1 className="headline medium">Легко керувати навіть вручну.</h1>
            <div className="media-wrapper narrow">
              <img
                className="picture"
                src="/img/gate-garage-manual-control.jpg"
              />
            </div>
            <p className="description medium">
              Завдяки оптимально збалансованим пружинам та ергономічній
              двосторонній ручці воротне полотно великої маси легко піднімати та
              опускати навіть вручну.
            </p>
            <div className="add-char-container typography-mt">
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

        <div className="product-features-block">
          <div className="wrapper inline-narrow">
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
          <div className="wrapper inline-narrow">
            <p className="description medium">
              Комплектуючі виготовлені з нержавіючої сталі AISI430. Тому
              фурнітура воріт зберігає працездатність та бездоганний зовнішній
              вигляд навіть за високої вологості.
            </p>
          </div>
        </div>

        <div className="product-features-block grey-bg">
          <div className="wrapper inline-narrow center">
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
            {/* <div className="material-group smooth" data-absolute-item>
              <div className="material-content">
                <figure className="material-picture"></figure>
              </div>
              <p className="material-info">
                Гладка поверхня з матовою шовковистою текстурою.
              </p>
            </div> */}
          </div>
          <div className="product-gallery-btn-container">
            <div className="btn-groove">
              <button className="btn-chevron">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
                  <path d="M21.559,12.062 L15.618,17.984 L21.5221,23.944 C22.105,24.533 22.1021,25.482 21.5131,26.065 C21.2211,26.355 20.8391,26.4999987 20.4571,26.4999987 C20.0711,26.4999987 19.6851,26.352 19.3921,26.056 L12.4351,19.034 C11.8531,18.446 11.8551,17.4999987 12.4411,16.916 L19.4411,9.938 C20.0261,9.353 20.9781,9.354 21.5621,9.941 C22.1471,10.528 22.1451,11.478 21.5591,12.062 L21.559,12.062 Z"></path>
                </svg>
              </button>
              <button className="btn-chevron">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
                  <path d="M23.5587,16.916 C24.1447,17.4999987 24.1467,18.446 23.5647,19.034 L16.6077,26.056 C16.3147,26.352 15.9287,26.4999987 15.5427,26.4999987 C15.1607,26.4999987 14.7787,26.355 14.4867,26.065 C13.8977,25.482 13.8947,24.533 14.4777,23.944 L20.3818,17.984 L14.4408,12.062 C13.8548,11.478 13.8528,10.5279 14.4378,9.941 C15.0218,9.354 15.9738,9.353 16.5588,9.938 L23.5588,16.916 L23.5587,16.916 Z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Installation />
    </main>
  );
}
