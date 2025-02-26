"use client";

import Link from "next/link";
import { useTranslation } from "@/hooks";
import { products } from "@/data";
import { HomeProducts } from "@/components";

export default function HomePage() {
  const t = useTranslation();

  return (
    <main className="main">
      <div className="home-page-colection grey-bg">
        {products.map((product) => (
          <HomeProducts key={product.id} product={product} />
        ))}
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
