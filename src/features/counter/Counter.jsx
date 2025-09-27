import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement} from './counterSlice'
function Counter() {

  const {value} = useSelector((store)=> store.counter)
  console.log(value);
  const dispach = useDispatch();

  return (
    <div>
        <h3>{value}</h3>
        <div className='flex gap-3 mt-4'>
            <button onClick={()=>dispach(decrement())}>-</button>
            <button onClick={()=>dispach(increment())}>+</button>
        </div>
    </div>
  )
}

export default Counter