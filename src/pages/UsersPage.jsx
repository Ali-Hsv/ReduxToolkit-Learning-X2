import React from 'react'
import Header from '../components/Header'
import Users from '../features/users/Users'
import Counter from '../features/counter/Counter'

function UsersPage({select}) {
  return (
    <div>
      <Header selectUsers={select} />
      <main className='text-green_5 text-3xl font-bold flex flex-col justify-start items-center h-dvh mt-5 px-12'>
        <h2>Users</h2>
        <div className='w-full flex flex-col justify-center items-center gap-4 mt-5'>
          <Counter />
          <Users />
        </div>
      </main>
    </div>
  )
}

export default UsersPage