import { useState } from 'react'
import './style/App.css'
import Counter from './features/counter/Counter'
import Users from './features/users/Users'
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import UsersPage from './pages/UsersPage'
import AboutPage from './pages/AboutPage'
import NotFoundPages from './pages/NotFoundPages'
import EmployeeAboutPage from './pages/EmployeeAboutPage'
import CompanyAboutPage from './pages/CompanyAboutPage'

function App() {

  const select = 'text-green_4'

  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<HomePage select={select} />} /> 
        <Route path='/about' element={<AboutPage select={select} />} >
          <Route path='employee' element={<EmployeeAboutPage />} />
          <Route path='company' element={<CompanyAboutPage />} />
        </Route>
        <Route path='/users' element={<UsersPage select={select} />} />
        <Route path='*' element={<NotFoundPages />} />
      </Routes>
    </div>
  )
}

export default App
