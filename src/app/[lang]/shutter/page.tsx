import { Ribbon, ProductBanner, Installation } from "@/components";
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

      <Installation />

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
