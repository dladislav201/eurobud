export default function HomePage() {
  return (
    <main className="main">
      <div className="home-page-colection grey-bg">
        <section className="page-section block-narrow">
          <div className="wrapper inline-wide">
            <h1 className="headline great">Ворота</h1>
          </div>
          <div className="media-wrapper">
            <a className="product-link" href="/gate">
              &nbsp;
            </a>
            <img className="media" src="/img/gate.jpg" />
          </div>
          <div className="wrapper inline-wide">
            <p className="description small-bold float-right">
              Гаражні ворота для зручного та безпечного паркування, відкатні
              ворота для економії простору та розпашні ворота для естетичного
              вигляду.
            </p>
          </div>
          <div className="btn-groove">
            <a className="btn btn-main btn-small" href="/conversation">
              Замовити
            </a>
            <a href="/gate" className="btn btn-secondary btn-small">
              Детальніше
            </a>
          </div>
        </section>

        <section className="page-section block-narrow" data-switch-parent>
          <div className="wrapper inline-wide">
            <h1 className="headline great">Автоматика</h1>
          </div>
          <div className="media-wrapper">
            <a className="product-link" href="/automatic">
              &nbsp;
            </a>
            <video
              id="switchVideo"
              className="media"
              poster="/img/gate-garage-poster.jpg"
              autoPlay
              playsInline
              muted
              loop
            >
              <source src="/video/gate-garage-clip.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="wrapper inline-wide">
            <p className="description small-bold float-right">
              Забудьте про відкривання воріт вручну. Керуйте воротами, просто
              натискаючи кнопку на пульті.
            </p>
          </div>
          <div className="btn-groove">
            <a className="btn btn-main btn-small" href="/conversation">
              Замовити
            </a>
            <a href="/automatic" className="btn btn-secondary btn-small">
              Детальніше
            </a>
            <button className="btn-play btn-secondary" data-switch-btn></button>
          </div>
        </section>

        <section className="page-section block-narrow" data-switch-parent>
          <div className="wrapper inline-wide">
            <h1 className="headline great">Розсувні системи</h1>
          </div>
          <div className="media-wrapper">
            <a className="product-link" href="/gay">
              &nbsp;
            </a>
            <video
              id="switchVideo"
              className="media"
              poster="/img/panorama-poster.jpg"
              autoPlay
              playsInline
              muted
              loop
            >
              <source src="/video/panorama-clip.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="wrapper inline-wide">
            <p className="description small-bold float-right">
              Перетворіть цілу стіну на панораму, яку можна відкривати та
              закривати одним рухом. Насолоджуйтеся пейзажем, навіть не виходячи
              з дому.
            </p>
          </div>
          <div className="btn-groove">
            <a className="btn btn-main btn-small" href="/conversation">
              Замовити
            </a>
            <a href="/panorama" className="btn btn-secondary btn-small">
              Детальніше
            </a>
            <button className="btn-play btn-secondary" data-switch-btn></button>
          </div>
        </section>

        <section className="page-section block-narrow" data-switch-parent>
          <div className="wrapper inline-wide">
            <h1 className="headline great">Ролети</h1>
          </div>
          <div className="media-wrapper">
            <a className="product-link" href="/shutter">
              &nbsp;
            </a>
            <video
              id="switchVideo"
              className="media"
              poster="/img/shutter-poster.jpg"
              autoPlay
              playsInline
              muted
              loop
            >
              <source src="/video/shutter-clip.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="wrapper inline-wide">
            <p className="description small-bold float-right">
              Легке керування та сучасний дизайн дозволять вам регулювати
              освітлення та приватність за вашим бажанням.
            </p>
          </div>
          <div className="btn-groove">
            <a className="btn btn-main btn-small" href="/conversation">
              Замовити
            </a>
            <a href="/shutter" className="btn btn-secondary btn-small">
              Детальніше
            </a>
            <button className="btn-play btn-secondary" data-switch-btn></button>
          </div>
        </section>

        <section className="page-section block-narrow">
          <div className="wrapper inline-wide">
            <h1 className="headline great">Шлагбауми</h1>
          </div>
          <div className="media-wrapper">
            <a className="product-link" href="/barrier">
              &nbsp;
            </a>
            <img className="media" src="/img/barrier.jpg" />
          </div>
          <div className="wrapper inline-wide">
            <p className="description small-bold float-right">
              Швидко та ефективно контролюють доступ, знижуючи ризики та
              оптимізуючи трафік.
            </p>
          </div>
          <div className="btn-groove">
            <a className="btn btn-main btn-small" href="/conversation">
              Замовити
            </a>
            <a href="/barrier" className="btn btn-secondary btn-small">
              Детальніше
            </a>
          </div>
        </section>
      </div>

      <section className="installation-container">
        <div className="installation-img-container">
          <figure className="installation-img"></figure>
        </div>
        <div className="wrapper inline-narrow float-right">
          <h1 className="headline average">
            Ми слідкуємо за якістю монтажу наших майстрів.
          </h1>
          <p className="description average">
            Співробітники наших сервісних центрів отримують знання та досвід
            доступні через навчальні проекти.
          </p>
          <div className="slide-container slideUp">
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
