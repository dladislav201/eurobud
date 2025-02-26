import Link from "next/link";

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
            <Link href="/gate" className="unknown-page-item margin">
              Дивитися всі ворота
            </Link>
            <Link href="/gate/swing" className="unknown-page-item margin">
              Розпашні ворота
            </Link>
            <Link href="/gate/sliding" className="unknown-page-item margin">
              Відкатні ворота
            </Link>
            <Link href="/gate/garage" className="unknown-page-item">
              Гаражні ворота
            </Link>
            <h2 className="unknown-page-item-title">Автоматика</h2>
            <Link href="/automatic" className="unknown-page-item">
              Дивитися Автоматику
            </Link>
            <h2 className="unknown-page-item-title">Ролети</h2>
            <Link href="/shutter" className="unknown-page-item">
              Дивитися Ролети
            </Link>
            <h2 className="unknown-page-item-title">Панорамні системи</h2>
            <Link href="/panorama" className="unknown-page-item">
              Дивитися Панорамні системи
            </Link>
            <h2 className="unknown-page-item-title">Шлагбауми</h2>
            <Link href="/barrier" className="unknown-page-item">
              Дивитися Шлагбауми
            </Link>
          </div>
          <h1 className="unknown-page-support-title">
            Отримати пораду експерта
          </h1>
          <p className="unknown-page-support-undtitle">
            Ми допоможемо вам знайти найкраще рішення для вас та вашого проекту.
          </p>
          <Link href="/conversation" className="unknown-page-support-btn">
            Розпочати
            <span className="material-symbols-outlined">chevron_right</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
