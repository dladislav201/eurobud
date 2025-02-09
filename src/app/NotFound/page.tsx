export default function NotFound() {
  return (
    <main className="main">
      <section className="unknown-page-container">
        <div className="wrapper inline-wide">
          <h1 className="unknown-page-title">
            Сторінка, яку ви шукали, не знайдена.
          </h1>
          <p className="unknown-page-undtitle">
            Ми тут щоб обрати найкраще рішення для вас.
          </p>
          <div className="unknown-page-item-container">
            <h2 className="unknown-page-item-title">Ворота</h2>
            <a href="/gate" className="unknown-page-item margin">
              Дивитися всі ворота
            </a>
            <a href="/gate/swing" className="unknown-page-item margin">
              Розпашні ворота
            </a>
            <a href="/gate/sliding" className="unknown-page-item margin">
              Відкатні ворота
            </a>
            <a href="/gate/garage" className="unknown-page-item">
              Гаражні ворота
            </a>
            <h2 className="unknown-page-item-title">Автоматика</h2>
            <a href="/automatic" className="unknown-page-item">
              Дивитися Автоматику
            </a>
            <h2 className="unknown-page-item-title">Ролети</h2>
            <a href="/shutter" className="unknown-page-item">
              Дивитися Ролети
            </a>
            <h2 className="unknown-page-item-title">Панорамні системи</h2>
            <a href="/panorama" className="unknown-page-item">
              Дивитися Панорамні системи
            </a>
            <h2 className="unknown-page-item-title">Шлагбауми</h2>
            <a href="/barrier" className="unknown-page-item">
              Дивитися Шлагбауми
            </a>
          </div>
          <h1 className="unknown-page-support-title">
            Отримати пораду експерта
          </h1>
          <p className="unknown-page-support-undtitle">
            Ми допоможемо вам знайти найкраще рішення для вас та вашого проекту.
          </p>
          <a href="/conversation" className="unknown-page-support-btn">
            Розпочати
            <span className="material-symbols-outlined">chevron_right</span>
          </a>
        </div>
      </section>
    </main>
  );
}
