import "./gatenav.scss";
import Link from "next/link";

export const GateNav = () => {
  return (
    <div className="gate-nav">
      <Link className="product-nav-btn" href="/gate/garage">
        <div className="content-wrapper garage-icon">
          <div className="icon-wrapper">
            <img
              className="icon"
              src="/img/garage-gate-icon.png"
              alt="Гаражні"
            />
          </div>
          <p className="chapter">
            Гаражні
            <span className="mango-copy">-25%</span>
          </p>
        </div>
      </Link>
      <Link className="product-nav-btn" href="/gate/sliding">
        <div className="content-wrapper sliding-icon">
          <div className="icon-wrapper">
            <img
              className="icon"
              src="/img/sliding-gate-icon.png"
              alt="Відкатні"
            />
          </div>
          <p className="chapter">
            Відкатні
            <span className="mango-copy">-18%</span>
          </p>
        </div>
      </Link>
      <Link className="product-nav-btn" href="/gate/swing">
        <div className="content-wrapper swing-icon">
          <div className="icon-wrapper">
            <img
              className="icon"
              src="/img/swing-gate-icon.png"
              alt="Розпашні"
            />
          </div>
          <p className="chapter">Розпашні</p>
        </div>
      </Link>
    </div>
  );
};
