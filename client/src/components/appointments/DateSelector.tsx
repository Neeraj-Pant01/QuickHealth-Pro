import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface DateSelectorProps {
  selectedDate: Date | null;
  onDateChange: (date: Date) => void;
}

const DateSelector: React.FC<DateSelectorProps> = ({ selectedDate, onDateChange }) => {
  // Disable Sundays (0 is Sunday in JavaScript)
  const isDayAvailable = (date: Date) => {
    const day = date.getDay();
    return day !== 0; // Allow Monday to Saturday, disable Sunday
  };

  return (
    <div className="flex items-center gap-4">
      {/* <h2 className="text-lg font-bold mb-2 text-[grey]">Select Appointment Date</h2> */}
      <DatePicker
        selected={selectedDate}
        onChange={onDateChange}
        filterDate={isDayAvailable}
        minDate={new Date()} // Prevent past dates
        className="py-3 text-center text-[black] bg-[#f1f0f0] border-2 rounded-lg w-full placeholder:text-[black]"
        placeholderText='select date'
        dateFormat="dd/MM/yyyy"
      />
    </div>
  );
};

export default DateSelector;
