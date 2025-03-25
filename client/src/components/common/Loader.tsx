import React from 'react'
import { FaSyncAlt } from 'react-icons/fa'
import "./style.css"

const Loader = () => {
  return (
    <div className='flex md:h-[300px] items-center justify-center flex-col'>
      <FaSyncAlt className='loader text-4xl font-bold text-[#1fc4b4]'/>
      <b className='ltextx mt-4'>FETCHING...</b>
    </div>
  )
}

export default Loader
