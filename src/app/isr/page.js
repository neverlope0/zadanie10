import Link from 'next/link'

// ISR: перегенерировать каждые 10 секунд
export const revalidate = 10

async function getIncrementalData() {
  console.log('🔄 ISR: Загрузка данных...')
  
  // Имитация API с изменяющимися данными
  await new Promise(resolve => setTimeout(resolve, 500))
  
  return {
    message: 'Данные с ISR!',
    generatedAt: new Date().toLocaleTimeString(),
    randomNumber: Math.floor(Math.random() * 1000),
    nextRegeneration: 'через 10 секунд'
  }
}

export default async function ISRPage() {
  const data = await getIncrementalData()

  return (
    <div className="rendering-demo">
      <nav className="nav">
        <ul className="nav-list">
          <li><Link href="/" className="nav-link">Главная</Link></li>
          <li><Link href="/csr" className="nav-link">CSR</Link></li>
          <li><Link href="/ssr" className="nav-link">SSR</Link></li>
          <li><Link href="/ssg" className="nav-link">SSG</Link></li>
          <li><Link href="/isr" className="nav-link active">ISR</Link></li>
        </ul>
      </nav>

      <div className="demo-section">
        <span className="badge badge-isr">ISR</span>
        <h1>Incremental Static Regeneration</h1>
        <p>Статическая страница с фоновым обновлением каждые 10 секунд</p>
        
        <div className="time-display">
          <strong>Данные сгенерированы:</strong> {data.generatedAt}
        </div>
        <div className="time-display">
          <strong>Текущее время:</strong> {new Date().toLocaleTimeString()}
        </div>
      </div>

      <div className="demo-section">
        <h2>📊 ISR Данные:</h2>
        <div className="data-grid">
          <div className="data-item">
            <strong>Сообщение:</strong> {data.message}
          </div>
          <div className="data-item">
            <strong>Случайное число:</strong> {data.randomNumber}
          </div>
          <div className="data-item">
            <strong>Следующее обновление:</strong> {data.nextRegeneration}
          </div>
        </div>
      </div>

      <div className="demo-section">
        <h2>🔄 Тестирование ISR:</h2>
        <p>Обновите страницу несколько раз с интервалом 10+ секунд</p>
        <p>Случайное число должно меняться, показывая фоновую регенерацию</p>
        <div className="time-display">
          <strong>Статус:</strong> {data.randomNumber !== data.randomNumber ? 'Обновлено!' : 'Ждем следующего обновления...'}
        </div>
      </div>

      <div className="info-box">
        <h4>🔍 Особенности ISR:</h4>
        <ul style={{paddingLeft: '1.5rem'}}>
          <li>Скорость SSG + свежесть SSR</li>
          <li>Фоновая регенерация без простоев</li>
          <li>Гибкая настройка частоты обновлений</li>
          <li>Идеально для каталогов, дашбордов, новостей</li>
        </ul>
      </div>
    </div>
  )
}
