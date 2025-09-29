import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      text: "The home buying process was overwhelming at first, but this real estate team made the process incredibly smooth. From the initial consultation to closing the deal, they were there every step of the way, answering all my questions with clarity and deep knowledge of the market.",
      name: "Jessica Williams",
      role: "Homeowner",
      image: "https://greateralabamamlsimages.fnistools.com/images/uploads/agents/13768621/13768621.jpg"
    },
    {
      id: 2,
      text: "As a real estate investor, I have worked with several agencies over the years, but this team stands out for their professionalism, market expertise, and dedication. They took the time to understand my investment goals and presented me with properties that aligned perfectly with my strategy.",
      name: "Sophia Martinez",
      role: "Real Estate Investor",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 3,
      text: "Buying my first home was both exciting and nerve-wracking, but this real estate team made the journey a breeze. From the moment I reached out, they were attentive, informative, and incredibly supportive. They walked me through every step, from understanding mortgage options to find the perfect property.",
      name: "David Thompson",
      role: "First-Time Buyer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 4,
      text: "Finding my dream home felt impossible until this real estate team made the difference. From the initial consultation to closing, they guided me every step of the way, answered all questions with patience and expertise. Their knowledge of the local market, attention to detail, and genuine care made all the difference.",
      name: "Michael Robertson",
      role: "Homebuyer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    }
  ];

  const handleScroll = (direction) => {
    if (direction === 'left') {
      setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    } else {
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="bg-white py-20 px-6">
      <div className="max-w-[1400px] mx-auto">
        {/* Top border and title */}
        <div className="border-t border-gray-300 pt-12 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 tracking-wide">TESTIMONIAL</h2>
        </div>

        {/* Testimonials Grid */}
        <div className="relative">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="overflow-hidden"
          >
            <motion.div
              className="flex gap-8 transition-transform duration-500 ease-out"
              animate={{
                x: `-${currentIndex * (100 / Math.min(3, testimonials.length))}%`
              }}
              style={{
                width: `${(testimonials.length / Math.min(3, testimonials.length)) * 100}%`
              }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  variants={cardVariants}
                  className="flex-shrink-0 w-full md:w-1/3 px-4"
                >
                  {/* Testimonial Card */}
                  <div className="bg-white border-l-2 border-gray-300 pl-8 pr-4 py-6 min-h-[400px] flex flex-col">
                    {/* Text Content */}
                    <p className="text-gray-700 text-sm leading-relaxed mb-8 flex-grow">
                      {testimonial.text}
                    </p>

                    {/* Profile Section */}
                    <div className="flex items-center gap-4 mt-auto">
                      <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">{testimonial.role}</p>
                        <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mt-12">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleScroll('left')}
              className="w-12 h-12 border-2 border-gray-900 flex items-center justify-center hover:bg-gray-900 hover:text-white transition-colors duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleScroll('right')}
              className="w-12 h-12 border-2 border-gray-900 flex items-center justify-center hover:bg-gray-900 hover:text-white transition-colors duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;