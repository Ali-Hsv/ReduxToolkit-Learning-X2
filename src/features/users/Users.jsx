import React, { useEffect } from 'react'
import UserItem from './UserItem'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from './userSlice';

function Users() {
    const {users} = useSelector(store => store.users);
    const {value} = useSelector(store => store.counter);
    console.log('1', users);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllUsers())
    }, []);

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {
            users && users.slice(0, value).map((user) => (<UserItem key={user.id} user={user}/>))
        }
    </div>
  )
}

export default Users