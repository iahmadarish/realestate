import React from 'react';
import { motion } from 'framer-motion';
import property from '../../data/property.js';
import { useNavigate } from "react-router-dom";

const FeaturedProjects = () => {
  // Filter only featured properties
  const featuredProperties = property.filter(prop => prop.isFeatured);
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.08,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const handleViewDetails = (slug) => {
    navigate(`/property/${slug}`);
  };

  // Project titles mapping
  const projectTitles = [
    "Waterfront Luxury Residences",
    "Downtown Commercial Tower",
    "Skyline Retreat",
    "Eco Residence"
  ];

  const projectDescriptions = [
    "This high-end residential development redefines waterfront living with its breathtaking views and exclusive amenities",
    "A state-of-the-art commercial tower designed for modern businesses, offering premium office spaces, sustainable features",
    "Indulge in panoramic cityscapes and sophisticated interiors in this high-rise masterpiece crafted for urban elegance.",
    "Discover a sustainable, energy-efficient home featuring modern design elements and green technologies for a refined lifestyle."
  ];

  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-[1400px] mx-auto">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          {/* Left Section - Title */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-3"
          >
            <div className="border-t-4 border-black pt-8">
              <h2 className="text-6xl font-bold text-gray-900 leading-tight mb-6">
                FEATURED<br />PROJECT
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                Our Featured Project section showcases our latest and most exceptional real estate developments.
              </p>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#1a1a1a" }}
                whileTap={{ scale: 0.98 }}
                className="bg-black text-white px-8 py-3.5 text-sm font-semibold tracking-wide uppercase transition-colors"
              >
                SEE ALL PROJECTS
              </motion.button>
            </div>
          </motion.div>

          {/* Right Section - First Two Projects */}
          <div className="lg:col-span-9">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {featuredProperties.slice(0, 2).map((prop, index) => (
                <motion.div
                  key={prop.slug}
                  variants={cardVariants}
                  className="group cursor-pointer"
                  onClick={() => handleViewDetails(prop.slug)}
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3] bg-gray-100">
                    <motion.img
                      variants={imageVariants}
                      whileHover="hover"
                      src={prop.images[0]}
                      alt={projectTitles[index]}
                      className="w-full h-full object-cover"
                    />
                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-3 px-2">
                    <motion.h3 
                      className="text-2xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors duration-300"
                    >
                      {projectTitles[index]}
                    </motion.h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {projectDescriptions[index]}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom Section - Last Two Projects */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {featuredProperties.slice(2, 4).map((prop, index) => (
            <motion.div
              key={prop.slug}
              variants={cardVariants}
              className="group cursor-pointer"
              onClick={() => handleViewDetails(prop.slug)}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3] bg-gray-100">
                <motion.img
                  variants={imageVariants}
                  whileHover="hover"
                  src={prop.images[0]}
                  alt={projectTitles[index + 2]}
                  className="w-full h-full object-cover"
                />
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                />
              </div>

              {/* Content */}
              <div className="space-y-3 px-2">
                <motion.h3 
                  className="text-2xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors duration-300"
                >
                  {projectTitles[index + 2]}
                </motion.h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {projectDescriptions[index + 2]}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturedProjects;