// src/components/DoctorCard.tsx
import React from 'react';

interface DoctorCardProps {
  image: string;
  name: string;
  specialty: string;
  fees: string;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ image, name, specialty, fees }) => {
  return (
    <div className="border md:w-[100%] w-[45%] rounded-lg shadow-md p-4 max-w-sm mx-auto">
      <img src={image} alt={name} className="w-32 h-32 rounded-full mx-auto mb-4" />
      <h3 className="text-xl font-semibold text-teal-500">{name}</h3>
      <p className="text-sm text-gray-600">{specialty}</p>
      <p className="text-teal-500 font-semibold">Fees: ${fees}</p>
      <button className="mt-4 w-full py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600">
        Book Appointment
      </button>
    </div>
  );
};

export default DoctorCard;
