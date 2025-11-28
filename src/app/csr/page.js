'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CSRPage() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [count, setCount] = useState(0)

  useEffect(() => {
    // Имитация загрузки данных с API
    const loadData = async () => {
      setLoading(true)
      try {
        // Имитация задержки сети
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        const mockData = {
          message: 'Данные загружены на клиенте!',
          timestamp: new Date().toLocaleTimeString(),
          items: ['React', 'Next.js', 'JavaScript', 'CSS']
        }
        setData(mockData)
      } catch (error) {
        console.error('Ошибка загрузки:', error)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  if (loading) {
    return (
      <div className="rendering-demo">
        <nav className="nav">
          <ul className="nav-list">
            <li><Link href="/" className="nav-link">Главная</Link></li>
            <li><Link href="/csr" className="nav-link active">CSR</Link></li>
            <li><Link href="/ssr" className="nav-link">SSR</Link></li>
            <li><Link href="/ssg" className="nav-link">SSG</Link></li>
            <li><Link href="/isr" className="nav-link">ISR</Link></li>
          </ul>
        </nav>
        <div className="loading">
          <h2>🔄 Загрузка данных на клиенте...</h2>
          <p>Этот контент рендерится в браузере</p>
        </div>
      </div>
    )
  }

  return (
    <div className="rendering-demo">
      <nav className="nav">
        <ul className="nav-list">
          <li><Link href="/" className="nav-link">Главная</Link></li>
          <li><Link href="/csr" className="nav-link active">CSR</Link></li>
          <li><Link href="/ssr" className="nav-link">SSR</Link></li>
          <li><Link href="/ssg" className="nav-link">SSG</Link></li>
          <li><Link href="/isr" className="nav-link">ISR</Link></li>
        </ul>
      </nav>

      <div className="demo-section">
        <span className="badge badge-csr">CSR</span>
        <h1>Client-Side Rendering</h1>
        <p>Эта страница рендерится полностью в браузере с помощью JavaScript</p>
        
        <div className="time-display">
          <strong>Время на клиенте:</strong> {new Date().toLocaleTimeString()}
        </div>
      </div>

      <div className="demo-section">
        <h2>📊 Данные загруженные на клиенте:</h2>
        {data && (
          <div className="data-grid">
            <div className="data-item">
              <strong>Сообщение:</strong> {data.message}
            </div>
            <div className="data-item">
              <strong>Время загрузки:</strong> {data.timestamp}
            </div>
            <div className="data-item">
              <strong>Технологии:</strong> {data.items.join(', ')}
            </div>
          </div>
        )}
      </div>

      <div className="demo-section">
        <h2>🎯 Интерактивность (только CSR):</h2>
        <div className="counter">
          <button className="button" onClick={() => setCount(count - 1)}>
            -1
          </button>
          <span className="counter-value">Счетчик: {count}</span>
          <button className="button" onClick={() => setCount(count + 1)}>
            +1
          </button>
        </div>
        <p>Этот счетчик работает полностью на клиенте без перезагрузки страницы</p>
      </div>

      <div className="info-box">
        <h4>🔍 Особенности CSR:</h4>
        <ul style={{paddingLeft: '1.5rem'}}>
          <li>Рендеринг происходит в браузере</li>
          <li>Отличная интерактивность</li>
          <li>Плохой SEO (контента нет в исходном HTML)</li>
          <li>Идеально для личных кабинетов, админ-панелей</li>
        </ul>
      </div>
    </div>
  )
}
