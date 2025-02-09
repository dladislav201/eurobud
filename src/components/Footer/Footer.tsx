import "./footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content-container">
        <div className="content-wrapper">
          <p className="street">Рівне, вул. Захисників Маріуполя 49</p>
          <p className="copyright">
            © 2024 Добродій Євробуд. Всі права захищені.
          </p>
          <ul className="footer-links-wrapper">
            <li className="footer-link side">
              <a href="/policy" target="_blank">
                Політика Конфіденційності
              </a>
            </li>
            <li className="footer-link">
              <a href="/terms" target="_blank">
                Умови Використання
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
