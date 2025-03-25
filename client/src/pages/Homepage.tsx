import React from 'react'
import Options from '../components/Homepage/Options'
import ProductSlider from '../components/common/Slider'
import "../App.css"
import DoctorSlider from '../components/common/DoctorSlider'
import AdvertisementSlider from '../components/Homepage/Advertisement'
import Categories from '../components/Homepage/Categories'
import ShowCategories from '../components/Homepage/ShowCategories'

const Homepage = () => {
  return (
    <div className='w-[100%] bg mt-3'>
      <div className="flex px-5 py-5">
      <AdvertisementSlider />
      </div>
      <div>
        <ProductSlider title="Feature Products" />
      </div>
        <section className='home bg-cover flex items-center justify-center h-[100vh] text-[white]'>
          <div className="flex items-center gap-5 justify-center">
            <div className="flex flex-col px-3 opacity-90 w-[20%] bg-[white] items-center gap-2 justify-center py-3 rounded-md">
              <img className='w-[70%] rounded-md'  src="/images/doctor.jpg" alt="" />
              <button className='bg-[tomato] px-4 py-2 rounded-md text-[white]'>Emergency</button>
              <p className='text-sm text-[black]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsa tempora deserunt reprehenderit nam aspernatur nisi delectus numquam molestias? Aut!</p>
            </div>
            <div className="flex flex-col gap-2 px-3 opacity-90 w-[20%] bg-[white] items-center justify-center py-3 rounded-md">
              <img className='w-[70%] rounded-md' src="/images/doctor.jpg" alt="" />
              <button className='bg-blue-400 px-4 py-2 rounded-md text-[white]'>Book appointment</button>
              <p className='text-sm text-[black]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsa tempora deserunt reprehenderit nam aspernatur nisi delectus numquam molestias? Aut!</p>
            </div>
            <div className="flex flex-col px-3 opacity-90 w-[20%] bg-[white] items-center gap-2 justify-center py-3 rounded-md">
              <img className='w-[70%] rounded-md'  src="/images/doctor.jpg" alt="" />
              <button className='bg-[#1fc4b4] px-4 py-2 rounded-md text-[white]'>Buy Medicines</button>
              <p className='text-sm text-[black]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsa tempora deserunt reprehenderit nam aspernatur nisi delectus numquam molestias? Aut!</p>
            </div>
          </div>
        </section>
        <div className='mt-20'>
      <Options />
        </div>
      <div>Advertisements</div>
      <div>
        <DoctorSlider title='Popular experts' />
      </div>
      <div>
        <Categories title='Lifestyle' />
      </div>
      <div>
        <ProductSlider title='Best Sellers' />
      </div>
      <div>
        <ShowCategories />
      </div>
    </div>
  )
}

export default Homepage
