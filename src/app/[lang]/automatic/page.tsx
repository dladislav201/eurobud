import {
  AutomaticNav,
  Installation,
  ProductBanner,
  ProductGallery,
  Ribbon,
} from "@/components";
import { automatics } from "@/data/";

export default function Automatic() {
  return (
    <>
      <main className="main">
        <Ribbon saleProduct={"автоматики"} saleProcent={20} />

        <ProductBanner
          title={"Автоматика"}
          videoSrc={"/video/gate-garage-clip.mp4"}
          posterSrc={"/img/gate-garage-poster.jpg"}
        />

        <section className="page-section block-narrow">
          <div className="wrapper inline-wide">
            <AutomaticNav />
          </div>
        </section>

        {automatics.map((automatic) => (
          <section
            key={automatic.type}
            className="page-section block-wide grey-bg"
          >
            <div className="gallery-container">
              <div id={automatic.id} className="wrapper inline-wide">
                <h1 className="headline average">{automatic.title}</h1>
              </div>
              <ProductGallery automaticModels={automatic.models} />
            </div>
          </section>
        ))}

        <section className="page-section block-wide">
          <div className="wrapper inline-wide center">
            <h1 className="headline small">
              Дізнайтеся більше про переваги та можливості.
            </h1>
          </div>
        </section>

        <section className="product-features">
          <div className="product-features-block">
            <div className="wrapper inline-narrow">
              <p className="product-features-eyebrow">Зручність використання</p>
              <h1 className="headline medium">
                Одна кнопка, щоб тримати все під контролем.
              </h1>
            </div>
            <div className="media-wrapper">
              <img className="picture" src="/img/automatic-usability.jpg" />
            </div>
            <div className="wrapper inline-narrow typography-mt">
              <p className="description medium">
                Щоб заїхати або виїхати з вашого дому, не потрібно виходити з
                машини. Достатньо зробити лише одну дію — натиснути кнопку на
                пульті.
              </p>
              <div className="description-container typography-mt">
                <img
                  className="product-features-icon"
                  src="/img/gear-icon.png"
                />
                <p className="description small">
                  <span className="dark-span">Автозакриття.</span>
                  Після налаштування функції автозакриття, ворота закриються за
                  вами автоматично, навіть якщо ви забудете зробити це самі.
                </p>
              </div>
            </div>
          </div>
          <div className="product-features-block grey-bg">
            <div className="wrapper inline-narrow">
              <p className="product-features-eyebrow">Універсальність</p>
              <h1 className="headline medium">
                Немає електрики? Всеодно працює!
              </h1>
              <div className="description-container typography-mt">
                <p className="description medium">
                  Якщо електрика відключиться, електропривід автоматично
                  заблокується, запобігаючи несанкціонованому проникненню на
                  вашу ділянку.
                </p>
                <p className="description medium">
                  Для відкриття воріт потрібно лише скористатися ключем, що
                  входить в комплект. Тому навіть без електрики ви встигнете на
                  бізнес-зустріч відкривши ворота вручну.
                </p>
              </div>
            </div>
            <div className="media-wrapper">
              <img
                className="picture"
                src="/img/automatic-versatility.png"
                style={{ width: "700px" }}
              />
            </div>
            <div className="auto-versatility-typography-wrapper">
              <p className="description ultra-small">
                Кожна з систем автоматики оснащена механізмом ручного
                відкривання.
              </p>
            </div>
          </div>
          <div className="product-features-block">
            <div className="wrapper inline-wide">
              <p className="product-features-eyebrow">Надійність</p>
              <h1 className="headline average">
                Автоматика, яка буде останньою...
              </h1>
              <div className="media-wrapper">
                <div className="media-item-wrapper">
                  <img className="picture" src="/img/automat-roteo-front.png" />
                </div>
                <div className="media-item-wrapper">
                  <img className="picture" src="/img/automat-roteo-side.png" />
                </div>
              </div>
              <p className="description medium typography-mt">
                Конструкції виготовлені зі сталі, служать довгий час навіть при
                дії навколишнього середовища. А потужні двигуни, створенІ таким
                чином, щоб витримувати щоденне навантаження, розраховані на
                безліч робочих циклів.
              </p>
            </div>
          </div>
        </section>

        <Installation />
      </main>
    </>
  );
}
