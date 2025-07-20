"use client"

import { motion } from "framer-motion"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  User,
  Calendar,
  CheckCircle,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react"
import { useState } from "react"

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    propertyType: "",
    message: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        { label: "Main Office", value: "(555) 123-4567" },
        { label: "Sales Team", value: "(555) 123-4568" },
        { label: "Emergency", value: "(555) 123-4569" },
      ],
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: [
        { label: "General Inquiries", value: "info@realestate.com" },
        { label: "Sales", value: "sales@realestate.com" },
        { label: "Support", value: "support@realestate.com" },
      ],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        { label: "Monday - Friday", value: "9:00 AM - 7:00 PM" },
        { label: "Saturday", value: "10:00 AM - 5:00 PM" },
        { label: "Sunday", value: "12:00 PM - 4:00 PM" },
      ],
    },
  ]

  const offices = [
    {
      name: "Downtown Office",
      address: "123 Main Street, Suite 500",
      city: "Toronto, ON M5V 3A8",
      phone: "(416) 555-0123",
      email: "downtown@realestate.com",
      manager: "Sarah Johnson",
      image: "https://res.cloudinary.com/kea/image/upload/v1693567570/website/blogs/38.jpg",
    },
    {
      name: "Waterfront Branch",
      address: "456 Harbour Street, Floor 12",
      city: "Toronto, ON M5J 2G8",
      phone: "(416) 555-0124",
      email: "waterfront@realestate.com",
      manager: "Michael Chen",
      image: "https://volzero.com/img/article/99231_2_7394.jpg",
    },
    {
      name: "North York Location",
      address: "789 Yonge Street, Unit 200",
      city: "North York, ON M2M 3K1",
      phone: "(416) 555-0125",
      email: "northyork@realestate.com",
      manager: "Emily Rodriguez",
      image: "https://www.archidust.com/uploaded_files/project/160934882266627.jpg",
    },
  ]

  const services = [
    "Property Buying Consultation",
    "Property Selling Services",
    "Investment Property Analysis",
    "Property Management",
  ]

  const socialLinks = [
    { icon: Facebook, name: "Facebook", url: "#" },
    { icon: Twitter, name: "Twitter", url: "#" },
    { icon: Instagram, name: "Instagram", url: "#" },
    { icon: Linkedin, name: "LinkedIn", url: "#" },
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
        animate="visible"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div variants={itemVariants}>
            <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">Get In Touch</span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mt-4 mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to find your dream property or need expert real estate advice? Our team is here to help you every
              step of the way.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Information Cards */}
      <motion.section
        className="py-16 px-4 bg-white"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <motion.div
                  key={info.title}
                  className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{info.title}</h3>
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <div key={idx} className="text-gray-600">
                        <span className="font-medium">{detail.label}:</span> {detail.value}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.section>

      {/* Contact Form & Quick Contact */}
      <motion.section
        className="py-16 px-4 bg-gray-50"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
                      <select
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select property type</option>
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                        <option value="investment">Investment</option>
                        <option value="rental">Rental</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="What can we help you with?"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell us more about your requirements..."
                      required
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitted}
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle className="w-5 h-5 mr-2" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Quick Contact & Services */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Quick Contact */}
              <div className="bg-[#9bfff2] rounded-2xl p-8 text-black">
                <h3 className="text-2xl font-bold mb-6">Need Immediate Assistance?</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 mr-4" />
                    <div>
                      <p className="font-semibold">Call Us Now</p>
                      <p className="text-black">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MessageCircle className="w-6 h-6 mr-4" />
                    <div>
                      <p className="font-semibold">Live Chat</p>
                      <p className="text-black">Available 9 AM - 7 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-6 h-6 mr-4" />
                    <div>
                      <p className="font-semibold">Schedule a Meeting</p>
                      <p className="text-black">Book a consultation</p>
                    </div>
                  </div>
                </div>

                <motion.button
                  className="w-full bg-white text-blue-600 py-3 px-6 rounded-lg font-semibold mt-6 hover:bg-gray-100 transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Schedule Consultation
                </motion.button>
              </div>

              {/* Services List */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Services</h3>
                <div className="grid grid-cols-1 gap-3">
                  {services.map((service, index) => (
                    <motion.div
                      key={service}
                      className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{service}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Office Locations */}
      <motion.section
        className="py-16 px-4 bg-white"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Office Locations</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Visit us at any of our convenient locations across the Greater Toronto Area.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={office.name}
                className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <img src={office.image || "/placeholder.svg"} alt={office.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{office.name}</h3>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 mr-2 mt-0.5 text-blue-600" />
                      <div>
                        <p>{office.address}</p>
                        <p>{office.city}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 mr-2 text-blue-600" />
                      <p>{office.phone}</p>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 mr-2 text-blue-600" />
                      <p>{office.email}</p>
                    </div>
                    <div className="flex items-center">
                      <User className="w-5 h-5 mr-2 text-blue-600" />
                      <p>Manager: {office.manager}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Map Section */}
      <motion.section
        className="py-16 px-4 bg-gray-50"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-8" variants={itemVariants}>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us on the Map</h2>
            <p className="text-lg text-gray-600">Our main office location in downtown Toronto</p>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl overflow-hidden shadow-lg"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="h-96 bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <p className="text-gray-600">Interactive Map Would Go Here</p>
                <p className="text-sm text-gray-500">123 Main Street, Toronto, ON</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Social Media & Final CTA */}
      <motion.section
        className="py-16 px-4 bg-gradient-to-r from-blue-600 to-cyan-600"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Stay Connected</h2>
            <p className="text-xl text-blue-100 mb-8">
              Follow us on social media for the latest property listings and real estate tips.
            </p>

            <div className="flex justify-center space-x-6 mb-8">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    className="bg-white/20 p-4 rounded-full hover:bg-white/30 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.a>
                )
              })}
            </div>

            <p className="text-blue-100">
              Questions? Call us at <span className="font-semibold text-white">(555) 123-4567</span> or email{" "}
              <span className="font-semibold text-white">info@realestate.com</span>
            </p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

export default ContactUsPage
