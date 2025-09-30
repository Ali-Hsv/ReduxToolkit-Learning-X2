import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { products } from '../data/products';
import Product from '../components/Product';

function ProductDetailsPage() {
    const {name} = useParams(); 
    const navigate =  useNavigate();
  return (
    <div className='main_section'>
      <h2 className='mt-16'>Product Details:</h2>
      <div className='mt-10 flex flex-col justify-center items-center  gap-6'>
        {
            products && products.map((product)=>{
                if(product.name == name){
                    return <Product product={product} button={false}/>
                }
            })
        }
        <button className='px-4 py-2 text-center bg-green_3 rounded-lg text-lg' onClick={()=>navigate('/products')}>Back</button>
      </div>
    </div>
  )
}

export default ProductDetailsPage