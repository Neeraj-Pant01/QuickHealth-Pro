import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdLocationOn } from 'react-icons/md'
import Loader from '../components/common/Loader'
import Service from '../components/emeregency/Service'

const Emergency = () => {
    const [loading, setLoading] = useState(false)
  return (
    <div className='min-h-screen px-10'>
        <div className="flex items-center justify-between md:px-10 py-2 bg-[#1fc4b4] mt-5 rounded-lg">
            <div className="flex flex-col">
            <b className='flex items-center uppercase'>your current location <MdLocationOn className='text-[maroon] text-xl font-bold' /> </b>
            <b className='uppercase'>location</b>
            </div>
            <div className="flex flex-col gap-1">
                <b className='uppercase'>change your location</b>
                <div className="flex items-center gap-1">
                <input type="text" placeholder='enter pincode ! ' className='px-4 py-1 rounded-md bg-transparent text-[white] placeholder:text-[lightgrey] border border-[white] outline-none' />
                <AiOutlineSearch className='md:text-xl hover:scale-110 font-bold cursor-pointer'/>
                </div>
            </div>
        </div>
        {loading ?
        <Loader />
        :
        <div className="flex flex-col py-5">
            <h2 className='text-[teal] md:text-2xl py-5 text-center'> Nearest Available Emergency Servces For Loaction...</h2>
            <div className="flex items-center justify-between flex-wrap gap-5">
                <Service />
                <Service />
                <Service />
                <Service />
                <Service />
                <Service />
                <Service />
                <Service />
                <Service />
                <Service />
            </div>
        </div>
}
    </div>
  )
}

export default Emergency
