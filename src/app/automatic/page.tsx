import { AutomaticNav, ProductGallery, Ribbon } from "@/components";
import { AutomaticCategory } from "@/models";

const automatics: AutomaticCategory[] = [
  {
    type: "garage",
    title: "Гаражна автоматика",
    models: [
      {
        name: "Alutech Levigato",
        imageUrl: "/img/automatic-product-levigato-main.png",
        price: "Від 5 300 грн",
        isSalePrice: true,
      },
      { name: "AN-Motors ASG", imageUrl: "", price: "Від 6 770 грн" },
    ],
  },
  {
    type: "sliding",
    title: "Відкатна автоматика",
    models: [
      {
        name: "Alutech Roteo",
        imageUrl: "",
        price: "Від 9 600 грн",
        isSalePrice: true,
      },
      { name: "AN-Motors ASL", imageUrl: "", price: "Від 9 660 грн" },
    ],
  },
  {
    type: "swing",
    title: "Розпашна автоматика",
    models: [
      {
        name: "Alutech Scopio",
        imageUrl: "",
        price: "16 440 грн",
        isSalePrice: true,
      },
      { name: "Alutech Ambo", imageUrl: "", price: "26 600 грн" },
      { name: "Alutech Twisto", imageUrl: "", price: "23 900 грн" },
      { name: "AN-Motors ASW", imageUrl: "", price: "21 300 грн" },
    ],
  },
];

export default function Automatic() {
  return (
    <>
      <main className="main flex automatic-sections">
        <Ribbon />

        <section id="resizedVideoContainer" className="product-banner">
          <div className="wrapper inline-wide block-narrow">
            <h1 className="headline great">Автоматика</h1>
          </div>
          <div
            className="product-hero-container"
            id="resizedVideo"
            data-switch-parent
          >
            <video
              id="switchVideo"
              className="product-hero-video"
              poster="/img/gate-garage-poster.jpg"
              autoPlay
              playsInline
              muted
              loop
            >
              <source src="/video/gate-garage-clip.mp4" type="video/mp4" />
            </video>
            <button className="btn-play btn-secondary" data-switch-btn></button>
          </div>
        </section>

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
            <div id="scrollTarget" className="gallery-container">
              <div id="garage-auto-section" className="wrapper inline-wide">
                <h1 className="headline average">{automatic.title}</h1>
              </div>
              <ProductGallery automaticModels={automatic.models} />
            </div>
          </section>
        ))}

        <section className="page-section block-wide">
          <div className="wrapper inline-wide">
            <h1 className="headline medium-small">
              Дізнайтеся більше про переваги та можливості.
            </h1>
          </div>
        </section>

        <section className="product-features automatic">
          <div className="product-features-block usability">
            <div className="wrapper inline-narrow float-right">
              <p className="product-features-eyebrow">Зручність використання</p>
              <h1 className="headline medium">
                Одна кнопка, щоб тримати все під контролем.
              </h1>
            </div>
            <div className="media-wrapper">
              <figure className="picture"></figure>
            </div>
            <div className="wrapper inline-narrow float-right">
              <p className="description great margin">
                Щоб заїхати або виїхати з вашого дому, не потрібно виходити з
                машини. Достатньо зробити лише одну дію — натиснути кнопку на
                пульті.
              </p>
              <div className="description-container">
                <img className="icon" src="/img/icons/gear-icon.png" />
                <p className="description small">
                  <span className="dark-span">Автозакриття.</span>
                  Після налаштування функції автозакриття, ворота закриються за
                  вами автоматично, навіть якщо ви забудете зробити це самі.
                </p>
              </div>
            </div>
          </div>
          <div className="product-features-block versatility">
            <div className="wrapper inline-narrow">
              <p className="product-features-eyebrow">Універсальність</p>
              <h1 className="headline medium margin">
                Немає електрики? Всеодно працює!
              </h1>
              <div className="float-left">
                <p className="description medium">
                  Якщо електрика відключиться, електропривід автоматично
                  заблокується, запобігаючи несанкціонованому проникненню на
                  вашу ділянку.
                </p>
                <p className="description medium second">
                  Для відкриття воріт потрібно лише скористатися ключем, що
                  входить в комплект. Тому навіть без електрики ви встигнете на
                  бізнес-зустріч відкривши ворота вручну.
                </p>
              </div>
            </div>
            <div className="media-wrapper">
              <figure className="picture system"></figure>
            </div>
            <div className="auto-versatility-typography-wrapper">
              <p className="description ultra-small">
                Кожна з систем автоматики оснащена механізмом ручного
                відкривання.
              </p>
            </div>
          </div>
          <div className="product-features-block durability">
            <div className="wrapper inline-wide">
              <p className="product-features-eyebrow">Довговічність</p>
              <h1 className="headline average">
                Автоматика, яка буде останньою...
              </h1>
              <div className="img-wrapper">
                <div className="scale-pool">
                  <img
                    className="img"
                    src="../media/img/automat-roteo-front.png"
                  />
                </div>
                <div className="scale-pool">
                  <img
                    className="img"
                    src="../media/img/automat-roteo-side.png"
                  />
                </div>
              </div>
              <p className="description medium float-left">
                Конструкції виготовлені зі сталі, служать довгий час навіть при
                дії навколишнього середовища. А потужні двигуни, створенІ таким
                чином, щоб витримувати щоденне навантаження, розраховані на
                безліч робочих циклів.
              </p>
            </div>
          </div>
        </section>

        <section className="installation-container">
          <div className="installation-img-container">
            <figure className="installation-img"></figure>
          </div>
          <div className="wrapper inline-narrow float-right">
            <h1 className="headline average">
              Ви завжди отримаєте лише якісний монтаж.
            </h1>
            <p className="description great">
              Співробітники наших сервісних центрів отримують знання та досвід,
              проходячи через велику кількість навчальних проектів.
            </p>
            <a className="second-link medium white" href="/conversation">
              Замовити ремонт
              <span className="material-symbols-outlined normall">
                chevron_right
              </span>
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
