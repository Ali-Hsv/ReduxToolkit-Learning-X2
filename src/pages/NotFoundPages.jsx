import React from 'react'
import { Link } from 'react-router-dom'

function NotFoundPages() {
  return (
    <div>
      <main className='text-4xl text-[#b7e4c7] font-bold flex flex-col justify-center items-center'>
        <h1 className='mt-16'>Page Not Found!</h1>
        <Link to='/' className='button-link mt-6'>Back</Link>
      </main>
    </div>
  )
}

export default NotFoundPages