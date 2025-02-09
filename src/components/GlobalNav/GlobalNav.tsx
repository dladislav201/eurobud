import "./globalnav.scss";

export const GlobalNav = () => {
  return (
    <>
      <nav className="globalnav">
        <div className="flyout-nav light">
          <div className="nav-content-wrapper">
            <a className="logo-link" href="/">
              <p className="logo-text">Євробуд</p>
            </a>
            <ul className="menu">
              <a href="/gate">
                <li className="item one">Ворота</li>
              </a>
              <a href="/automatic">
                <li className="item two">Автоматика</li>
              </a>
              <a href="/shutter">
                <li className="item three">Ролети</li>
              </a>
              <a href="/panorama">
                <li className="item four">Розсувні системи</li>
              </a>
              <a href="/barrier">
                <li className="item five">Шлагбауми</li>
              </a>
            </ul>
            <div className="burger-icon" aria-hidden="true">
              <input
                type="checkbox"
                id="localnav-menustate"
                className="localnav-menustate"
              />
              <label htmlFor="localnav-menustate" className="localnav-menucta">
                <span className="localnav-menucta-chevron"></span>
              </label>
            </div>
          </div>
        </div>
      </nav>
      <label className="nav-curtain"></label>
    </>
  );
};
