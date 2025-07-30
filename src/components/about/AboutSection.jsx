
import image from "@/assets/property/Background (2).png"
import image1 from "@/assets/property/Background (3).png"
import image2 from "@/assets/property/Background (4).png"

import { motion } from "framer-motion"

const AboutSection = () => {
  const stats = [
    {
      number: "95%",
      label: "Customer Satisfaction",
    },
    {
      number: "50+",
      label: "Real Estate Partners",
    },
    {
      number: "20+",
      label: "Years of Experience",
    },
  ]

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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
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
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <motion.div className="space-y-12" variants={itemVariants}>
            {/* Title */}
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              About us
            </motion.h2>

            {/* Feature 1 - Image Left, Text Right */}
            <motion.div
              className="flex items-start space-x-2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {/* Feature Image */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-gray-100 rounded-2xl overflow-hidden">
                  <img
                    src={image}
                    alt="House on coins"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Feature Content */}
              <div className="flex-1">
                <h3 className="sm:text-xl text-lg font-bold text-gray-900 mb-3">Advanced Property Search</h3>
                <p className="text-gray-600 sm:leading-relaxed sm:text-lg text-sm">
                  Easily find properties based on location, price, size, and amenities with our intuitive search
                  filters.
                </p>
              </div>
            </motion.div>

            {/* Feature 2 - Text Left, Image Right */}
            <motion.div
              className="flex items-start space-x-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {/* Feature Content */}
              <div className="flex-1">
                <h3 className="sm:text-xl text-lg font-bold text-gray-900 mb-3">Real-Time Market Insights</h3>
                <p className="text-gray-600 leading-relaxed sm:text-lg text-sm">
                  Get up-to-date market trends, property values, and investment insights to make informed decisions.
                </p>
              </div>

              {/* Feature Image */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-gray-100 rounded-2xl overflow-hidden">
                  <img
                    src={image2}
                    alt="Market charts and documents"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image with Stats */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {/* Main House Image */}
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src={image2}
                alt="Modern house with outdoor seating"
                className="w-full sm:h-[500px] sm:object-cover"
              />
            </div>

            {/* Statistics Overlay - Bottom Right */}
            <motion.div
              className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl sm:p-6 p-2 shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="sm:block  grid grid-cols-1 gap-2 sm:gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.8, duration: 0.5, type: "spring" }}
                  >
                    <div className="sm:text-2xl text-xs md:text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                    <p className="text-xs text-gray-600 font-medium whitespace-nowrap">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default AboutSection
