import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import { FaShoppingCart, FaTag, FaTruck } from 'react-icons/fa';

const AdvertisementSlider: React.FC = () => {
  const slides = [
    {
      id: 1,
      image: '/images/hdocs.png',
      tagline: 'Big Savings! Up to 50% Off',
      icon: <FaTag className="text-4xl text-white" />,
      bgColor: 'bg-gradient-to-r from-pink-500 to-purple-600',
    },
    {
      id: 2,
      image: '/images/h2.png',
      tagline: 'Free Shipping on All Orders',
      icon: <FaTruck className="text-4xl text-white" />,
      bgColor: 'bg-gradient-to-r from-blue-500 to-teal-400',
    },
    {
      id: 3,
      image: '/images/h3.png',
      tagline: 'New Arrivals! Shop Now',
      icon: <FaShoppingCart className="text-4xl text-white" />,
      bgColor: 'bg-gradient-to-r from-yellow-400 to-orange-500',
    },
  ];

  return (
    <div className="relative w-full h-96">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className={`flex items-center justify-center h-96 ${slide.bgColor}`}>
              <div className="text-center">
                {slide.icon}
                <h2 className="mt-4 text-4xl font-bold text-white">{slide.tagline}</h2>
                <button className="mt-6 px-6 py-2 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition duration-300">
                  Shop Now
                </button>
              </div>
              <img src={slide.image} alt={slide.tagline} className="w-1/2 h-96 object-cover" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AdvertisementSlider;