import React from 'react'
import Header from '../components/Header'

function EmployeeAboutPage() {
  return (
    <div className='w-full flex flex-col justify-center items-center mt-16 text-2xl text-green_5 font-bold'>
      <div>Employee About:</div>
      <div className='mt-10 w-auto p-5 bg-green_1 rounded-xl flex justify-center items-center gap-10'>
          <div className='w-2/3 h-full flex flex-col justify-center items-start text-xl gap-2 text-green_5'>
              <p className='bg-green_2 p-2 px-3 rounded-xl'>Name: Jack Star</p>
              <p className='bg-green_2 p-2 px-3 rounded-xl'>Email: jacky@email.com</p>
              <p className='bg-green_2 p-2 px-3 rounded-xl'>Phone: +1 442 21 42</p>
          </div>
          <div className='w-1/3 h-full'>
              <div className='bg-green_3 rounded-lg px-3 py-2'>Employee</div>
          </div>
      </div>
    </div>
  )
}

export default EmployeeAboutPage