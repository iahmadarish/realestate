"use client"

import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode, Mousewheel } from "swiper/modules"
import "swiper/css"
import "swiper/css/free-mode"
import property from "../../data/property"

const FeaturedProperties = () => {
  // Filter only featured properties
  const featuredProperties = property.filter((prop) => prop.isFeatured)

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

  return (
    <motion.section
      className="py-16 px-4 bg-white"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div className="mb-12" variants={headerVariants}>
          <motion.p
            className="text-gray-500 text-sm font-medium tracking-wider uppercase mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            EXCLUSIVE LISTINGS
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Featured Properties
          </motion.h2>
        </motion.div>

        {/* Properties Swiper */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }}>
          <Swiper
            modules={[FreeMode, Mousewheel]}
            spaceBetween={24}
            slidesPerView="auto"
            freeMode={true}
            mousewheel={{
              forceToAxis: true,
              sensitivity: 1,
              releaseOnEdges: true,
            }}
            grabCursor={true}
            className="!overflow-visible"
            breakpoints={{
              320: {
                slidesPerView: 1.2,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 2.2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3.2,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 3.5,
                spaceBetween: 24,
              },
            }}
          >
            {featuredProperties.map((property, index) => (
              <SwiperSlide key={property.propertyDetails.propertyId} className="!w-auto">
                <motion.div
                  className="w-80 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                  variants={cardVariants}
                  whileHover={{
                    y: -8,
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
                    className="relative h-64 overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <img
                      src={property.images[0] || "/placeholder.svg"}
                      alt={property.propertyTitle}
                      className="w-full h-full object-cover"
                    />

                    {/* Status Badge */}
                    <div className="absolute top-4 left-4">
                      <span
                        className={`px-3 py-1 text-xs font-semibold rounded-full ${
                          property.status === "For Sale" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {property.status}
                      </span>
                    </div>

                    {/* Price Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="bg-black/70 text-white px-3 py-1 text-sm font-bold rounded-lg">
                        {formatPrice(property.propertyDetails.price, property.propertyDetails.currency)}
                      </span>
                    </div>

                    <motion.div
                      className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-all duration-300"
                      whileHover={{ opacity: 1 }}
                    />
                  </motion.div>

                  {/* Property Info */}
                  <motion.div
                    className="p-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.7 }}
                  >
                    <motion.h3
                      className="text-lg font-bold text-gray-900 mb-2 line-clamp-2"
                      whileHover={{ color: "#3B82F6" }}
                      transition={{ duration: 0.2 }}
                    >
                      {property.propertyTitle}
                    </motion.h3>

                    <motion.p
                      className="text-gray-600 text-sm mb-3"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.8 }}
                    >
                      {property.propertyLocation.address}, {property.propertyLocation.city}
                    </motion.p>

                    {/* Property Details */}
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-4">
                        <span>{property.propertySpecification.bedrooms} bed</span>
                        <span>{property.propertySpecification.bathrooms} bath</span>
                        <span>
                          {property.propertyDetails.propertySize} {property.propertyDetails.propertySizeUnit}
                        </span>
                      </div>
                    </div>
                  </motion.div>
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
