import { useState } from 'react';
import { FaInfo } from 'react-icons/fa';
import { MdAddIcCall, MdClose } from 'react-icons/md';

const Service = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="flex flex-col mb-7 px-6 py-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border border-teal-100">
        <div className="relative overflow-hidden rounded-lg mb-4">
          <img 
            src="https://deshbhagatuniversity.in/wp-content/uploads/2024/07/7087.jpg" 
            alt="Service Provider" 
            className="w-full h-40 object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <h3 className="text-xl font-semibold text-teal-600 mb-2">Dr. John Smith</h3>
        <div className="flex gap-2 items-center mb-3">
          <span className="text-sm font-medium text-teal-700">Type:</span>
          <span className="text-sm text-teal-600">Pharmacist</span>
        </div>
        <div className="flex items-center gap-2 mb-4 text-gray-500">
          <span className="text-sm font-medium">Distance:</span>
          <span className="text-sm font-bold">1000 Meter</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition-colors duration-200">
            <MdAddIcCall className="text-lg" />
            Call
          </button>
          <button 
            onClick={toggleModal}
            className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-200"
          >
            <FaInfo className="text-lg" />
            Info
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-xl p-8 max-w-lg w-full shadow-2xl transform transition-all duration-300 scale-100">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-teal-600">Dr. John Smith</h2>
              <button 
                onClick={toggleModal}
                className="text-gray-500 hover:text-teal-600 transition-colors duration-200"
              >
                <MdClose className="text-2xl" />
              </button>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-teal-700">Specialty:</span>
                <span className="text-sm text-gray-600">Pharmacist</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-teal-700">Experience:</span>
                <span className="text-sm text-gray-600">10+ Years</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-teal-700">Location:</span>
                <span className="text-sm text-gray-600">New York, NY (1000m away)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-teal-700">Qualifications:</span>
                <span className="text-sm text-gray-600">PharmD, Board Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-teal-700">Availability:</span>
                <span className="text-sm text-gray-600">Mon-Fri, 9 AM - 5 PM</span>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-600">
                  Dr. John Smith is a highly experienced pharmacist with a passion for patient care. He specializes in medication management, patient counseling, and personalized health solutions. Contact him to schedule a consultation or learn more about his services.
                </p>
              </div>
            </div>
            <div className="flex justify-end gap-4 mt-6">
              <button 
                onClick={toggleModal}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors duration-200"
              >
                Cancel
              </button>
              <button 
                className="flex items-center gap-2 px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition-colors duration-200"
              >
                <MdAddIcCall className="text-lg" />
                call
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Service;