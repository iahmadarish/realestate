import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const TestimonialSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "First-Time Home Buyer",
      image: "https://greateralabamamlsimages.fnistools.com/images/uploads/agents/13768621/13768621.jpg",
      rating: 5,
      text: "Working with this team was incredible! They found us our dream home in just 3 weeks. Their expertise in the local market and dedication to understanding our needs made all the difference.",
      property: "Sold $450,000 Home in Downtown"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Property Investor",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      rating: 5,
      text: "Outstanding service from start to finish. They helped me secure multiple investment properties with excellent ROI potential. Their market analysis and negotiation skills are top-notch.",
      property: "Purchased 3 Investment Properties"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Luxury Home Seller",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      rating: 5,
      text: "Sold our luxury home 20% above asking price! Their marketing strategy and professional photography showcased our property beautifully. Highly recommend their services.",
      property: "Sold $1.2M Luxury Estate"
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Commercial Buyer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      rating: 5,
      text: "Exceptional expertise in commercial real estate. They guided us through complex negotiations and helped secure the perfect location for our business expansion.",
      property: "Acquired Commercial Space"
    },
    {
      id: 5,
      name: "Lisa Park",
      role: "Relocating Family",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
      rating: 5,
      text: "Moving across states was stressful, but this team made it seamless. They handled everything remotely and found us the perfect family home in our budget range.",
      property: "Relocated & Purchased Family Home"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const slideVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      x: -100,
      transition: { duration: 0.5, ease: "easeIn" }
    }
  };

  return (
    <section className="py-16 sm:px-4 bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
      >
        {/* Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.h2 
            className="text-2xl sm:text-5xl font-bold text-gray-900 mb-4"
            variants={itemVariants}
          >
            What Our Clients Say
          </motion.h2>
          <motion.p 
            className="sm:text-xl text-sm text-gray-600 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Don't just take our word for it. Here's what our satisfied clients have to say about their real estate journey with us.
          </motion.p>
        </motion.div>

        {/* Main Testimonial Slider */}
        <motion.div 
          className="relative bg-white rounded-3xl shadow-2xl overflow-hidden mb-12"
          variants={itemVariants}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="relative h-116 md:h-80">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className={`absolute inset-0 ${index === currentSlide ? 'z-10' : 'z-0'}`}
                variants={slideVariants}
                initial="hidden"
                animate={index === currentSlide ? "visible" : "hidden"}
                exit="exit"
              >
                <div className="flex flex-col md:flex-row h-full">
                  {/* Image Side */}
                  <div className="md:w-1/3 h-48 md:h-full relative overflow-hidden">
                    <div className="absolute inset-0  opacity-20 z-10"></div>
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 z-20">
                      <Quote className="w-8 h-8 text-white opacity-80" />
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="md:w-2/3 p-4 md:p-12 flex flex-col justify-center">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    <blockquote className="text-sm md:text-xl text-gray-700 mb-6 leading-relaxed">
                      "{testimonial.text}"
                    </blockquote>
                    
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-blue-600 font-medium mb-2">{testimonial.role}</p>
                      <p className="text-sm text-gray-500 bg-gray-100 inline-block px-3 py-1 rounded-full">
                        {testimonial.property}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <motion.button
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 z-20"
            onClick={prevSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </motion.button>
          
          <motion.button
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 z-20"
            onClick={nextSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </motion.button>
        </motion.div>

        {/* Dots Indicator */}
        <motion.div 
          className="flex justify-center space-x-3 mb-12"
          variants={itemVariants}
        >
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-blue-600 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              onClick={() => setCurrentSlide(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            />
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={itemVariants}
        >
          {[
            { number: "500+", label: "Happy Clients" },
            { number: "98%", label: "Success Rate" },
            { number: "$50M+", label: "Property Sold" },
            { number: "15+", label: "Years Experience" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center bg-white p-6 rounded-2xl shadow-lg"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="text-3xl md:text-4xl font-bold text-blue-600 mb-2"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16"
          variants={itemVariants}
        >
          <motion.button
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Real Estate Journey
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TestimonialSection;