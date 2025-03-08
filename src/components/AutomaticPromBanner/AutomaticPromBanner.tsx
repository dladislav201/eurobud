import "./AutomaticPromBanner.scss";
import Link from "next/link";

export const AutomaticPromBanner = () => {
  return (
    <section className="grey-container for-automatic">
      <div className="wrapper inline-narrow">
        <p className="product-features-eyebrow">Автоматика</p>
        <h1 className="headline average">Відкривайте ворота однією кнопкою.</h1>
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
      <div className="wrapper inline-narrow">
        <div className="slide-container">
          <p className="description average">
            Керуйте воротами, просто натискаючи кнопку на пульті. Відкривайте та
            закривайте в&apos;їзні ворота, навіть не виходячи з авто.
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
  );
};
