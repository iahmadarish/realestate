"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useParams, useNavigate } from "react-router-dom"
import propertyData from "../../data/property"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


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
  Star,
  Bed,
  Bath,
  Car,
  Calendar,
  Play,
  ChevronRight,
  Home,
  Wifi,
  Shield,
  Zap,
} from "lucide-react"
import SimilarProperties from "@/components/property/SimilarProperties"
import ScrollToTop from "@/components/ScrollToTop"

const PropertyDetails = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const property = propertyData.find((p) => p.slug === slug)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [isLiked, setIsLiked] = useState(false)
  const [activeTab, setActiveTab] = useState("overview")

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!property) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50"
      >
        <div className="text-center p-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl"
          >
            <Home className="w-10 h-10 text-white" />
          </motion.div>
          <h1 className="text-3xl font-bold text-gray-800 mb-3">Property not found</h1>
          <p className="text-gray-600 mb-8 max-w-md">
            The property you're looking for doesn't exist or has been removed.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/")}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Back to Listings
          </motion.button>
        </div>
      </motion.div>
    )
  }

  const formatPrice = (price, currency) => {
    return new Intl.NumberFormat("en-CA", {
      style: "currency",
      currency: currency,
    }).format(price)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === property.images.length - 1 ? 0 : prev + 1))
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? property.images.length - 1 : prev - 1))
  }

  function getYoutubeVideoId(url) {
    const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)
    return match && match[2].length === 11 ? match[2] : null
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50"
    >
      <ScrollToTop />

      {/* Enhanced Floating Header */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrollY > 100
          ? "bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-100"
          : "bg-transparent pointer-events-none"
          }`}
        style={{
          transform: `translateY(${scrollY > 100 ? "0" : "-20px"})`,
          opacity: scrollY > 100 ? 1 : 0,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <motion.button
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate(-1)}
              className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-800 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100 transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              <span className="font-medium">Back</span>
            </motion.button>

            <div className="flex items-center space-x-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsLiked(!isLiked)}
                className="p-3 rounded-xl bg-white/90 backdrop-blur-sm shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <Heart className={`w-5 h-5 ${isLiked ? "text-red-500 fill-current" : "text-gray-600"}`} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-xl bg-white/90 backdrop-blur-sm shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <Share2 className="w-5 h-5 text-gray-600" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Hero Section with Enhanced Image Gallery */}
      <motion.section
        variants={itemVariants}
        className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] xl:h-[80vh] overflow-hidden"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative w-full h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <img
                src={property.images[currentImageIndex] || "/placeholder.svg"}
                alt={property.propertyTitle}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </motion.div>
          </AnimatePresence>

          {/* Enhanced Navigation Buttons */}
          <motion.button
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevImage}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 shadow-xl border border-white/20"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextImage}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 sm:w-14  sm:h-14  bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 shadow-xl border border-white/20"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>

          {/* Enhanced Image Indicators */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-black/20 backdrop-blur-md rounded-full px-4 py-2">
            {property.images.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentImageIndex ? "bg-white w-8" : "bg-white/50"
                  }`}
              />
            ))}
          </div>

          {/* Enhanced Status Badges */}
          <div className="absolute top-6 left-6 flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
            {property.isFeatured && (
              <motion.span
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                className="bg-gradient-to-r from-blue-400 to-indigo-500 text-white text-xs sm:text-sm sm:font-bold px-4 py-2 rounded-lg shadow-xl border-2 border-white/20"
              >
                ✨ Featured
              </motion.span>
            )}
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="bg-white/95 backdrop-blur-sm text-gray-800 text-xs sm:text-sm font-semibold px-4 py-2 rounded-lg shadow-xl border border-white/20"
            >
              {property.status}
            </motion.span>
          </div>

          {/* Enhanced Floating Actions */}
          <div className="absolute top-6 right-6 flex flex-row sm:flex-col space-x-2 sm:space-x-0 sm:space-y-3">
            <motion.button
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsLiked(!isLiked)}
              className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-xl border border-white/20 hover:bg-white/30 transition-all duration-300"
            >
              <Heart className={`w-6 h-6 ${isLiked ? "text-red-500 fill-current" : "text-white"}`} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-xl border border-white/20 hover:bg-white/30 transition-all duration-300"
            >
              <Share2 className="w-6 h-6 text-white" />
            </motion.button>
          </div>

          {/* Price Overlay */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md rounded px-3 sm:px-6 py-2 sm:py-4 shadow-2xl border border-white/20"
          >
            <div className="text-right">
              <div className="text-sm sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {formatPrice(property.propertyDetails.price, property.propertyDetails.currency)}
              </div>
              <div className="sm:text-sm text-xs text-gray-600 font-medium">Starting Price</div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content with Enhanced Layout */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          {/* Main Content - Enhanced */}
          <div className="xl:col-span-3 space-y-2">
            {/* Property Header with Tabs */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-3xl  border border-gray-100 overflow-hidden"
            >
              {/* Header Content */}
              <div className="p-1 sm:p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-1 sm:mb-8">
                  <div className="flex-1">
                    <h1 className="text-lg font-nunito sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                      {property.propertyTitle}
                    </h1>
                    <div className="flex items-center text-gray-600 mb-6">
                      <MapPin className="w-5 h-5 mr-3 text-blue-500" />
                      <span className="sm:text-lg text-sm">
                        {property.propertyLocation.address}, {property.propertyLocation.city},{" "}
                        {property.propertyLocation.country}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                      <div className="flex items-center bg-gray-50 px-3 py-2 rounded-full">
                        <Eye className="w-4 h-4 mr-2 text-blue-500" />
                        <span className="sm:font-medium">{property.views || 0} views</span>
                      </div>
                      <div className="flex items-center bg-gray-50 px-3 py-2 rounded-full">
                        <Star className="w-4 h-4 mr-2 text-yellow-400 fill-current" />
                        <span className="font-medium">4.9 (23 reviews)</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Key Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-6">
                  {[
                    {
                      icon: Bed,
                      value: property.propertySpecification.bedrooms,
                      label: "Bedrooms",
                      color: "from-blue-500 to-cyan-500",
                    },
                    {
                      icon: Bath,
                      value: property.propertySpecification.bathrooms,
                      label: "Bathrooms",
                      color: "from-purple-500 to-pink-500",
                    },
                    {
                      icon: Square,
                      value: property.propertyDetails.propertySize,
                      label: property.propertyDetails.propertySizeUnit,
                      color: "from-green-500 to-emerald-500",
                    },
                    {
                      icon: Calendar,
                      value: property.propertyDetails.yearBuilt,
                      label: "Year Built",
                      color: "from-orange-500 to-red-500",
                    },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="text-center p-4 sm:p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl hover:shadow-lg transition-all duration-300"
                    >
                      <div
                        className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg`}
                      >
                        <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                      <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                      <div className="text-xs sm:text-sm text-gray-600 font-medium">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Tab Navigation */}
              <div className="border-t border-gray-100">
                <div className="flex overflow-x-auto">
                  {[
                    { id: "overview", label: "Overview" },
                    { id: "amenities", label: "Amenities" },
                    { id: "location", label: "Location" },
                    { id: "media", label: "Media" },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-6 py-4 text-sm font-semibold whitespace-nowrap transition-all duration-300 border-b-2 ${activeTab === tab.id
                        ? "text-blue-600 border-blue-600 bg-blue-50"
                        : "text-gray-600 border-transparent hover:text-gray-800 hover:bg-gray-50"
                        }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              {activeTab === "overview" && (
                <>
                  <motion.div
                    key="overview"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="bg-white rounded-xl shadow-xl border border-gray-100 p-2 sm:p-8"
                  >
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <Home className="w-6 h-6 mr-3 text-blue-500" />
                      About This Property
                    </h2>
                    <div className="prose prose-lg max-w-none">
                      <p className="text-gray-700 leading-relaxed sm:text-lg text-xs">{property.propertyDescription}</p>
                    </div>
                  </motion.div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {property.galarry.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={`Gallery Image ${index + 1}`}
                        className="w-full h-40 object-cover rounded-xl shadow"
                      />
                    ))}
                  </div>
                </>

              )}

              {activeTab === "amenities" && (
                <motion.div
                  key="amenities"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-white rounded shadow-xl border border-gray-100 p-2 sm:p-8"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500" />
                    Amenities & Features
                  </h2>

                  {/* Desktop Grid View */}
                  <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {property.propertyAmenities.map((amenity, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-center p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl hover:from-blue-50 hover:to-purple-50 transition-all duration-300 group"
                      >
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-gray-700 font-medium">{amenity}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Mobile Swiper View */}
                  <div className="sm:hidden">
                    <Swiper
                      slidesPerView={2}
                      spaceBetween={14}
                      pagination={{
                        clickable: true,
                      }}
                      modules={[Pagination]}
                      className="amenities-swiper"
                    >
                      {[...Array(Math.ceil(property.propertyAmenities.length / 2))].map((_, slideIndex) => (
                        <SwiperSlide key={slideIndex}>
                          <div className="grid grid-cols-1 gap-4 p-2">
                            {property.propertyAmenities
                              .slice(slideIndex * 2, (slideIndex + 1) * 2)
                              .map((amenity, index) => (
                                <motion.div
                                  key={index}
                                  initial={{ opacity: 0, scale: 0.9 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: index * 0.05 }}
                                  className="flex items-center p-2  rounded-xl hover:from-blue-50 hover:to-purple-50 transition-all duration-300 group"
                                >
                                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-2 group-hover:scale-110 transition-transform duration-300">
                                    <CheckCircle className="w-4 h-4 text-white" />
                                  </div>
                                  <span className="text-xs text-gray-700 font-medium">{amenity}</span>
                                </motion.div>
                              ))}
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </motion.div>
              )}

              {activeTab === "location" && (
                <motion.div
                  key="location"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-8"
                >
                  {/* Map */}
                  {property.map?.googleMap && (
                    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                      <div className="p-6 sm:p-8 border-b border-gray-100">
                        <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                          <MapPin className="w-6 h-6 mr-3 text-red-500" />
                          Property Location
                        </h3>
                      </div>
                      <div className="h-96 sm:h-[500px]">
                        <iframe
                          src={property.map.googleMap}
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen=""
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        />
                      </div>
                    </div>
                  )}

                  {/* What's Nearby */}
                  <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-4 sm:p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8">What's Nearby</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {property.whatsNearby.map((place, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="group cursor-pointer"
                        >
                          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl sm:p-6 hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                            <div className="w-full h-32 bg-gray-200 rounded-xl mb-4 overflow-hidden">
                              <img
                                src={place.image || "/placeholder.svg"}
                                alt={place.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              />
                            </div>
                            <h4 className="font-bold text-gray-900 mb-2">{place.name}</h4>
                            <p className="text-sm text-gray-600">{place.type}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "media" && (
                <motion.div
                  key="media"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-8"
                >
                  {/* Video */}
                  {property.video?.youtube && (
                    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                      <div className="p-6 sm:p-8 border-b border-gray-100">
                        <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                          <Play className="w-6 h-6 mr-3 text-red-500" />
                          Property Video Tour
                        </h3>
                      </div>
                      <div className="aspect-video">
                        <iframe
                          width="100%"
                          height="100%"
                          src={`https://www.youtube.com/embed/${getYoutubeVideoId(property.video.youtube)}`}
                          title="Property Video Tour"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    </div>
                  )}

                  {/* Floor Plan */}
                  {property.floorPlan && (
                    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">Floor Plan</h3>
                      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6">
                        <img
                          className="w-full h-auto max-h-96 object-contain rounded-xl shadow-lg"
                          src={property.floorPlan.image || "/placeholder.svg"}
                          alt="Floor plan"
                        />
                        <p className="mt-6 text-gray-600 text-center">{property.floorPlan.description}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Enhanced Sidebar */}
          <div className="xl:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Contact Card */}
              <motion.div
                variants={itemVariants}
                className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 overflow-hidden relative"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full -translate-y-16 translate-x-16" />

                <div className="text-center mb-8 relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                    <img
                      className="w-full h-full rounded-2xl object-cover"
                      src="https://www.hollywoodreporter.com/wp-content/uploads/2023/03/Drew-Barrymore-Headshot-Publicity-H-2023.jpg?w=200&h=200&crop=1"
                      alt="Agent"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Sarah Johnson</h3>
                  <p className="text-gray-600 mb-1">Licensed Real Estate Agent</p>
                  <div className="flex items-center justify-center text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">(4.9)</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center shadow-xl hover:shadow-2xl"
                  >
                    <Phone className="w-5 h-5 mr-3" />
                    Call Now
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-white border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-700 font-semibold py-4 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center"
                  >
                    <Mail className="w-5 h-5 mr-3" />
                    Send Message
                  </motion.button>
                </div>
              </motion.div>

              {/* Property Details */}
              <motion.div variants={itemVariants} className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Shield className="w-5 h-5 mr-3 text-green-500" />
                  Property Details
                </h3>
                <div className="space-y-4">
                  {[
                    { label: "Property ID", value: property.propertyDetails.customId },
                    { label: "Type", value: "Luxury Condo" },
                    { label: "Floor", value: property.propertySpecification.floor },
                    { label: "Parking", value: `${property.propertyDetails.garageSize} spaces` },
                  ].map((detail, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0"
                    >
                      <span className="text-gray-600 font-medium">{detail.label}</span>
                      <span className="font-semibold text-gray-900">{detail.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Quick Features */}
              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl border border-blue-100 p-6"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Zap className="w-5 h-5 mr-3 text-yellow-500" />
                  Quick Features
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Wifi, label: "High-Speed WiFi" },
                    { icon: Shield, label: "24/7 Security" },
                    { icon: Car, label: "Valet Parking" },
                    { icon: Home, label: "Smart Home" },
                  ].map((feature, index) => (
                    <div key={index} className="text-center p-3 bg-white rounded-xl shadow-sm">
                      <feature.icon className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                      <span className="text-xs font-medium text-gray-700">{feature.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <SimilarProperties />
    </motion.div>
  )
}

export default PropertyDetails
