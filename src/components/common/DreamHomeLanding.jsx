import React, { useState } from 'react';

const DreamHomeLanding = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Handle form submission here
        alert('Thank you for your interest! We will contact you soon.');
    };

    return (
        <div className=" overflow-hidden">


            <div className="relative z-10  bg-blue-700 rounded-2xl container mx-auto px-14 py-12">
                <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen">

                    {/* Left Side - Building Image */}
                    <div className="lg:w-1/2 mb-12 lg:mb-0 relative">
                        <div className="relative transform hover:scale-105 transition-transform duration-700 ease-out">
      

                            <div className="relative rounded-3xl p-8  transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                                <img src="https://png.pngtree.com/png-vector/20250623/ourmid/pngtree-modern-two-story-house-exterior-night-lighting-png-image_16576868.png" alt="" />

                            </div>
                        </div>
                    </div>

                    {/* Right Side - Content and Form */}
                    <div className="lg:w-1/2 lg:pl-16 text-white">

                        {/* Header */}
                        <div className="mb-12 transform translate-y-0 opacity-100 transition-all duration-1000 ease-out">
                            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                Are you looking for a{' '}
                                <span className="bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent animate-pulse">
                                    dream home?
                                </span>
                            </h1>
                            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                                We can help you realize your dream of a new home
                            </p>
                        </div>

                        {/* Contact Form */}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="group">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300 hover:bg-white/15"
                                        required
                                    />
                                </div>

                                <div className="group">
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone Number"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300 hover:bg-white/15"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email Address"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300 hover:bg-white/15"
                                    required
                                />
                            </div>

                            <div className="group">
                                <textarea
                                    name="message"
                                    placeholder="What are you looking for"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300 hover:bg-white/15 resize-none"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="group relative px-12 py-4 bg-gradient-to-r from-green-400 to-green-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-300 overflow-hidden"
                            >
                                <span className="relative z-10">Submit</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
                </div>
            </div>
        </div>
    );
};

export default DreamHomeLanding;