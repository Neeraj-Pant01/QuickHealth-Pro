import React from 'react';

interface DoctorInfoProps {
  doctor: {
    image: string;
    name: string;
    fees:string;
    specialty: string;
    hospital: string;
    description: string;
  };
}

const DoctorInfo: React.FC<DoctorInfoProps> = ({ doctor }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col sm:flex-row items-center">
      <img src={doctor.image} alt={doctor.name} className="w-32 h-32 rounded-full object-cover mr-6" />
      <div>
        <h2 className="text-2xl font-bold">{doctor.name}</h2>
        <p className="text-gray-600">{doctor.specialty}</p>
        <p className="text-gray-500">{doctor.hospital}</p>
        <p className="mt-2 text-gray-700">{doctor.description}</p>
        <p className="mt-2 text-[teal]">{doctor.fees} Rs.</p>
      </div>
    </div>
  );
};

export default DoctorInfo;
