import "./gatenav.scss";

export const GateNav = () => {
  return (
    <div className="gate-nav" data-nav-trigger>
      <a className="gate-nav-btn" href="/gate/garage">
        <div className="gate-nav-icon-wrapper gate-icon">
          <img className="gate-nav-icon" src="/img/gate_three.svg" />
          <p className="gate-nav-text">
            Гаражні<span className="mango-copy">-25%</span>
          </p>
        </div>
      </a>
      <a className="gate-nav-btn" href="/gate/sliding">
        <div className="gate-nav-icon-wrapper sliding-icon">
          <img className="gate-nav-icon " src="/img/gate_two.svg" />
          <p className="gate-nav-text">
            Відкатні<span className="mango-copy">-18%</span>
          </p>
        </div>
      </a>
      <a className="gate-nav-btn" href="/gate/swing">
        <div className="gate-nav-icon-wrapper swing-icon">
          <img className="gate-nav-icon" src="/img/gate_one.svg" />
          <p className="gate-nav-text">Розпашні</p>
        </div>
      </a>
    </div>
  );
};
