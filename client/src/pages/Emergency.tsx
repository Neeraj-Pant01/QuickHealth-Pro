import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdLocationOn } from 'react-icons/md';
import Loader from '../components/common/Loader';
import Service from '../components/emeregency/Service';

const Emergency = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen px-6 md:px-12 bg-gray-50">
      <div className="flex flex-col md:flex-row items-center justify-between md:px-10 py-6 bg-teal-500 mt-6 rounded-xl shadow-lg text-white">
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
          <div className="flex items-center gap-2">
            <MdLocationOn className="text-red-700 text-2xl" />
            <span className="text-lg font-semibold uppercase">Your Current Location</span>
          </div>
          <span className="text-sm font-medium mt-1">New York, NY</span>
        </div>
        <div className="flex flex-col items-center md:items-end gap-2">
          <span className="text-sm font-semibold uppercase">Change Your Location</span>
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Enter pincode"
              className="px-4 py-2 rounded-md bg-white text-gray-800 placeholder-gray-400 border border-teal-200 outline-none focus:ring-2 focus:ring-teal-300 transition duration-200"
            />
            <button className="p-2 bg-teal-600 rounded-md hover:bg-teal-700 transition-transform duration-200 hover:scale-105">
              <AiOutlineSearch className="text-xl text-white" />
            </button>
          </div>
        </div>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col py-4">
          <h2 className="text-2xl md:text-3xl mb-2 font-bold text-teal-600 text-center">
            Nearest Emergency Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
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
      )}
    </div>
  );
};

export default Emergency;