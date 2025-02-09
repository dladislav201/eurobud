import "./automaticnav.scss";

export const AutomaticNav = () => {
  return (
    <div className="automatic-nav">
      <a className="product-nav-btn" href="#garage-auto-section">
        <div className="content-wrapper garage-icon">
          <div className="icon-border">
            <figure className="icon"></figure>
          </div>
          <p className="chapter">Гаражна автоматика</p>
        </div>
      </a>
      <a className="product-nav-btn" href="#sliding-auto-section">
        <div className="content-wrapper sliding-icon">
          <div className="icon-border">
            <figure className="icon"></figure>
          </div>
          <p className="chapter">Відкатна автоматика</p>
        </div>
      </a>
      <a className="product-nav-btn" href="#swing-auto-section">
        <div className="content-wrapper swing-icon">
          <div className="icon-border">
            <figure className="icon"></figure>
          </div>
          <p className="chapter">Розпашна автоматика</p>
        </div>
      </a>
    </div>
  );
};
