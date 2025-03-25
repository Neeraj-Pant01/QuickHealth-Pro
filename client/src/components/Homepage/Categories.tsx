import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css'; // Import Swiper styles

// Define the Product type
type category = {
  id: number;
  name: string;
  desc: string;
  image: string;
  color:string;
  col:string;
};

// Sample product data
const categories: category[] = [
  {
    id: 1,
    name: 'Personal Care',
    desc: 'Get upto 10% off on personal care',
    image: 'https://www.shrichyawanayurved.com/cdn/shop/files/multivitaminandmultimineralcapsules.jpg?v=1703162519',
    color:'text-[red]',
    col:"bg-red-300"
  },
  {
    id: 2,
    name: 'skin care',
    desc: 'Get upto 50% off on skin care',
    image: 'https://www.shrichyawanayurved.com/cdn/shop/files/multivitaminandmultimineralcapsules.jpg?v=1703162519',
    color:'text-blue-400',
    col:'bg-blue-300'
  },
  {
    id: 3,
    name: 'Suppliments to support lifestyle',
    desc: 'Get upto 40% off on Suppliments',
    image: 'https://www.shrichyawanayurved.com/cdn/shop/files/multivitaminandmultimineralcapsules.jpg?v=1703162519',
    color:'text-[orange]',
    col:'bg-[#DDA0DD]'
  },
  {
    id: 4,
    name: 'arurvedic',
    desc: 'Get upto 20% off',
    image: 'https://www.shrichyawanayurved.com/cdn/shop/files/multivitaminandmultimineralcapsules.jpg?v=1703162519',
    color:'bg-[#1fc4b4]',
    col:'bg-[#589690]'
  },
  {
    id: 5,
    name: 'Feminine Hygiene',
    desc: 'Get upto 90% off on Feminine Hygiene',
    image: 'https://www.shrichyawanayurved.com/cdn/shop/files/multivitaminandmultimineralcapsules.jpg?v=1703162519',
    color:'text-[tomato]',
    col:'bg-[pink]'
  },
];

interface ProductSliderProps {
    title: string;
  }


const Categories: React.FC<ProductSliderProps> = ({title}) => {
  return (
    <div className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-[#1fc4b4] mb-6">{title}</h2>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {categories.map((category,i) => (
            <SwiperSlide key={category.id}>
              <div className={`${category?.col} flex bg-opacity-70 items-center justify-center p-4 h-[300px] rounded-lg shadow-md`}>
                <div className={`flex-[1.5] flex-col gap-3`}>
                    <h1 className='text-3xl uppercase font-bold text-shadow-lg'>{category?.name}</h1>
                    <p className={`text-2xl font-semibold`}>{category?.desc}</p>
                </div>
                <div className="flex-1 flex-col justify-between">
                    <img className='rounded-md' src={category?.image} alt="" />
                    <button className='text-xl mt-5 px-3 p-2 rounded-md bg-[#434242]'>BUY NOW</button>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Categories;