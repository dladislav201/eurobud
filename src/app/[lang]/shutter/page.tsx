import { Ribbon, ProductBanner } from "@/components";
import Link from "next/link";

export default function Shutter() {
  return (
    <main className="main">
      <Ribbon saleProduct={"ролет"} saleProcent={20} />

      <ProductBanner
        title={"Ролети"}
        videoSrc={"/video/shutter-clip.mp4"}
        posterSrc={"/img/shutter-poster.jpg"}
      />

      <section className="installation-container">
        <div className="installation-img-container">
          <figure className="installation-img"></figure>
        </div>
        <div className="installation-title-position">
          <h1 className="headline average">
            Довіряйте встановлення професіоналам.
          </h1>
        </div>
        <div className="installation-content-position">
          <p className="installation-undtitle">
            Співробітники наших сервісних центрів отримують знання та досвід
            доступні через навчальні проекти. Якщо ви не можете отримати
            потрібної допомоги у виробників або постачальників вашого виробу, ми
            допоможемо вам.
          </p>
          <Link className="second-link" href="/conversation">
            Отримати консульацію
            <span className="material-symbols-outlined">chevron_right</span>
          </Link>
        </div>
      </section>

      <section className="contact-container">
        <div className="wrapper inline-wide">
          <h1 className="contact-title">Як замовити</h1>
          <p className="contact-undtitle">
            Ми тут щоб знайти найкраще рішення для вас та вашого об&apos;єкту.
          </p>
          <Link className="contact-btn-onpage" href="/conversation">
            Розпочати
            <span className="material-symbols-outlined">chevron_right</span>
          </Link>
          <h2 className="headline small">Ролети</h2>
          <p className="contact-index">Більше систем</p>
          <Link href="/gate" className="contact-link">
            Ворота
          </Link>
          <Link href="/automatic" className="contact-link">
            Автоматика
          </Link>
          <Link href="/panorama" className="contact-link">
            Розсувні системи
          </Link>
          <Link href="/barrier" className="contact-link">
            Шлагбауми
          </Link>
        </div>
      </section>
    </main>
  );
}
