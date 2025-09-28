import React from 'react'
import Header from '../components/Header'

function AboutPage({select}) {
  return (
    <div>
      <Header selectAbout={select} />
      <main className='text-green_5 text-3xl font-bold flex justify-center items-center h-dvh'>
        <h2>About</h2>
      </main>
    </div>
  )
}

export default AboutPage