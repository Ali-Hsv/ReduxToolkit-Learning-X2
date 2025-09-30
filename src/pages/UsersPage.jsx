import React from 'react'
import Users from '../features/users/Users'
import Counter from '../features/counter/Counter'

function UsersPage() {
  return (
    <div>
      <main className='main_section'>
        <h1 className='mt-16'>Users</h1>
        <div className='w-full flex flex-col justify-center items-center gap-4 mt-5'>
          <Counter />
          <Users />
        </div>
      </main>
    </div>
  )
}

export default UsersPage