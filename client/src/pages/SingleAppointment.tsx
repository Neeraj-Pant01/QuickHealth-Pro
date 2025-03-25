import React, { useState } from 'react';
import DoctorInfo from '../components/appointments/DocInfo.tsx';
import AppointmentSlots from '../components/appointments/AppointmentsSlots.tsx';
import BookingPopup from '../components/appointments/BookingPopup.tsx';

const doctorData = {
  image: 'https://randomuser.me/api/portraits/men/5.jpg',
  name: 'Dr. Robert Wilson',
  fees:'3000',
  specialty: 'Dermatologist',
  hospital: 'Sunshine Hospital, Delhi',
  description: 'Dr. Wilson has 15+ years of experience in dermatology, treating skin conditions with precision.',
};

const initialSlots = [
  { time: '9:00 AM', booked: false },
  { time: '10:00 AM', booked: true },
  { time: '11:00 AM', booked: false },
  { time: '12:00 PM', booked: false },
  { time: '2:00 PM', booked: true },
  { time: '3:00 PM', booked: false },
];

const AppointmentPage: React.FC = () => {
  const [slots, setSlots] = useState(initialSlots);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [isBookingPopupOpen, setIsBookingPopupOpen] = useState(false);

  const handleSlotClick = (time: string, booked: boolean) => {
    if (booked) {
      alert('This slot is already booked.');
    } else {
      setSelectedSlot(time);
      setIsBookingPopupOpen(true);
    }
  };

  const closePopup = () => {
    setSelectedSlot(null);
    setIsBookingPopupOpen(false);
  };

  const bookSlot = (username: string, paymentMethod: string) => {
    if (!username.trim()) {
      alert('Please enter a name.');
      return;
    }

    // Update slots state to mark slot as booked
    setSlots((prevSlots) =>
      prevSlots.map((slot) =>
        slot.time === selectedSlot ? { ...slot, booked: true } : slot
      )
    );

    alert(`Appointment booked for ${username} at ${selectedSlot} with ${paymentMethod}`);
    closePopup();
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <DoctorInfo doctor={doctorData} />
      <h2 className="text-xl text-[teal] font-bold mt-6">Book Available Slots</h2>
      <AppointmentSlots slots={slots} onSlotClick={handleSlotClick} />
      {isBookingPopupOpen && (
        <BookingPopup selectedSlot={selectedSlot} closePopup={closePopup} bookSlot={bookSlot} />
      )}
    </div>
  );
};

export default AppointmentPage;
