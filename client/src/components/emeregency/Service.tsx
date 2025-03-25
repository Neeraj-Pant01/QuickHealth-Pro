import React from 'react'
import { MdAddIcCall } from 'react-icons/md'
import { FaHireAHelper } from "react-icons/fa";

const Service = () => {
  return (
    <div className='flex  md:w-[22%] md:mb-7 gap-1 flex-col px-4 py-4 rounded-md bg-[#f6f5f5]'>
      <img src="https://deshbhagatuniversity.in/wp-content/uploads/2024/07/7087.jpg" alt="" />
      <b className='text-[#1fc4b4]'>Name</b>
      <div className="flex gap-2 items-center">
        <b className='text-[teal]'>Type : </b>
        <span className='text-[teal]'> Pharmacist</span>
      </div>
      <div className="flex items-center text-[grey] gap-2">
        <span>DISTANCE :</span>
        <b>1000 METER</b>
      </div>
      <div className="flex items-center gap-3">
            <MdAddIcCall className='text-[#1fc4b4] text-xl cursor-pointer' />
            <FaHireAHelper className='text-[red] text-xl cursor-pointer' />
        </div>
    </div>
  )
}

export default Service
