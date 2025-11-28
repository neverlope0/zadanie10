export async function GET() {
  const products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 },
  ]

  // Имитация задержки
  await new Promise(resolve => setTimeout(resolve, 500))

  return Response.json(products)
}

