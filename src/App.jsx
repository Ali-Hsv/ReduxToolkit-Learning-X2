import { useState } from 'react'
import './style/App.css'
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import UsersPage from './pages/UsersPage'
import AboutPage from './pages/AboutPage'
import NotFoundPages from './pages/NotFoundPages'
import EmployeeAboutPage from './pages/EmployeeAboutPage'
import CompanyAboutPage from './pages/CompanyAboutPage'
import ProductsPage from './pages/ProductsPage'
import Header from './components/Header'
import ProductDetailsPage from './pages/ProductDetailsPage'


function App() {

  return (
    <div className=''>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} /> 
        <Route path='/about' element={<AboutPage />} >
          <Route path='employee' element={<EmployeeAboutPage />} />
          <Route path='company' element={<CompanyAboutPage />} />
        </Route>
        <Route path='/users' element={<UsersPage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/product-detail/:name' element={<ProductDetailsPage />} />
        <Route path='*' element={<NotFoundPages />} />
      </Routes>
    </div>
  )
}

export default App
