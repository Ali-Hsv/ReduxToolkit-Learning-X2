import React from 'react'
import Product from '../components/Product'
import { products } from '../data/products'

function ProductsPage() {

  return (
    <div>
      <main className='main_section'>
        <h1 className='mt-16'>Products Info</h1>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-10'>
            {
              products && products.map((product) => <Product key={product.id} product={product} button={true}/>)
            }
        </div>
      </main>
    </div>
  )
}

export default ProductsPage