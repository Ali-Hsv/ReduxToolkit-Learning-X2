import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='w-full h-16 p-7 bg-green_3 flex justify-between items-center text-green_5 text-2xl'>
        <h1 className='cursor-default'>Header</h1>
        <nav className='flex gap-4'>
            <Link to='/' >Home</Link>
            <Link to='/about' >About</Link>
            <Link to='/products' >Products</Link>
            <Link to='/users' >Users</Link>
        </nav>
    </div>
  )
}

export default Header