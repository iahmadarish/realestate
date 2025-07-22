"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import logo from "@/assets/logo2.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [visible, setVisible] = useState(true)
  const location = useLocation()

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Property", path: "/property" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ]

  const toggleMenu = () => setIsOpen(!isOpen)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setVisible(false)
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <motion.nav
      className="bg-white backdrop-blur-md sticky top-0 z-50 "
      initial={{ y: -100 }}
      animate={{ 
        y: visible ? 0 : -100,
        transition: { duration: 0.3, ease: "easeInOut" }
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div className="" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/" className="">
              <img className="h-14 w-fit" src={logo} alt="" />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden uppercase font-exo md:flex space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link to={item.path}>
                  <motion.div
                    className={`relative text-md px-4 py-2 rounded-lg font-medium transition-colors ${
                      location.pathname === item.path ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                    {location.pathname === item.path && (
                      <motion.div
                        className="absolute inset-0 bg-blue-200 rounded-lg -z-10"
                        layoutId="activeTab"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: location.pathname === item.path ? 1 : 0.8 }}
                      transition={{ duration: 0.2 }}
                      style={{
                        scaleX: location.pathname === item.path ? 1 : 0,
                        originX: 0.5,
                      }}
                    />
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-900 transition-colors"
            onClick={toggleMenu}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <motion.div
                className="py-4 space-y-2"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    <Link to={item.path} onClick={() => setIsOpen(false)}>
                      <motion.div
                        className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors relative ${
                          location.pathname === item.path
                            ? "text-blue-600 bg-blue-50"
                            : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                        }`}
                        whileHover={{ x: 4, backgroundColor: "rgba(59, 130, 246, 0.05)" }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {item.name}
                        {location.pathname === item.path && (
                          <motion.div
                            className="w-1 h-6 bg-blue-600 rounded-full absolute left-0 top-1/2 -translate-y-1/2"
                            layoutId="mobileLine"
                            initial={false}
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                          />
                        )}
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-[#fffbef] backdrop-blur-sm md:hidden -z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar