import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col bg-gradient-to-b p-5 from-[#a7ded9] to-[#47837d]'>
      <div className="flex items-center justify-between">
        <h2 className='text-xl text-[black]'>Healthcare.com</h2>
        <p className='text-sm text-[black] '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quis porro excepturi quia sint totam ipsum aliquid iste est maiores?</p>
      </div>
      <hr className='my-8' />
      <div className="flex text-[black] px-5  justify-between">
        <div className="flex gap-2 flex-col w-[20%]">
          <b>COMPANY</b>
          <p className=''>About us</p>
          <p>Contact</p>
          <p>Terms Of Service</p>
          <p>Privacy Policy</p>
        </div>
        <div className="flex gap-2 flex-col w-[20%]">
          <b>SHOP</b>
          <p>medicies</p>
          <p>book an appointment</p>
          <p>checkups</p>
        </div>
        <div className="flex gap-2 flex-col w-[20%]">
          <b>CATEGORIES</b>
          <p>Fitness</p>
          <p>Family</p>
          <p>Suppliments</p>
          <p>Healthcare</p>
          <p>Multivitamins</p>
        </div>
        <div className="flex gap-2 flex-col w-[20%]">
          <b>SOCIAL</b>
          <p>LinkedIn</p>
          <p>Twitter</p>
          <p>Instragram</p>
          <p>Facebook</p>
          </div>
      </div>
    </div>
  )
}

export default Footer
