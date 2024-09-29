import React, { useState } from "react";

const AddAppointment = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    email: "",
    matricNo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send the data to an API or store it in state)
    console.log("Appointment Data:", formData);
    // Close the modal after submission
    closeModal();
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full ">

    <button onClick={closeModal} className=" text-red-500">x</button>
      <h2 className="text-2xl font-semibold mb-4">Book an Appointment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg mt-1"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Time</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg mt-1"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg mt-1"
            placeholder="Enter your email"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Matric No</label>
          <input
            type="text"
            name="matricNo"
            value={formData.matricNo}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg mt-1"
            placeholder="Enter your Matric No"
            required
          />
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg"
            onClick={closeModal}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-600 text-secondary px-4 py-2 rounded-lg"
          >
            Book Appointment
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddAppointment;
