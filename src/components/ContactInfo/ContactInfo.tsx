import Link from "next/link";

export const ContactInfo = () => {
  return (
    <section className="product-support-container">
      <div className="wrapper inline-narrow">
        <div className="description-container margin">
          <img className="icon" src="/img/support-order.png" />
          <p className="description average">
            <span className="dark-span">Як замовити?</span>
            Ми тут щоб знайти найкраще рішення для вас та вашого об&apos;єкту.
          </p>
          <Link className="product-support-link" href="/conversation">
            Розпочати
            <span className="material-symbols-outlined special">
              chevron_right
            </span>
          </Link>
        </div>
        <div className="description-container">
          <img className="icon" src="/img/support-call.png" />
          <p className="description average">
            <span className="dark-span">Отримайте консультацію.</span>
            Зателефонуйте нам прямо зараз або у зручний для вас час.
          </p>
          <Link className="product-support-link" href="tel:+380677177164">
            +380 (67) 717 71 64
            <span className="material-symbols-outlined special">
              chevron_right
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};
