import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeroSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 100], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 100 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section ref={sectionRef} className="relative font-exo bg-white min-h-screen flex items-center overflow-hidden">
      <motion.div 
        className="container mx-auto px-6 lg:px-16 md:py-20 py-10"
        style={{ y, opacity }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <motion.div className="space-y-8 z-10">
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.div 
                className="inline-block"
                initial={{ width: 0 }}
                animate={{ width: "60px" }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div className="h-1 bg-sky-500"></div>
              </motion.div>

              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight font-microma uppercase">
                Find Your dream                <span className="text-sky-500">home or properties</span>
              </h1>

              <p className="text-sm lg:text-xl text-gray-600 leading-relaxed max-w-lg">
                We provide a complete service for the sale, purchase or rental of real estate. 
                Discover your dream property with expert guidance.
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(14, 165, 233, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-sky-500 hover:bg-sky-600 text-white px-10 py-4 text-lg font-semibold rounded-xl shadow-lg transition-all duration-300"
              >
                CONTACT US
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-10 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
              >
                VIEW PROPERTIES
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200"
            >
              {[
                { number: "500+", label: "Properties" },
                { number: "98%", label: "Happy Clients" },
                { number: "15+", label: "Years Experience" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                >
                  <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            variants={imageVariants}
            className="relative lg:h-[600px] h-[400px]"
          >
            {/* Decorative Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="absolute -top-10 -right-10 w-40 h-40 bg-sky-100 rounded-full blur-3xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute -bottom-10 -left-10 w-60 h-60 bg-cyan-100 rounded-full blur-3xl"
            />

            {/* Main Image Container */}
            <motion.div 
              className="relative z-10 h-full"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/10 to-cyan-500/10 rounded-3xl"></div>
              <img
                src="https://www.rbhomesjaipur.com/assets/front/images/pngtree-real-estate-png-image_16490379.png"
                alt="Real Estate"
                className="w-full h-full object-contain relative z-10"
              />

              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute md:block hidden bottom-10 left-10 bg-white p-6 rounded-2xl shadow-2xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">5000+</div>
                    <div className="text-sm text-gray-600">Properties Listed</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 md:block hidden"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-sm text-gray-500">Scroll Down</span>
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;