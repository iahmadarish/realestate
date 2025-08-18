import React from 'react';
import { motion } from 'framer-motion';
import { Home, Search, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

const RealEstateServices = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        },
        hover: {
            y: -8,
            scale: 1.02,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    const iconVariants = {
        hover: {
            scale: 1.2,
            rotate: 5,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    const buttonVariants = {
        hover: {
            scale: 1.05,
            boxShadow: "0 10px 20px rgba(59, 130, 246, 0.3)",
            transition: {
                duration: 0.2,
                ease: "easeOut"
            }
        },
        tap: {
            scale: 0.98
        }
    };

    const services = [
        {
            title: "Buy a home",
            description: "Find your place with an immersive photo experience and the most listings, including things you won't find anywhere else.",
            buttonText: "Browse Property",
            icon: "/icons/home1.jpg",
            gradient: "from-green-400 to-blue-500",
            iconColor: "text-green-600",
            bgColor: "bg-green-50"
        },
        {
            title: "Sell a home",
            description: "No matter what path you take to sell your home, we can help you navigate a successful sale.",
            buttonText: "See your options",
            icon: "/icons/home1.jpg",
            gradient: "from-orange-400 to-red-500",
            iconColor: "text-orange-600",
            bgColor: "bg-green-50"
        },
        {
            title: "Rent a home",
            description: "We're creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent.",
            buttonText: "Find rentals",
            icon: "/icons/home1.jpg",
            gradient: "from-purple-400 to-pink-500",
            iconColor: "text-purple-600",
            bgColor: "bg-green-50"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white sm:py-16 sm:px-4">
            <motion.div
                className="container sm:px-16 mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                viewport={{ once: true }}
            >
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8"
                    variants={containerVariants}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover="hover"
                            className="bg-white shadow-[0px_0px_10px_1px_#8a8484] rounded-3xl p-8  border border-gray-100 cursor-pointer group"
                            style={{ willChange: 'transform' }}
                        >
                            {/* Icon Section */}
                            <motion.div
                                className={`w-30 h-30 ${service.bgColor} rounded-2xl flex items-center justify-center mb-6 mx-auto`}
                                variants={iconVariants}
                            >
                                <img src={service.icon} alt="" />
                            </motion.div>

                            {/* Content */}
                            <div className="text-center space-y-4">
                                <motion.h2
                                    className="text-2xl font-bold text-gray-900"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 + 0.3 }}
                                >
                                    {service.title}
                                </motion.h2>

                                <motion.p
                                    className="text-gray-600 leading-relaxed text-base"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 + 0.4 }}
                                >
                                    {service.description}
                                </motion.p>

                                <Link to="/property">

                                    <motion.button
                                        variants={buttonVariants}
                                        whileHover="hover"
                                        whileTap="tap"
                                        className="mt-6 px-8 py-3  text-black font-semibold rounded border border-gray-600 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-200"
                                        style={{ willChange: 'transform' }}
                                    >
                                        {service.buttonText}
                                    </motion.button>
                                </Link>

                            </div>

                            {/* Decorative gradient overlay on hover */}
                            <motion.div
                                className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 rounded-3xl pointer-events-none`}
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 0.05 }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Additional floating elements for visual appeal */}
                <motion.div
                    className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 blur-xl"
                    animate={{
                        y: [0, -20, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                <motion.div
                    className="absolute bottom-20 right-10 w-24 h-24 bg-green-200 rounded-full opacity-20 blur-xl"
                    animate={{
                        y: [0, 20, 0],
                        scale: [1, 0.9, 1],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                />
            </motion.div>
        </div>
    );
};

export default RealEstateServices;