import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import propertyData from '../../data/property';
import {
  ChevronLeft,
  MapPin,
  Square,
  CheckCircle,
  Eye,
  Heart,
  Share2,
  Phone,
  Mail,
  Star} from 'lucide-react';
import SimilarProperties from '@/components/property/SimilarProperties';
import ScrollToTop from '@/components/ScrollToTop';

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

  function getYoutubeVideoId(url) {
    const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-white"
    >
      <ScrollToTop/>
      {/* Floating Header */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrollY > 100
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
        <motion.section variants={itemVariants} className="relative md:lg:xl:2xl:sm:h-screen overflow-hidden">
          <div className="relative w-full h-full">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={property.images[currentImageIndex]}
                alt={property.propertyTitle}
                className="w-full h-full md:lg:xl:2xl:sm:object-cover object-contain"
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
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentImageIndex ? 'bg-white w-8' : 'bg-white/50'
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
            <div className="absolute top-6 right-6 flex gap-x-2 md:lg:xl:2xl:sm:flex-col space-y-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsLiked(!isLiked)}
                className="md:lg:xl:2xl:sm:w-12 w-10 h-10 md:lg:xl:2xl:sm:h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg border border-white/20"
              >
                <Heart className={`w-6 h-6 ${isLiked ? 'text-red-500 fill-current' : 'text-gray-600'}`} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="md:lg:xl:2xl:sm:w-12 w-10 h-10 md:lg:xl:2xl:sm:h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg border border-white/20"
              >
                <Share2 className="w-6 h-6 text-gray-600" />
              </motion.button>
            </div>
          </div>
        </motion.section>

        {/* Main Content */}
        <div className="container mx-auto font-family-heading px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Property Header */}
              <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-sm border border-gray-100 md:lg:xl:2xl:sm:p-8 p-4">
                <div className="md:lg:xl:2xl:sm:flex items-start justify-between mb-6">
                  <div>
                    <h1 className="md:lg:xl:2xl:sm:text-3xl text-xl font-family-heading  text-gray-900 mb-3 leading-tight">
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
                  <div className="md:lg:xl:2xl:sm:text-right md:lg:xl:2xl:sm:mt-0 mt-6">
                    <div className="md:lg:xl:2xl:sm:text-3xl text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                      {formatPrice(property.propertyDetails.price, property.propertyDetails.currency)}
                    </div>
                  </div>
                </div>

                {/* Key Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 md:lg:xl:2xl:sm:gap-6 gap-3 p-2 bg-gray-50 rounded-xl">
                  <div className="text-center">
                    <div className="w-18 h-18 border p-1 flex items-center justify-center mx-auto mb-3">
                      <img src="https://cdn3d.iconscout.com/3d/premium/thumb/living-room-3d-icon-download-in-png-blend-fbx-gltf-file-formats--house-home-furniture-isometric-pack-interiors-icons-5251967.png" alt="" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{property.propertySpecification.bedrooms}</div>
                    <div className="text-sm text-gray-600">Bedrooms</div>
                  </div>
                  <div className="text-center">
                    <div className="w-18 h-18 border p-1  flex items-center justify-center mx-auto mb-3">
                      <img src="https://media.cgtrader.com/variants/nnPx3prgD6rY1JLbh3cfhvo6/a26e47dab5f2d22c43d6c5ce4b4b46ecc30c70918878397cba1a10c1e35d7bfc/231023-washbasin-1.jpg" alt="" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{property.propertySpecification.bathrooms}</div>
                    <div className="text-sm text-gray-600">Bathrooms</div>
                  </div>
                  <div className="text-center">
                    <div className="w-18 h-18 border p-1 flex items-center justify-center mx-auto mb-3">
                      <Square className="w-12 h-12 text-purple-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">
                      {property.propertyDetails.propertySize}
                    </div>
                    <div className="text-sm text-gray-600">{property.propertyDetails.propertySizeUnit}</div>
                  </div>
                  <div className="text-center">
                    <div className="w-18 h-18 border p-1  flex items-center justify-center mx-auto mb-3">
                        <img src="https://png.pngtree.com/png-vector/20250429/ourmid/pngtree-3d-red-calendar-icon-with-time-showing-schedule-png-image_15963428.png" alt="" />
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
                      className="flex items-center md:lg:xl:2xl:sm:p-3 p-2 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors duration-200"
                    >
                      <CheckCircle className="w-5 h-5 mr-3 text-black" />
                      <span className="text-gray-700 md:lg:xl:2xl:sm:font-medium font-light text-sm">{amenity}</span>
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

              {/* Media section  */}
              {property.video?.youtube && (
                <div className="">
                  <h3 className="text-lg font-semibold mb-2">Property Video</h3>
                  <div className="aspect-video ">
                    <iframe
                      className='rounded-lg border-2 border-amber-400 px-4 py-4'
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${getYoutubeVideoId(property.video.youtube)}`}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              )}
              {/* Floor Plan / Map Section */}
              {property.map?.googleMap && (
                <div className="mt-6 ">
                  <h3 className="text-lg font-semibold mb-2">Property Location</h3>
                  <div className="w-full border-2 border-black/20 h-[400px] rounded-lg overflow-hidden shadow">
                    <iframe
                    className=''
                      src={property.map.googleMap}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
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
                      <img src={place.image} className='' alt="near by location of this place" />
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
                    <div className="w-26 h-26 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="   text-blue-600 flex items-center justify-center">
                        <img className='w-full h-full rounded-full' src="https://www.hollywoodreporter.com/wp-content/uploads/2023/03/Drew-Barrymore-Headshot-Publicity-H-2023.jpg?w=200&h=200&crop=1" alt="" />
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

        <SimilarProperties />
      </div>
    </motion.div>
  );
};

export default PropertyDetails;