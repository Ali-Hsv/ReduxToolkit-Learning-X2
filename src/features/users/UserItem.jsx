import React from 'react'

function UserItem({user}) {

    const {id, username, name, phone, email} = user;

  return (
    <div className='w-auto p-5 bg-green_1 rounded-xl flex justify-center items-center gap-10'>
        <div className='w-4/5 h-full flex flex-col justify-center items-start text-xl gap-2 text-green_5'>
            <p className='bg-green_2 p-2 px-3 rounded-xl'>User: {username}</p>
            <p className='bg-green_2 p-2 px-3 rounded-xl'>Name: {name}</p>
            <p className='bg-green_2 p-2 px-3 rounded-xl'>Email: {phone}</p>
            <p className='bg-green_2 p-2 px-3 rounded-xl'>Phone: {email}</p>
        </div>
        <div className='w-1/5 h-full flex justify-end items-start'>
            <div className='bg-green_3 rounded-lg px-3 py-2'>id: {id}</div>
        </div>
    </div>
  )
}

export default UserItem