import React, { useState } from 'react';

const CommonContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <section className="relative min-h-screen overflow-hidden font-nunito">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80')"
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0  bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="text-white space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Discover a{' '}
                <span className="text-teal-400">new</span>
                <br />
                way of living
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-gray-200 max-w-xl leading-relaxed">
                * Feugiat scriptorem qui ea, duo carnodum eloquentiam eu. Te malis 
                tibique eum. Ne magna assum everti.
              </p>
            </div>

            {/* Right Form */}
            <div className="w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
              <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-2xl">
                <div className="mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                    Make an enquiry
                  </h2>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    Save your time and easily rent or sell your property with the 
                    lowest commission on the real estate market.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <div className="block text-sm font-medium text-gray-700 mb-2">
                      Your name*
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200 text-gray-900 placeholder-gray-500"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <div className="block text-sm font-medium text-gray-700 mb-2">
                      Your email*
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200 text-gray-900 placeholder-gray-500"
                      placeholder="Enter your email address"
                    />
                  </div>

                  {/* Phone Field */}
                  <div>
                    <div className="block text-sm font-medium text-gray-700 mb-2">
                      Your phone number*
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200 text-gray-900 placeholder-gray-500"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 text-lg"
                  >
                    Make an enquiry
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommonContact;