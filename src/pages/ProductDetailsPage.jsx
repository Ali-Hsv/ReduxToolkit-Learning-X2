import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../data/products';
import Product from '../components/Product';

function ProductDetailsPage() {
    const {name} = useParams(); 
  return (
    <div className='main_section'>
      <h2 className='mt-16'>Product Details:</h2>
      <div>
        {
            products && products.map((product)=>{
                if(product.name == name){
                    return <Product product={product} button={false}/>
                }
            })
        }
      </div>
    </div>
  )
}

export default ProductDetailsPage