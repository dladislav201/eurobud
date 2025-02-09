import "./ribbon.scss";

export const Ribbon = () => {
  return (
    <div className="sale-container">
      <p className="sale-container-text">
        Зберігайте до 25% при покупці автоматики для воріт до 20 серпня зі
        знижкою.
        <a className="sale-test-link" href="/conversation">
          Замовити розрахунок
          <span className="material-symbols-outlined special">
            chevron_right
          </span>
        </a>
      </p>
    </div>
  );
};
