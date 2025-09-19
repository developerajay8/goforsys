import React, { useState } from 'react';
import { Phone, Mail } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-gray-50  md:py-20 py-10 ">
      <div className="max-w-[1170px] mx-auto xl:px-0 px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Contact Details */}
          <div className="space-y-4">
            <div>
              <h1 className="text-5xl lg:text-4xl font-bold text-black leading-tight mb-4">
                PARTNER WITH A RELIABLE &
                <span className="bg-gradient-to-r from-black via-[#ff712c] to-black bg-clip-text text-transparent"> EXPERIENCED STUDIO</span>
              </h1>

              <p className="text-gray-600 text-lg">
                Have a great idea? Let's get in touch. The coffee is on us!
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-black mb-8">Contact Info</h2>
              
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-black via-[#ff712c] to-black p-3 rounded-full">
                  <Phone className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="font-semibold text-black text-lg">Phone</h3>
                  <p className="text-gray-600">Call (+91) 86 960 54749</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-black via-[#ff712c] to-black p-3 rounded-full">
                  <Mail className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="font-semibold text-black text-lg">Email</h3>
                  <p className="text-gray-600">sales@goforsys.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-[#ff712c] p-8 rounded-2xl shadow-lg">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff712c] focus:border-transparent text-black placeholder-gray-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff712c] focus:border-transparent text-black placeholder-gray-500"
                  />
                </div>
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff712c] focus:border-transparent resize-none text-black placeholder-gray-500"
                ></textarea>
              </div>

              <button
                onClick={handleSubmit}
                className="bg-gradient-to-r from-black via-[#ff712c] to-black text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                SEND MESSAGE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}