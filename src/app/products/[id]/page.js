import Link from 'next/link'
import { notFound } from 'next/navigation'

// Генерация статических путей для популярных продуктов
export async function generateStaticParams() {
  console.log('🏗️ Генерация статических путей для продуктов...')
  
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ]
}

// ISR для отдельных продуктов
async function getProduct(id) {
  console.log(`📦 Загрузка продукта ${id}...`)
  
  await new Promise(resolve => setTimeout(resolve, 600))
  
  const products = {
    1: { id: 1, name: 'Ноутбук Gaming Pro', price: 999, description: 'Мощный игровой ноутбук', stock: 15 },
    2: { id: 2, name: 'Смартфон Flagship', price: 699, description: 'Флагманский смартфон', stock: 8 },
    3: { id: 3, name: 'Наушники Wireless', price: 199, description: 'Беспроводные наушники', stock: 25 },
    4: { id: 4, name: 'Клавиатура Mechanical', price: 129, description: 'Механическая клавиатура', stock: 12 },
    5: { id: 5, name: 'Монитор 4K', price: 449, description: '4K монитор для профессионалов', stock: 6 },
  }
  
  const product = products[id]
  if (!product) {
    notFound()
  }
  
  return product
}

export default async function ProductPage({ params }) {
  const product = await getProduct(params.id)

  return (
    <div className="rendering-demo">
      <nav className="nav">
        <ul className="nav-list">
          <li><Link href="/" className="nav-link">Главная</Link></li>
          <li><Link href="/products" className="nav-link">← Назад к каталогу</Link></li>
        </ul>
      </nav>

      <div className="demo-section">
        <span className="badge badge-isr">ISR + SSG</span>
        <h1>{product.name}</h1>
        <p>Динамическая страница с гибридным рендерингом</p>
      </div>

      <div className="data-grid">
        <div className="data-item">
          <strong>Название:</strong> {product.name}
        </div>
        <div className="data-item">
          <strong>Цена:</strong> ${product.price}
        </div>
        <div className="data-item">
          <strong>Описание:</strong> {product.description}
        </div>
        <div className="data-item">
          <strong>В наличии:</strong> {product.stock} шт.
        </div>
        <div className="data-item">
          <strong>ID продукта:</strong> {product.id}
        </div>
        <div className="data-item">
          <strong>Сгенерировано:</strong> {new Date().toLocaleTimeString()}
        </div>
      </div>

      <div className="info-box">
        <h4>🔧 Гибридный рендеринг:</h4>
        <p>Эта страница использует комбинацию SSG и ISR:</p>
        <ul style={{paddingLeft: '1.5rem', marginTop: '0.5rem'}}>
          <li><strong>SSG:</strong> Популярные продукты (ID 1,2,3) генерируются при сборке</li>
          <li><strong>ISR:</strong> Остальные продукты генерируются по требованию</li>
          <li><strong>Кэширование:</strong> Все страницы кэшируются и обновляются по расписанию</li>
        </ul>
      </div>
    </div>
  )
}
