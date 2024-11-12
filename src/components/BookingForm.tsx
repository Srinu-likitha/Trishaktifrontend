import React, { useState, useRef } from 'react';
import axios from 'axios';
import { Truck, Car, Bike, FileText, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

type ServiceType = 'goods' | 'passenger' | 'quick';

const BookingForm = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook to get navigate function
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({
    serviceType: 'goods' as ServiceType,
    name: '',
    phone: '',
    email: '',
    pickupLocation: '',
    dropLocation: '',
    date: '',
    time: '',
    vehicleType: '',
    message: '',
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form fields
    if (!formData.name || !formData.phone || !formData.email || !formData.pickupLocation || !formData.dropLocation || !formData.date || !formData.time) {
      alert("Please fill out all required fields.");
      return;
    }

    // Create FormData instance
    const submitData = new FormData();
    submitData.append('serviceType', formData.serviceType);
    submitData.append('name', formData.name);
    submitData.append('phone', formData.phone);
    submitData.append('email', formData.email);
    submitData.append('pickupLocation', formData.pickupLocation);
    submitData.append('dropLocation', formData.dropLocation);
    submitData.append('date', formData.date);
    submitData.append('time', formData.time);
    submitData.append('vehicleType', formData.vehicleType);
    submitData.append('message', formData.message);

    if (selectedFile) {
      submitData.append('attachment', selectedFile);  // Add the selected file to the FormData
    }

    try {
      const response = await axios.post('https://trishaktibackend-1.onrender.com/api/submit-booking', submitData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Form submitted successfully:', response.data);
      alert('Booking request received! We will contact you shortly.');

      // Clear form data and selected file after successful submission
      setFormData({
        serviceType: 'goods' as ServiceType,
        name: '',
        phone: '',
        email: '',
        pickupLocation: '',
        dropLocation: '',
        date: '',
        time: '',
        vehicleType: '',
        message: '',
      });
      setSelectedFile(null); // Clear the file input

      // Redirect to ThankYou page after successful form submission
      navigate('/thank-you');

    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your booking request.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type === 'application/pdf') {
        if (file.size <= 5 * 1024 * 1024) { // 5MB limit
          setSelectedFile(file);
        } else {
          alert('File size should be less than 5MB');
          e.target.value = '';
        }
      } else {
        alert('Please upload only PDF files');
        e.target.value = '';
      }
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const serviceOptions = {
    goods: [
      { value: 'heavy-lorry', label: 'Heavy Lorry (20ft)' },
      { value: 'medium-lorry', label: 'Medium Lorry (14ft)' },
      { value: 'small-lorry', label: 'Small Lorry (10ft)' },
      { value: 'large-truck', label: 'Large Truck' },
      { value: 'medium-truck', label: 'Medium Truck' },
      { value: 'mini-truck', label: 'Mini Truck' },
      { value: 'cargo-van', label: 'Cargo Van' },
      { value: 'mini-van', label: 'Mini Van' }
    ],
    passenger: [
      { value: 'suv', label: 'SUV (7 Seater)' },
      { value: 'sedan', label: 'Sedan (4 Seater)' },
      { value: 'luxury-car', label: 'Luxury Car' },
      { value: 'auto-rickshaw', label: 'Auto Rickshaw' },
      { value: 'tempo-traveller', label: 'Tempo Traveller (12 Seater)' },
      { value: 'mini-bus', label: 'Mini Bus (20 Seater)' }
    ],
    quick: [
      { value: 'delivery-bike', label: 'Delivery Bike' },
      { value: 'scooter', label: 'Scooter' },
      { value: 'moped', label: 'Moped' }
    ]
  };

  return (
    <div id="book" className="py-24 bg-green-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Book Now</h2>
          <p className="text-gray-300">Fill out the form below to request our transportation services</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Service Type Selection */}
            <div className="md:col-span-2">
              <label className="block text-gray-700 font-semibold mb-4">Select Service Type</label>
              <div className="grid grid-cols-3 gap-4">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, serviceType: 'goods', vehicleType: '' })}
                  className={`p-4 rounded-lg border-2 flex flex-col items-center gap-2 ${formData.serviceType === 'goods' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}
                >
                  <Truck className="w-8 h-8 text-blue-900" />
                  <span>Goods Transport</span>
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, serviceType: 'passenger', vehicleType: '' })}
                  className={`p-4 rounded-lg border-2 flex flex-col items-center gap-2 ${formData.serviceType === 'passenger' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}
                >
                  <Car className="w-8 h-8 text-blue-900" />
                  <span>Passenger Travel</span>
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, serviceType: 'quick', vehicleType: '' })}
                  className={`p-4 rounded-lg border-2 flex flex-col items-center gap-2 ${formData.serviceType === 'quick' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}
                >
                  <Bike className="w-8 h-8 text-blue-900" />
                  <span>Quick Delivery</span>
                </button>
              </div>
            </div>

            {/* Personal Information Fields */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* Vehicle Type */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Vehicle Type</label>
              <select
                name="vehicleType"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                value={formData.vehicleType}
                onChange={handleChange}
              >
                <option value="">Select Vehicle Type</option>
                {serviceOptions[formData.serviceType].map((vehicle) => (
                  <option key={vehicle.value} value={vehicle.value}>
                    {vehicle.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Location Details */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Pickup Location</label>
              <input
                type="text"
                name="pickupLocation"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                value={formData.pickupLocation}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Drop Location</label>
              <input
                type="text"
                name="dropLocation"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                value={formData.dropLocation}
                onChange={handleChange}
              />
            </div>

            {/* Date and Time */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Date</label>
              <input
                type="date"
                name="date"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                value={formData.date}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Time</label>
              <input
                type="time"
                name="time"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                value={formData.time}
                onChange={handleChange}
              />
            </div>

            {/* File Upload */}
            <div className="md:col-span-2">
              <label className="block text-gray-700 font-semibold mb-2">
                Attach Documents (Optional)
                <span className="text-sm font-normal text-gray-500 ml-2">
                  PDF only, max 5MB
                </span>
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                <div className="space-y-1 text-center">
                  <FileText className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-600">
                    <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        ref={fileInputRef}
                        className="sr-only"
                        accept=".pdf"
                        onChange={handleFileChange}
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">
                    PDF up to 5MB
                  </p>
                </div>
              </div>
              {selectedFile && (
                <div className="mt-2 flex items-center justify-between p-2 bg-blue-50 rounded-lg">
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 text-blue-500 mr-2" />
                    <span className="text-sm text-blue-900">{selectedFile.name}</span>
                  </div>
                  <button
                    type="button"
                    onClick={removeFile}
                    className="text-red-500 hover:text-red-700"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              )}
            </div>

            {/* Additional Message */}
            <div className="md:col-span-2">
              <label className="block text-gray-700 font-semibold mb-2">Additional Message</label>
              <textarea
                name="message"
                rows={4}
                className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>

          <div className="mt-8">
            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
            >
              Submit Booking Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
