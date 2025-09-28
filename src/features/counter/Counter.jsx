import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement} from './counterSlice'
function Counter() {

  const {value} = useSelector((store)=> store.counter)
  // console.log(value);
  const dispach = useDispatch();

  return (
    <div className='flex items-center justify-center flex-col bg-slate-600 px-12 p-4 rounded-lg'>
        <span className='text-2xl'>{value}</span>
        <div className='flex gap-3 mt-2 w-full'>
            <button className='w-[60px] pb-1 flex items-center bg-slate-700 rounded-lg justify-center' onClick={()=>dispach(decrement())}><span>-</span></button>
            <button className='w-[60px] pb-1 flex items-center bg-slate-700 rounded-lg justify-center' onClick={()=>dispach(increment())}><span>+</span></button>
        </div>
    </div>
  )
}

export default Counter