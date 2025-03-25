import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css'; // Import Swiper styles

// Define the Product type
type doc = {
  id: number;
  name: string;
  speciality: string;
  image: string;
};

// Sample product data
const doctors: doc[] = [
  {
    id: 1,
    name: 'Product 1',
    speciality: '$19.99',
    image: '/images/doctor.jpg',
  },
  {
    id: 2,
    name: 'Product 2',
    speciality: '$29.99',
    image: '/images/doctor.jpg',
  },
  {
    id: 3,
    name: 'Product 3',
    speciality: '$39.99',
    image: '/images/doctor.jpg',
  },
  {
    id: 4,
    name: 'Product 4',
    speciality: '$49.99',
    image: '/images/doctor.jpg',
  },
  {
    id: 5,
    name: 'Product 5',
    speciality: '$59.99',
    image: '/images/doctor.jpg',
  },
];

interface DoctorProps {
    title: string;
  }

const DoctorSlider: React.FC<DoctorProps> = ({title}) => {
  return (
    <div className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-[#1fc4b4] mb-6">{title}</h2>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {doctors.map((doctor) => (
            <SwiperSlide key={doctor.id}>
              <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <h3 className="text-lg font-semibold text-[grey] mt-4">
                  {doctor.name}
                </h3>
                <p className="text-gray-600">{doctor?.speciality}</p>
                <button className="mt-4 w-full bg-[#1fc4b4] text-white py-2 rounded-lg hover:bg-[#589690] transition duration-300">
                  Appointment
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default DoctorSlider;