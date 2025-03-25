import React, { useState } from 'react';
import DateSelector from './DateSelector';

interface AppointmentSlotsProps {
  slots: { time: string; booked: boolean }[];
  onSlotClick: (time: string, booked: boolean) => void;
}

const AppointmentSlots: React.FC<AppointmentSlotsProps> = ({ slots, onSlotClick }) => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  return (
    <div>
        <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold">Book an Appointment</h1>

      {/* Date Selector */}
      <DateSelector selectedDate={selectedDate} onDateChange={setSelectedDate} />

      {/* Display selected date */}
      {selectedDate && (
        <p className="mt-4 text-[teal] text-lg font-medium">
          Selected Date: {selectedDate.toDateString()}
        </p>
      )}
    </div>
    <div className="grid grid-cols-3 gap-4 mt-6">
      {slots.map((slot, index) => (
        <button
          key={index}
          className={`p-3 rounded-lg text-center text-white font-semibold ${
            slot.booked ? 'bg-red-400 cursor-not-allowed' : 'bg-[#1fc4b4] hover:bg-[#2cead7]'
          }`}
          onClick={() => onSlotClick(slot.time, slot.booked)}
          disabled={slot.booked}
        >
          {slot.time}
        </button>
      ))}
    </div>
    </div>
  );
};

export default AppointmentSlots;
