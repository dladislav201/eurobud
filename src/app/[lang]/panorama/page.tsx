import {
  Installation,
  PanoramaGallery,
  ProductBanner,
  Ribbon,
} from "@/components";

export default function Panorama() {
  return (
    <main className="main panorama">
      <Ribbon saleProduct={"розсувних систем"} saleProcent={20} />

      <ProductBanner
        title={"Розсувні системи"}
        videoSrc={"/video/panorama-clip.mp4"}
        posterSrc={"/img/panorama-poster.jpg"}
        price={7700}
        priceUnit={"м²"}
        isBuyBtn={true}
      />

      <section className="page-section block-wide">
        <div className="wrapper inline-wide">
          <h1 className="headline average">5 систем на вибір</h1>
        </div>
        <PanoramaGallery />
      </section>

      <section className="product-features panorama">
        <div className="product-features-block grey-bg">
          <div className="wrapper inline-narrow center">
            <p className="product-features-eyebrow">Зручність</p>
            <h1 className="headline average">Відкриваються одним рухом.</h1>
          </div>
          <div className="media-wrapper">
            <img className="picture" src="/img/panorama-usability.jpg" />
          </div>
          <div className="wrapper inline-narrow typography-mt">
            <p className="description medium">
              У нашому асортименті є 5 типів розсувних систем, і всі вони
              створені для вашого комфорту, забезпечуючи легке та безшумне
              відкривання, як вручну, так і автоматично.
            </p>
            <div className="description-container typography-mt">
              <img className="product-features-icon" src="/img/gear-icon.png" />
              <h2 className="headline small">Автоматизація</h2>
              <p className="description small">
                Обравши моторизовану версію, ви зможете автоматично відкривати
                та закривати скляні стулки одним натисканням кнопки.
              </p>
            </div>
          </div>
        </div>
        <div className="product-features-block">
          <div className="wrapper inline-narrow center">
            <p className="product-features-eyebrow">Енергоефективність</p>
            <h1 className="headline average">
              Комфортна температура в будь-яку пору року.
            </h1>
          </div>
          <div className="media-wrapper">
            <img
              className="picture"
              src="/img/panorama-energy-efficiency.jpg"
            />
          </div>
          <div className="wrapper inline-narrow">
            <div className="description-container typography-mt">
              <h2 className="headline small">Від -30° C до 45° C</h2>
              <p className="description small">
                Системи забезпечують приємний мікроклімат всередині приміщення
                навіть при екстримальних температурах.
              </p>
            </div>
            <div className="description-container typography-mt">
              <img
                className="product-features-icon"
                src="/img/thermometer-icon.png"
              />
              <h2 className="headline small">Збереження тепла.</h2>
              <p className="description small">
                Завдяки багатокамерним профільям менше тепла йде через профіль,
                що допомагає підтримувати комфортну температуру всередині
                приміщення.
              </p>
            </div>
            <div className="description-container typography-mt">
              <img
                className="product-features-icon"
                src="/img/water-icon.png"
              />
              <h2 className="headline small">Захист від конденсату.</h2>
              <p className="description small">
                Системи передбачають можливість вентиляції, що дозволяє
                регулювати рівень вологості в приміщенні, знижуючи ризик
                утворення конденсату.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Installation />
    </main>
  );
}
