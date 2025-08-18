"use client"

import { motion } from "framer-motion"
import { Bed, Bath, Square } from "lucide-react"
import property from "../../data/property"
import { Navigate, useNavigate } from "react-router-dom"

const SimilarProperties = () => {
  // Get first 3 properties for similar properties
  const similarProperties = property.slice(0, 3)
  const Navigate = useNavigate()

  // Format price function
  const formatPrice = (price, currency) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency === "CAD" ? "USD" : currency,
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
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }


  const handleViewDetails = (slug) => {
    Navigate(`/property/${slug}`);
  };


  return (
    <motion.section
      className="py-16 px-4 bg-white"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            className="text-gray-400 text-sm font-medium tracking-wider uppercase mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            RELATED
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Similar Properties
          </motion.h2>
        </motion.div>

        {/* Properties Grid */}
        <div
          className="grid lg:grid-cols-3 md:grid-cols-2 gap-8"
        >
          {similarProperties.map((property, index) => (
            <motion.div
              key={property.propertyDetails.propertyId}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              variants={cardVariants}
              onClick={() => handleViewDetails(property.slug)}

              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.2 + 0.4,
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
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full ${property.status === "For Sale" ? "bg-white text-gray-800" : "bg-white text-gray-800"
                      }`}
                  >
                    {property.status}
                  </span>
                </div>
              </motion.div>

              {/* Property Info */}
              <motion.div
                className="p-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.2 + 0.6 }}
              >
                {/* Property Name and Price */}
                <div className="mb-4">
                  <motion.h3
                    className="text-xl font-semibold text-gray-900 mb-1"
                    whileHover={{ color: "#3B82F6" }}
                    transition={{ duration: 0.2 }}
                  >
                    {property.propertyTitle.split(" – ")[0] || property.propertyTitle}
                  </motion.h3>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 text-sm">
                      {property.propertyLocation.area === "Lachine"
                        ? "Luxury Properties"
                        : property.propertyLocation.area === "Entertainment District"
                          ? "Luxury Properties"
                          : "Bungalow"}
                    </span>
                    <span className="text-xl font-light text-orange-500">
                      {formatPrice(property.propertyDetails.price, property.propertyDetails.currency)}
                    </span>
                  </div>
                </div>

                {/* Property Details */}
                <motion.div
                  className="flex items-center justify-between text-sm text-gray-600 pt-4 border-t border-gray-100"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 + 0.8 }}
                >
                  <div className="flex items-center space-x-1">
                    <Bed className="w-4 h-4" />
                    <span>{property.propertySpecification.bedrooms}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Bath className="w-4 h-4" />
                    <span>{property.propertySpecification.bathrooms}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Square className="w-4 h-4" />
                    <span>
                      {property.propertyDetails.propertySize} {property.propertyDetails.propertySizeUnit}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default SimilarProperties
