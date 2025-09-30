import React from 'react'
import Header from '../components/Header'
import { Link, Outlet } from 'react-router-dom'

function AboutPage({select}) {
  return (
    <div>
      <Header selectAbout={select} />
      <main className='text-green_5 text-3xl font-bold flex flex-col justify-start items-center'>
        <h2 className='mt-10'>About</h2>
        <div className='mt-10 flex justify-between items-center gap-12'>
          <Link to='employee' className='p-4 px-5 rounded-xl bg-slate-600 text-center hover:bg-slate-500 transition-all'>Employee</Link>
          <Link to='company' className='p-4 px-5 rounded-xl bg-slate-600 text-center hover:bg-slate-500 transition-all'>Company</Link>
        </div>
      </main>

      <Outlet />
    </div>
  )
}

export default AboutPage