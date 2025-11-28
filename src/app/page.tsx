import Link from 'next/link'

export default function Home() {
  return (
    <div className="rendering-demo">
      <header style={{textAlign: 'center', marginBottom: '3rem'}}>
        <h1 style={{fontSize: '3rem', marginBottom: '1rem', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
          Next.js Rendering Demo
        </h1>
        <p style={{fontSize: '1.2rem', color: '#666'}}>
          Демонстрация всех видов рендеринга в Next.js App Router
        </p>
      </header>

      <nav className="nav">
        <ul className="nav-list">
          <li><Link href="/" className="nav-link active">Главная</Link></li>
          <li><Link href="/csr" className="nav-link">CSR</Link></li>
          <li><Link href="/ssr" className="nav-link">SSR</Link></li>
          <li><Link href="/ssg" className="nav-link">SSG</Link></li>
          <li><Link href="/isr" className="nav-link">ISR</Link></li>
          <li><Link href="/products" className="nav-link">Продукты</Link></li>
        </ul>
      </nav>

      <div className="grid">
        <div className="card card-csr">
          <span className="badge badge-csr">CSR</span>
          <h2>Client-Side Rendering</h2>
          <p>Рендеринг в браузере с помощью JavaScript</p>
          <ul style={{paddingLeft: '1.5rem', margin: '1rem 0'}}>
            <li>Богатая интерактивность</li>
            <li>Меньше нагрузки на сервер</li>
            <li>Плохой SEO</li>
          </ul>
          <Link href="/csr" className="button" style={{display: 'inline-block', textDecoration: 'none'}}>
            Перейти к демо
          </Link>
        </div>

        <div className="card card-ssr">
          <span className="badge badge-ssr">SSR</span>
          <h2>Server-Side Rendering</h2>
          <p>Рендеринг на сервере при каждом запросе</p>
          <ul style={{paddingLeft: '1.5rem', margin: '1rem 0'}}>
            <li>Отличный SEO</li>
            <li>Свежие данные</li>
            <li>Нагрузка на сервер</li>
          </ul>
          <Link href="/ssr" className="button" style={{display: 'inline-block', textDecoration: 'none'}}>
            Перейти к демо
          </Link>
        </div>

        <div className="card card-ssg">
          <span className="badge badge-ssg">SSG</span>
          <h2>Static Site Generation</h2>
          <p>Генерация страниц при сборке</p>
          <ul style={{paddingLeft: '1.5rem', margin: '1rem 0'}}>
            <li>Максимальная скорость</li>
            <li>Идеальное кэширование</li>
            <li>Статические данные</li>
          </ul>
          <Link href="/ssg" className="button" style={{display: 'inline-block', textDecoration: 'none'}}>
            Перейти к демо
          </Link>
        </div>

        <div className="card card-isr">
          <span className="badge badge-isr">ISR</span>
          <h2>Incremental Static Regeneration</h2>
          <p>Статика с фоновым обновлением</p>
          <ul style={{paddingLeft: '1.5rem', margin: '1rem 0'}}>
            <li>Скорость SSG + свежесть SSR</li>
            <li>Автообновление</li>
            <li>Гибкая настройка</li>
          </ul>
          <Link href="/isr" className="button" style={{display: 'inline-block', textDecoration: 'none'}}>
            Перейти к демо
          </Link>
        </div>
      </div>

      <div className="demo-section">
        <h2>О проекте</h2>
        <p>Это демонстрационное приложение показывает разницу между различными подходами к рендерингу в Next.js App Router.</p>
        <p>Каждая страница использует свой тип рендеринга и показывает время генерации контента.</p>
        
        <div className="info-box">
          <h4>💡 Как тестировать:</h4>
          <ul style={{paddingLeft: '1.5rem'}}>
            <li>Обновляйте страницы и смотрите на время</li>
            <li>Откройте DevTools → Network чтобы увидеть запросы</li>
            <li>Проверьте исходный код страниц (Ctrl+U)</li>
            <li>Запустите `next build` чтобы увидеть разницу в сборке</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
