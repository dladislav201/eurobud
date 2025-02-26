import "./footer.scss";
import Link from "next/link";

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
              <Link href="/policy" target="_blank">
                Політика Конфіденційності
              </Link>
            </li>
            <li className="footer-link">
              <Link href="/terms" target="_blank">
                Умови Використання
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
