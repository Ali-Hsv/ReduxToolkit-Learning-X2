import { useState } from 'react'
import './style/App.css'
import Counter from './features/counter/Counter'
import Users from './features/users/Users'

function App() {

  return (
    <div>
      <Counter />
      <hr className='my-7 border-green_4'/>
      <Users />
    </div>
  )
}

export default App
