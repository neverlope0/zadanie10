
import Link from 'next/link'

// ISR для списка продуктов
export const revalidate = 30

async function getProducts() {
  console.log('🛒 Загрузка списка продуктов...')
  
  await new Promise(resolve => setTimeout(resolve, 800))
  
  return [
    { id: 1, name: 'Ноутбук Gaming Pro', price: 999, category: 'electronics' },
    { id: 2, name: 'Смартфон Flagship', price: 699, category: 'electronics' },
    { id: 3, name: 'Наушники Wireless', price: 199, category: 'audio' },
    { id: 4, name: 'Клавиатура Mechanical', price: 129, category: 'accessories' },
    { id: 5, name: 'Монитор 4K', price: 449, category: 'electronics' },
  ]
}

export default async function ProductsPage() {
  const products = await getProducts()

  return (
    <div className="rendering-demo">
      <nav className="nav">
        <ul className="nav-list">
          <li><Link href="/" className="nav-link">Главная</Link></li>
          <li><Link href="/csr" className="nav-link">CSR</Link></li>
          <li><Link href="/ssr" className="nav-link">SSR</Link></li>
          <li><Link href="/ssg" className="nav-link">SSG</Link></li>
          <li><Link href="/isr" className="nav-link">ISR</Link></li>
          <li><Link href="/products" className="nav-link active">Продукты</Link></li>
        </ul>
      </nav>

      <div className="demo-section">
        <span className="badge badge-isr">ISR</span>
        <h1>Каталог продуктов</h1>
        <p>Страница с ISR - обновляется каждые 30 секунд</p>
        <div className="time-display">
          <strong>Сгенерировано:</strong> {new Date().toLocaleTimeString()}
        </div>
      </div>

      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <div className="product-price">${product.price}</div>
            <p>Категория: {product.category}</p>
            <Link href={`/products/${product.id}`} className="button" style={{display: 'inline-block', textDecoration: 'none', marginTop: '1rem'}}>
              Подробнее
            </Link>
          </div>
        ))}
      </div>

      <div className="info-box">
        <h4>📦 Реальный пример ISR:</h4>
        <p>Этот каталог продуктов использует ISR потому что:</p>
        <ul style={{paddingLeft: '1.5rem', marginTop: '0.5rem'}}>
          <li>Цены и наличие могут меняться</li>
          <li>Не нужно пересобирать весь сайт при изменениях</li>
          <li>Пользователи получают быструю загрузку</li>
          <li>Данные остаются актуальными</li>
        </ul>
      </div>
    </div>
  )
}
