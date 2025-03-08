import "./Installation.scss";
import Link from "next/link";

export const Installation = () => {
  return (
    <section className="installation-container">
      <div className="installation-img-container">
        <figure className="installation-img"></figure>
      </div>
      <div className="wrapper inline-narrow">
        <h1 className="headline average">Обирайте професіоналів.</h1>
        <p className="description average typography-mt">
          Якщо ви не можете отримати потрібної допомоги у виробників або
          постачальників вашого виробу, ми допоможемо вам.
        </p>
        <Link className="second-link average" href="/conversation">
          Замовити ремонт
          <span className="material-symbols-outlined">chevron_right</span>
        </Link>
      </div>
    </section>
  );
};
