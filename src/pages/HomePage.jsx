import React from 'react'
import Header from '../components/Header'

function HomePage({select}) {
  return (
    <div>
      <Header selectHome={select} />
      <main className='text-green_5 text-3xl font-bold flex justify-center items-center h-dvh'>
        <h2>Home</h2>
      </main>
    </div>
  )
}

export default HomePage