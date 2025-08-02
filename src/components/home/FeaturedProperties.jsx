"use client"

import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode, Mousewheel, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/free-mode"
import property from "../../data/property"
import { FaBed, FaBath, FaRulerCombined } from "react-icons/fa"
import { IoLocationSharp } from "react-icons/io5"
import { useNavigate } from "react-router-dom"

const FeaturedProperties = () => {
  // Filter only featured properties
  const featuredProperties = property.filter((prop) => prop.isFeatured)
  const navigate = useNavigate()
  // Format price function
  const formatPrice = (price, currency) => {
    return new Intl.NumberFormat("en-CA", {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
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

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  const handleViewDetails = (slug) => {
    navigate(`/property/${slug}`);
  };


  return (
    <motion.section
      className="py-16 px-4 sm:px-6 lg:px-8 overflow-x-hidden bg-white font-nunito"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div className="mb-12 text-center" variants={headerVariants}>
          <motion.p
            className="text-indigo-600 text-sm font-medium tracking-wider uppercase mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            EXCLUSIVE LISTINGS
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Featured Properties
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-indigo-600 mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          />
        </motion.div>

        {/* Properties Swiper */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative"
        >
          <Swiper
            modules={[FreeMode, Mousewheel, Autoplay]}
            spaceBetween={24}
            slidesPerView="auto"
            freeMode={true}
            mousewheel={{
              forceToAxis: true,
              sensitivity: 1,
              releaseOnEdges: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            grabCursor={true}
            className="!overflow-visible !pb-2"
            breakpoints={{
              320: {
                slidesPerView: 1.1,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 2.1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2.5,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3.1,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 3.5,
                spaceBetween: 24,
              },
            }}
          >
            {featuredProperties.map((property, index) => (
              <SwiperSlide key={property.propertyDetails.propertyId} className="!w-auto !h-auto">
                <motion.div
                  className="w-80 bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                  variants={cardVariants}
                  onClick={() => handleViewDetails(property.slug)}

                  whileHover={{
                    y: -8,
                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.1 + 0.5,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                >
                  {/* Property Image */}
                  <motion.div
                    className="relative h-64 overflow-hidden group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <img
                      src={property.images[0] || "/placeholder.svg"}
                      alt={property.propertyTitle}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Status Badge */}
                    <div className="absolute top-4 left-4">
                      <span
                        className={`px-3 py-1 text-xs font-semibold rounded-full shadow ${property.status === "For Sale"
                          ? "bg-green-100 text-green-800"
                          : "bg-blue-100 text-blue-800"
                          }`}
                      >
                        {property.status}
                      </span>
                    </div>

                    {/* Price Badge */}
                    <div className="absolute bottom-4 left-0 right-0 mx-4">
                      <span className="inline-block bg-white/90 text-gray-900 px-4 py-2 text-sm font-bold rounded-lg shadow">
                        {formatPrice(property.propertyDetails.price, property.propertyDetails.currency)}
                      </span>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </motion.div>

                  {/* Property Info */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1 hover:text-indigo-600 transition-colors">
                      {property.propertyTitle}
                    </h3>

                    <div className="flex items-center text-gray-600 text-sm mb-3">
                      <IoLocationSharp className="mr-1 text-indigo-500" />
                      <span className="line-clamp-1">
                        {property.propertyLocation.address}, {property.propertyLocation.city}
                      </span>
                    </div>

                    {/* Property Details */}
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <div className="flex items-center space-x-4 text-gray-500">
                        <span className="flex items-center text-sm">
                          <FaBed className="mr-1 text-indigo-500" />
                          {property.propertySpecification.bedrooms}
                        </span>
                        <span className="flex items-center text-sm">
                          <FaBath className="mr-1 text-indigo-500" />
                          {property.propertySpecification.bathrooms}
                        </span>
                        <span className="flex items-center text-sm">
                          <FaRulerCombined className="mr-1 text-indigo-500" />
                          {property.propertyDetails.propertySize}{property.propertyDetails.propertySizeUnit}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default FeaturedProperties