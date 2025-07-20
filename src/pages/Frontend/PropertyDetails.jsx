import React from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import propertyData from '../../data/property';

const PropertyDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const property = propertyData.find(p => p.slug === slug);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">Property not found</h1>
          <button 
            onClick={() => navigate('/')}
            className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            Back to Listings
          </button>
        </div>
      </div>
    );
  }

  const formatPrice = (price, currency) => {
    return new Intl.NumberFormat('en-CA', {
      style: 'currency',
      currency: currency
    }).format(price);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-indigo-600 hover:text-indigo-800 mb-8"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Listings
        </button>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl shadow-md overflow-hidden"
        >
          {/* Image Gallery */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="h-96">
                <img
                  className="w-full h-full object-cover"
                  src={property.images[0]}
                  alt={property.propertyTitle}
                />
              </div>
              <div className="grid grid-cols-2 gap-0">
                {property.images.slice(1, 3).map((img, index) => (
                  <div key={index} className="h-48">
                    <img
                      className="w-full h-full object-cover"
                      src={img}
                      alt={`${property.propertyTitle} ${index + 1}`}
                    />
                  </div>
                ))}
                {property.images.length > 3 && (
                  <div className="relative h-48 bg-gray-100 flex items-center justify-center">
                    <span className="text-gray-500 font-medium">
                      +{property.images.length - 3} more
                    </span>
                  </div>
                )}
              </div>
            </div>
            <div className="absolute top-4 right-4 flex space-x-2">
              {property.isFeatured && (
                <span className="bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                  Featured
                </span>
              )}
              <span className="bg-white text-gray-800 text-sm font-medium px-2 py-1 rounded">
                {property.status}
              </span>
            </div>
          </div>

          {/* Property Content */}
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  {property.propertyTitle}
                </h1>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>
                    {property.propertyLocation.address}, {property.propertyLocation.city}, {property.propertyLocation.country}
                  </span>
                </div>
              </div>
              <div className="text-2xl font-bold text-indigo-600 mb-4 md:mb-0">
                {formatPrice(property.propertyDetails.price, property.propertyDetails.currency)}
              </div>
            </div>

            {/* Key Details */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8 border-t border-b border-gray-200 py-6">
              <div className="text-center">
                <div className="text-gray-500 text-sm">Bedrooms</div>
                <div className="text-xl font-semibold">{property.propertySpecification.bedrooms}</div>
              </div>
              <div className="text-center">
                <div className="text-gray-500 text-sm">Bathrooms</div>
                <div className="text-xl font-semibold">{property.propertySpecification.bathrooms}</div>
              </div>
              <div className="text-center">
                <div className="text-gray-500 text-sm">Area</div>
                <div className="text-xl font-semibold">
                  {property.propertyDetails.propertySize} {property.propertyDetails.propertySizeUnit}
                </div>
              </div>
              <div className="text-center">
                <div className="text-gray-500 text-sm">Year Built</div>
                <div className="text-xl font-semibold">{property.propertyDetails.yearBuilt}</div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Description</h2>
              <p className="text-gray-700 leading-relaxed">
                {property.propertyDescription}
              </p>
            </div>

            {/* Amenities */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Amenities</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {property.propertyAmenities.map((amenity, index) => (
                  <div key={index} className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floor Plan */}
            {property.floorPlan && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Floor Plan</h2>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <img
                    className="w-full h-auto max-h-96 object-contain"
                    src={property.floorPlan.image}
                    alt="Floor plan"
                  />
                  <p className="mt-2 text-gray-600">{property.floorPlan.description}</p>
                </div>
              </div>
            )}

            {/* Nearby Places */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">What's Nearby</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {property.whatsNearby.map((place, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium text-gray-900">{place.name}</h3>
                    <p className="text-sm text-gray-500">{place.type}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg text-lg transition duration-150"
            >
              Contact Agent
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PropertyDetails;