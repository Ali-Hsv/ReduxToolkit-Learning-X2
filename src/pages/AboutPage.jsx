import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function AboutPage() {
  return (
    <div>
      <main className='main_section'>
        <h1 className='mt-16'>About</h1>
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