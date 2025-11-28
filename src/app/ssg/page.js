import Link from 'next/link'

// Данные генерируются при СБОРКЕ
async function getStaticData() {
  console.log('🏗️ SSG: Генерация статических данных...')
  
  return {
    message: 'Эта страница сгенерирована при сборке!',
    buildTime: new Date().toLocaleString(),
    features: [
      'Максимальная производительность',
      'Идеальное кэширование',
      'Отличный SEO',
      'Нулевая нагрузка на сервер'
    ]
  }
}

export default async function SSGPage() {
  const data = await getStaticData()

  return (
    <div className="rendering-demo">
      <nav className="nav">
        <ul className="nav-list">
          <li><Link href="/" className="nav-link">Главная</Link></li>
          <li><Link href="/csr" className="nav-link">CSR</Link></li>
          <li><Link href="/ssr" className="nav-link">SSR</Link></li>
          <li><Link href="/ssg" className="nav-link active">SSG</Link></li>
          <li><Link href="/isr" className="nav-link">ISR</Link></li>
        </ul>
      </nav>

      <div className="demo-section">
        <span className="badge badge-ssg">SSG</span>
        <h1>Static Site Generation</h1>
        <p>Эта страница была сгенерирована во время сборки приложения</p>
        
        <div className="time-display">
          <strong>Время сборки:</strong> {data.buildTime}
        </div>
        <div className="time-display">
          <strong>Текущее время:</strong> {new Date().toLocaleTimeString()}
        </div>
      </div>

      <div className="demo-section">
        <h2>📊 Статические данные:</h2>
        <div className="data-grid">
          <div className="data-item">
            <strong>Сообщение:</strong> {data.message}
          </div>
          <div className="data-item">
            <strong>Преимущества SSG:</strong>
            <ul style={{paddingLeft: '1.5rem', marginTop: '0.5rem'}}>
              {data.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="demo-section">
        <h2>🔄 Тестирование SSG:</h2>
        <p>Время сборки не меняется при обновлении страницы</p>
        <p>Эта страница загружается как статический HTML файл</p>
      </div>

      <div className="info-box">
        <h4>🔍 Особенности SSG:</h4>
        <ul style={{paddingLeft: '1.5rem'}}>
          <li>Генерация при сборке (next build)</li>
          <li>Максимальная скорость загрузки</li>
          <li>Идеальное кэширование на CDN</li>
          <li>Данные фиксированы до следующей сборки</li>
          <li>Идеально для блогов, документации, лендингов</li>
        </ul>
      </div>
    </div>
  )
}
