import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import propertyData from '../../data/property';
import { 
  ChevronLeft, 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  Calendar, 
  CheckCircle, 
  Eye,
  Heart,
  Share2,
  Phone,
  Mail,
  Star,
  Play
} from 'lucide-react';

const PropertyDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const property = propertyData.find(p => p.slug === slug);
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  // Smooth scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!property) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="min-h-screen flex items-center justify-center bg-white"
      >
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <div className="w-8 h-8 bg-gray-400 rounded"></div>
          </motion.div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Property not found</h1>
          <p className="text-gray-600 mb-6">The property you're looking for doesn't exist.</p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Back to Listings
          </motion.button>
        </div>
      </motion.div>
    );
  }

  const formatPrice = (price, currency) => {
    return new Intl.NumberFormat('en-CA', {
      style: 'currency',
      currency: currency
    }).format(price);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-white"
    >
      {/* Floating Header */}
      <motion.header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrollY > 100 
            ? 'bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-100' 
            : 'bg-transparent'
        }`}
        style={{ 
          transform: `translateY(${scrollY > 100 ? '0' : '-20px'})`,
          opacity: scrollY > 100 ? 1 : 0
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate(-1)}
              className="flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-300"
            >
              <ChevronLeft className="w-5 h-5 mr-1" />
              Back
            </motion.button>
            <div className="flex items-center space-x-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsLiked(!isLiked)}
                className="p-2 rounded-full bg-white shadow-md border border-gray-100"
              >
                <Heart className={`w-5 h-5 ${isLiked ? 'text-red-500 fill-current' : 'text-gray-600'}`} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full bg-white shadow-md border border-gray-100"
              >
                <Share2 className="w-5 h-5 text-gray-600" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      <div className="relative">
        {/* Hero Section with Image Gallery */}
        <motion.section variants={itemVariants} className="relative h-[70vh] overflow-hidden">
          <div className="relative w-full h-full">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={property.images[currentImageIndex]}
                alt={property.propertyTitle}
                className="w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              />
            </AnimatePresence>
            
            {/* Image Navigation */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/30 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/30 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6 rotate-180" />
            </button>

            {/* Image Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {property.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentImageIndex ? 'bg-white w-8' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>

            {/* Property Status Badge */}
            <div className="absolute top-6 left-6 flex items-center space-x-3">
              {property.isFeatured && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg"
                >
                  ✨ Featured
                </motion.span>
              )}
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="bg-white/90 backdrop-blur-sm text-gray-800 text-sm font-medium px-3 py-1 rounded-full shadow-lg border border-white/20"
              >
                {property.status}
              </motion.span>
            </div>

            {/* Floating Action Buttons */}
            <div className="absolute top-6 right-6 flex flex-col space-y-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsLiked(!isLiked)}
                className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg border border-white/20"
              >
                <Heart className={`w-6 h-6 ${isLiked ? 'text-red-500 fill-current' : 'text-gray-600'}`} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg border border-white/20"
              >
                <Share2 className="w-6 h-6 text-gray-600" />
              </motion.button>
            </div>
          </div>
        </motion.section>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Property Header */}
              <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-3 leading-tight">
                      {property.propertyTitle}
                    </h1>
                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin className="w-5 h-5 mr-2 text-gray-400" />
                      <span className="text-lg">
                        {property.propertyLocation.address}, {property.propertyLocation.city}, {property.propertyLocation.country}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        <span>{property.views || 0} views</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 mr-1 text-yellow-400 fill-current" />
                        <span>4.9 (23 reviews)</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                      {formatPrice(property.propertyDetails.price, property.propertyDetails.currency)}
                    </div>
                  </div>
                </div>

                {/* Key Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-gray-50 rounded-xl">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Bed className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{property.propertySpecification.bedrooms}</div>
                    <div className="text-sm text-gray-600">Bedrooms</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Bath className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{property.propertySpecification.bathrooms}</div>
                    <div className="text-sm text-gray-600">Bathrooms</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Square className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">
                      {property.propertyDetails.propertySize}
                    </div>
                    <div className="text-sm text-gray-600">{property.propertyDetails.propertySizeUnit}</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Calendar className="w-6 h-6 text-orange-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{property.propertyDetails.yearBuilt}</div>
                    <div className="text-sm text-gray-600">Year Built</div>
                  </div>
                </div>
              </motion.div>

              {/* Description */}
              <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Property</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {property.propertyDescription}
                </p>
              </motion.div>

              {/* Amenities */}
              <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Amenities & Features</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {property.propertyAmenities.map((amenity, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200"
                    >
                      <CheckCircle className="w-5 h-5 mr-3 text-green-500" />
                      <span className="text-gray-700 font-medium">{amenity}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Floor Plan */}
              {property.floorPlan && (
                <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Floor Plan</h2>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <img
                      className="w-full h-auto max-h-96 object-contain rounded-lg"
                      src={property.floorPlan.image}
                      alt="Floor plan"
                    />
                    <p className="mt-4 text-gray-600">{property.floorPlan.description}</p>
                  </div>
                </motion.div>
              )}

              {/* What's Nearby */}
              <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">What's Nearby</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {property.whatsNearby.map((place, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition-colors duration-200"
                    >
                      <h3 className="font-semibold text-gray-900 mb-1">{place.name}</h3>
                      <p className="text-sm text-gray-600">{place.type}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Contact Card */}
                <motion.div 
                  variants={itemVariants}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6"
                >
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="w-8 h-8 bg-white rounded text-blue-600 flex items-center justify-center">
                        <Phone className="w-4 h-4" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Ready to Visit?</h3>
                    <p className="text-gray-600">Schedule a viewing today</p>
                  </div>
                  
                  <div className="space-y-3">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Contact Agent
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-700 font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center"
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      Send Message
                    </motion.button>
                  </div>
                </motion.div>

                {/* Property Info */}
                <motion.div 
                  variants={itemVariants}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Property Details</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Property ID</span>
                      <span className="font-medium text-gray-900">{property.propertyDetails.customId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Type</span>
                      <span className="font-medium text-gray-900">Condo</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Floor</span>
                      <span className="font-medium text-gray-900">{property.propertySpecification.floor}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Parking</span>
                      <span className="font-medium text-gray-900">{property.propertyDetails.garageSize}</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyDetails;