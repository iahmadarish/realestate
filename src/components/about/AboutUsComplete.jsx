"use client"

import { motion } from "framer-motion"
import {
  Award,
  Users,
  Home,
  TrendingUp,
  Shield,
  Heart,
  Target,
  Eye,
  CheckCircle,
  Star,
  Phone,
  Mail,
} from "lucide-react"

const AboutUsComplete = () => {
  const stats = [
    { number: "500+", label: "Properties Sold", icon: Home },
    { number: "95%", label: "Customer Satisfaction", icon: Star },
    { number: "50+", label: "Real Estate Partners", icon: Users },
    { number: "20+", label: "Years of Experience", icon: Award },
  ]

  const values = [
    {
      icon: Shield,
      title: "Trust & Integrity",
      description:
        "We build lasting relationships through honest, transparent dealings and ethical practices in every transaction.",
    },
    {
      icon: Heart,
      title: "Client-Centered Service",
      description:
        "Your dreams and goals are our priority. We provide personalized service tailored to your unique needs.",
    },
    {
      icon: TrendingUp,
      title: "Market Excellence",
      description: "Deep market knowledge and innovative strategies ensure you get the best value in every deal.",
    },
    {
      icon: Target,
      title: "Results Driven",
      description: "We're committed to delivering exceptional results that exceed expectations every single time.",
    },
  ]

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "https://png.pngtree.com/png-clipart/20240623/original/pngtree-corporate-female-leader-surrounded-by-team-members-in-office-setting-photo-png-image_15400745.png",
      bio: "20+ years in real estate with expertise in luxury properties and commercial investments.",
    },
    {
      name: "Michael Chen",
      role: "Senior Property Advisor",
      image: "https://plus.unsplash.com/premium_photo-1661688797823-36e97735223e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFsZSUyMGVtcGxveWVlfGVufDB8fDB8fHww",
      bio: "Specializes in residential sales and first-time buyer guidance with 15 years experience.",
    },
    {
      name: "Emily Rodriguez",
      role: "Market Analyst",
      image: "https://st5.depositphotos.com/62628780/65594/i/450/depositphotos_655943644-stock-photo-shes-making-her-own-success.jpg",
      bio: "Expert in market trends and property valuation with advanced analytics background.",
    },
    {
      name: "David Thompson",
      role: "Investment Consultant",
      image: "https://t3.ftcdn.net/jpg/05/82/07/88/360_F_582078881_5tEPAOwIJvE7BDdeh5BlmO9VLg8bIWlf.jpg",
      bio: "Helps clients build wealth through strategic real estate investments and portfolio management.",
    },
  ]

  const timeline = [
    {
      year: "2004",
      event: "Company Founded",
      description: "Started with a vision to revolutionize real estate services",
    },
    {
      year: "2008",
      event: "First 100 Sales",
      description: "Reached our first major milestone in property transactions",
    },
    { year: "2012", event: "Digital Innovation", description: "Launched our advanced property search platform" },
    { year: "2018", event: "Market Leader", description: "Became the #1 real estate agency in the region" },
    { year: "2024", event: "Future Ready", description: "Expanding with AI-powered property matching technology" },
  ]

  const services = [
    "Residential Property Sales",
    "Commercial Real Estate",
    "Property Investment Consulting",
    "Market Analysis & Valuation",
    "Property Management Services",
    "First-Time Buyer Programs",
  ]

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <motion.section
        className="py-20 px-4 bg-gradient-to-br from-blue-50 to-cyan-50"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div variants={itemVariants}>
            <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase ">About RealEstate</span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mt-4 font-comfortaa mb-6">Your Trusted Real Estate Partner</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              For over two decades, we've been helping families and investors find their perfect properties. Our
              commitment to excellence and personalized service has made us the most trusted name in real estate.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Statistics Section */}
      <motion.section
        className="py-16 px-4 bg-white"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.section>

      {/* Mission & Vision */}
      <motion.section
        className="py-16 px-4 bg-gray-50"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                To provide exceptional real estate services that exceed client expectations while building lasting
                relationships based on trust, integrity, and professional excellence.
              </p>
              <div className="space-y-3">
                {services.map((service, index) => (
                  <motion.div
                    key={service}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    <CheckCircle className="w-5 h-5 text-gray-600 mr-3" />
                    <span className="text-gray-700">{service}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="flex items-center mb-4">
                <Eye className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                To be the leading real estate company that transforms the property buying and selling experience through
                innovation, expertise, and unwavering commitment to client success.
              </p>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <img
                  src="https://images.adsttc.com/media/images/5fa5/632a/63c0/1756/4c00/04a1/newsletter/Alembic_Corporate_Office__(1).jpg?1604674309"
                  alt="Our office"
                  className="w-full h-64 object-cover rounded-xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section
        className="py-16 px-4 bg-white"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These fundamental principles guide everything we do and shape our relationships with clients and partners.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  className="text-center p-6 rounded-2xl hover:bg-gray-50 transition-colors duration-300"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        className="py-16 px-4 bg-gray-50"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our experienced professionals are dedicated to providing you with exceptional service and expertise.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ delay: index * 0.1 }}
              >
                <img src={member.image || "/placeholder.svg"} alt={member.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Timeline Section */}
      <motion.section
        className="py-12 md:py-16 px-4 bg-white"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div className="text-center mb-8 md:mb-12" variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">Our Journey</h2>
            <p className="text-base md:text-lg text-gray-600">
              Two decades of growth, innovation, and success in the real estate industry.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line - hidden on mobile, visible on md+ */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>

            {/* Mobile timeline line - visible only on mobile */}
            <div className="md:hidden absolute left-6 transform w-1 h-full bg-blue-200"></div>

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                className={`relative flex mb-8 md:mb-12 ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}
                variants={itemVariants}
                transition={{ delay: index * 0.2 }}
              >
                {/* Mobile layout (stacked) */}
                <div className="md:hidden w-full pl-12">
                  <div className="bg-white p-5 rounded-2xl shadow-lg">
                    <div className="text-xl font-bold text-blue-600 mb-1">{item.year}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{item.event}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                  <div className="absolute left-6 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
                </div>

                {/* Desktop layout (alternating) */}
                <div className={`hidden md:block w-full md:w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <div className="text-2xl font-bold text-blue-600 mb-2">{item.year}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.event}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact CTA Section */}
      <motion.section
        className="py-16 px-4 bg-gradient-to-r from-blue-600 to-cyan-600"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl  font-family-headings text-white mb-6">Ready to Find Your Dream Property?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let our experienced team help you navigate the real estate market and find the perfect property for your
              needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Today
              </motion.button>
              <div className="md:lg:xl:2xl:sm:flex items-center space-y-4 space-x-6 text-white">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  <span>info@realestate.com</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

export default AboutUsComplete
