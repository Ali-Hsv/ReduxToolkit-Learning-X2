import React from 'react'
import { useNavigate } from 'react-router-dom'

function Product({product, button}) {
    const {id, name, price, elements: {uppercase}} = product

    const navigate = useNavigate();

    function capitalizeWords(str) {
      if(!uppercase){
        return str
            .split(" ")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
      }
      else{
        return str
            .split(" ")
            .map(word => word.toUpperCase())
            .join(" ");
      }
    }

  return (
    <div className='w-auto p-5 bg-green_1 rounded-xl flex flex-col justify-center items-center gap-4 text-green_5'>
        <h3 className='text-xl'>Info:</h3>
        <div className='bg-green_2 w-[200px] p-3 rounded-xl text-lg'>
            <span>id: {id}</span>
            <p>Name: {capitalizeWords(name)}</p>
            <p>Price: {price}$</p>
            {
                button && <button onClick={()=>navigate('/product-detail/' + name)} className='w-full text-center py-2 bg-green_3 rounded-lg'>Details</button>
            }
        </div>
    </div>
  )
}

export default Product