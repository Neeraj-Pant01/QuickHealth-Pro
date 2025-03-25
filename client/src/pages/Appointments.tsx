import React, { useState } from 'react';
import SearchBar from '../components/appointments/Searchbar.tsx';
import DoctorCard from '../components/appointments/DoctorCard.tsx';

interface Doctor {
  id: number;
  image: string;
  name: string;
  specialty: string;
  fees: string;
}

const doctorsData: Doctor[] = [
  {
    id: 1,
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    name: 'Dr. John Doe',
    specialty: 'Cardiologist',
    fees: '150',
  },
  {
    id: 2,
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
    name: 'Dr. Jane Smith',
    specialty: 'Neurologist',
    fees: '200',
  },
  {
    id: 3,
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
    name: 'Dr. Michael Johnson',
    specialty: 'Orthopedist',
    fees: '180',
  },
  {
    id: 4, // Changed duplicate ID
    image: 'https://randomuser.me/api/portraits/men/4.jpg',
    name: 'Dr. David Brown',
    specialty: 'Dermatologist',
    fees: '160',
  },
];

const DoctorListPage: React.FC = () => {
  const [filteredDoctors, setFilteredDoctors] = useState<Doctor[]>(doctorsData);

  const handleSearch = (query: string) => {
    const lowercasedQuery = query.trim().toLowerCase();

    if (lowercasedQuery === '') {
      setFilteredDoctors(doctorsData);
      return;
    }

    const filtered = doctorsData.filter(
      (doctor) =>
        doctor.name.toLowerCase().includes(lowercasedQuery) ||
        doctor.specialty.toLowerCase().includes(lowercasedQuery)
    );

    setFilteredDoctors(filtered);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
        <h1 className='text-[teal] text-2xl my-4 text-center font-bold'>Book Your Appointments Now</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              image={doctor.image}
              name={doctor.name}
              specialty={doctor.specialty}
              fees={doctor.fees}
            />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No doctors found.
          </p>
        )}
      </div>
    </div>
  );
};

export default DoctorListPage;
