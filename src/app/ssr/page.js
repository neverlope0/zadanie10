import Link from 'next/link'

// Имитация API запроса
async function getServerData() {
  console.log('🔄 SSR: Загрузка данных на сервере...')
  
  // Имитация задержки базы данных
  await new Promise(resolve => setTimeout(resolve, 500))
  
  return {
    message: 'Данные сгенерированы на сервере!',
    timestamp: new Date().toLocaleTimeString(),
    serverInfo: {
      nodeVersion: process.version,
      platform: process.platform
    }
  }
}

export default async function SSRPage() {
  const data = await getServerData()

  return (
    <div className="rendering-demo">
      <nav className="nav">
        <ul className="nav-list">
          <li><Link href="/" className="nav-link">Главная</Link></li>
          <li><Link href="/csr" className="nav-link">CSR</Link></li>
          <li><Link href="/ssr" className="nav-link active">SSR</Link></li>
          <li><Link href="/ssg" className="nav-link">SSG</Link></li>
          <li><Link href="/isr" className="nav-link">ISR</Link></li>
        </ul>
      </nav>

      <div className="demo-section">
        <span className="badge badge-ssr">SSR</span>
        <h1>Server-Side Rendering</h1>
        <p>Эта страница рендерится на сервере при каждом запросе</p>
        
        <div className="time-display">
          <strong>Время на сервере:</strong> {new Date().toLocaleTimeString()}
        </div>
      </div>

      <div className="demo-section">
        <h2>📊 Данные с сервера:</h2>
        <div className="data-grid">
          <div className="data-item">
            <strong>Сообщение:</strong> {data.message}
          </div>
          <div className="data-item">
            <strong>Время генерации:</strong> {data.timestamp}
          </div>
          <div className="data-item">
            <strong>Node.js версия:</strong> {data.serverInfo.nodeVersion}
          </div>
          <div className="data-item">
            <strong>Платформа:</strong> {data.serverInfo.platform}
          </div>
        </div>
      </div>

      <div className="demo-section">
        <h2>🔄 Тестирование SSR:</h2>
        <p>Обновите страницу (F5) и время изменится - это новое выполнение на сервере</p>
        <div className="time-display">
          <strong>Текущее время клиента:</strong> <span id="clientTime"></span>
        </div>
      </div>

      <div className="info-box">
        <h4>🔍 Особенности SSR:</h4>
        <ul style={{paddingLeft: '1.5rem'}}>
          <li>Рендеринг при каждом запросе</li>
          <li>Отличный SEO (контент в исходном HTML)</li>
          <li>Всегда свежие данные</li>
          <li>Нагрузка на сервер</li>
          <li>Идеально для новостей, социальных сетей</li>
        </ul>
      </div>

      {/* Клиентский скрипт для демонстрации гидратации */}
      <script dangerouslySetInnerHTML={{
        __html: `
          document.getElementById('clientTime').textContent = new Date().toLocaleTimeString();
        `
      }} />
    </div>
  )
}
