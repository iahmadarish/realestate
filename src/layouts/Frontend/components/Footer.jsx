const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">RealEstate</h3>
            <p className="text-gray-300">Your trusted partner in finding the perfect property.</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/property" className="text-gray-300 hover:text-white">
                  Properties
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Buy Property
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Sell Property
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Rent Property
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Property Management
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>📧 info@realestate.com</p>
              <p>📞 +880 123 456 789</p>
              <p>📍 Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">© 2024 RealEstate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
