import React, { useState } from 'react';

interface BookingPopupProps {
  selectedSlot: string | null;
  closePopup: () => void;
  bookSlot: (username: string, paymentMethod: string) => void;
}

const BookingPopup: React.FC<BookingPopupProps> = ({ selectedSlot, closePopup, bookSlot }) => {
  const [username, setUsername] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Pay Online');

  if (!selectedSlot) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Book Appointment</h2>
        <p className="text-gray-600">Slot: {selectedSlot}</p>
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full p-2 border text-[black] rounded-lg mt-3"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <div className="mt-3">
          <label className="block text-gray-600">Payment Method:</label>
          <select
            className="w-full p-2 text-[black] border rounded-lg"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="Pay Online">Pay Online</option>
            <option value="Pay Later">Pay Later</option>
          </select>
        </div>
        <div className="flex justify-between mt-5">
          <button className="bg-gray-400 px-4 py-2 rounded-lg" onClick={closePopup}>Cancel</button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            onClick={() => bookSlot(username, paymentMethod)}
          >
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingPopup;
