import { Ribbon } from "@/components";
import Link from "next/link";

export default function Gate() {
  return (
    <main className="main flex gate all">
      <Ribbon saleProduct={"воріт"} saleProcent={20} />

      <section className="gates-container">
        <div className="gates-group garage">
          <div className="wrapper inline-narrow">
            <div className="sale-wrapper">
              <p className="sale-eyebrow">до 25% знижки</p>
            </div>
            <h1 className="headline medium">Гаражні ворота</h1>
          </div>
          <div className="gates-picture-wrapper">
            <Link href="/gate/garage" className="media-btn"></Link>
            <figure className="gates-picture"></figure>
          </div>
          <div className="wrapper inline-narrow float-right">
            <p className="description small">
              Стильне доповнення до вашого будинку, що забезпечує безпеку вашого
              автомобіля та робить паркування ще більш комфортним.
            </p>
          </div>
          <div className="btn-groove">
            <Link href="/conversation" className="btn btn-main btn-small">
              Замовити
            </Link>
            <Link href="/gate/garage" className="btn btn-secondary btn-small">
              Детальніше
            </Link>
          </div>
        </div>
        <div className="gates-group sliding">
          <div className="wrapper inline-narrow">
            <div className="sale-wrapper">
              <p className="sale-eyebrow">до 18% знижки</p>
            </div>
            <h1 className="headline medium">Відкатні ворота</h1>
          </div>
          <div className="gates-picture-wrapper">
            <Link href="/gate/sliding" className="media-btn"></Link>
            <figure className="gates-picture"></figure>
          </div>
          <div className="wrapper inline-narrow float-right">
            <p className="description small">
              Ідеально підходять для тих, хто цінує свій простір. Легко
              відкриваються вздовж огорожі, не займаючи місця перед воротами.
            </p>
          </div>
          <div className="btn-groove">
            <Link href="/conversation" className="btn btn-main btn-small">
              Замовити
            </Link>
            <Link href="/gate/sliding" className="btn btn-secondary btn-small">
              Детальніше
            </Link>
          </div>
        </div>
        <div className="gates-group swing">
          <div className="wrapper inline-narrow">
            <h1 className="headline medium">Розпашні ворота</h1>
          </div>
          <div className="gates-picture-wrapper">
            <Link href="/gate/swing" className="media-btn"></Link>
            <figure className="gates-picture"></figure>
          </div>
          <div className="wrapper inline-narrow float-right">
            <p className="description small">
              Класичне рішення, яке поєднує в собі елегантність та надійність.
              Чудове доповнення до вашого екстер&apos;єру.
            </p>
          </div>
          <div className="btn-groove">
            <Link href="/conversation" className="btn btn-main btn-small">
              Замовити
            </Link>
            <Link href="/gate/swing" className="btn btn-secondary btn-small">
              Детальніше
            </Link>
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
              та закривайте в&apos;їзні ворота, навіть не виходячи з авто.
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
          <h1 className="headline average">
            Ми слідкуємо за якістю монтажу наших майстрів.
          </h1>
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
