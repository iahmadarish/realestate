import React from 'react';
import { motion } from 'framer-motion';
import propertyData from '../../data/property';
import { useNavigate } from 'react-router-dom';

const PropertyListing = () => {
  const navigate = useNavigate();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -5,
      boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
      transition: { duration: 0.2 }
    }
  };

  const formatPrice = (price, currency) => {
    return new Intl.NumberFormat('en-CA', {
      style: 'currency',
      currency: currency
    }).format(price);
  };

  const truncateTitle = (title) => {
    return title.length > 25 ? `${title.substring(0, 35)}...` : title;
  };

  const handleViewDetails = (slug) => {
    navigate(`/property/${slug}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12  sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 font-comfortaa"
        >
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Featured Properties
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Discover your perfect home from our curated collection
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 font-exo"
        >
          {propertyData.map((property) => (
            <motion.div
              key={property.slug}
              variants={cardVariants}
              whileHover="hover"
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative h-44 sm:h-58 overflow-hidden group">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={property.images[0]}
                  alt={property.propertyTitle}
                />
                {property.isFeatured && (
                  <div className="absolute top-4 right-4 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    Featured
                  </div>
                )}
                <div className={`absolute bottom-4 left-4 text-white text-sm font-medium px-3 py-1 rounded ${property.status === 'For Sale' ? 'bg-green-600' : 'bg-blue-600'
                  }`}>
                  {property.status}
                </div>
              </div>

              <div className="p-6">
                <div className="sm:flex space-y-4 gap-x-4 justify-between items-start mb-3">
                  <div>
                    <h2 className="sm:text-lg text-sm font-semibold font-family-heading text-black mb-1" title={property.propertyTitle}>
                      {truncateTitle(property.propertyTitle)}
                    </h2>
                    <div className="flex items-center text-gray-500 text-sm">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span className='font-family-small text-xs'>
                        {property.propertyLocation.city}, {property.propertyLocation.area}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm font-bold text-indigo-600 whitespace-nowrap">
                    {formatPrice(property.propertyDetails.price, property.propertyDetails.currency)}
                  </p>
                </div>

                {/* responsive designing for mobile phone. blocking content for desktop and hidden form mobile phonede */}
                <div className="sm:block hidden">
                  <div className="flex justify-between text-sm text-gray-500 mb-4 border-b border-gray-100 pb-4">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                          />
                        </svg>
                        {property.propertySpecification.bedrooms}
                      </span>
                      <span className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        {property.propertySpecification.bathrooms}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                        />
                      </svg>
                      <span>{property.propertyDetails.propertySize} {property.propertyDetails.propertySizeUnit}</span>
                    </div>
                  </div>
                </div>

                {/* responsive designing for mobile phone. blocking content for desktop and hidden form mobile phonede */}
                <div className="sm:block hidden">
                  <div className="flex flex-wrap gap-2 mb-5">
                    {property.propertyAmenities.slice(0, 3).map((amenity) => (
                      <span
                        key={amenity}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
                      >
                        {amenity}
                      </span>
                    ))}
                    {property.propertyAmenities.length > 3 && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        +{property.propertyAmenities.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
                
                <motion.button
                  whileHover={{
                    scale: 1.03,
                    backgroundColor: "#4f46e5" // darker indigo-600
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 shadow hover:shadow-md"
                  onClick={() => handleViewDetails(property.slug)}
                >
                  View Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PropertyListing;