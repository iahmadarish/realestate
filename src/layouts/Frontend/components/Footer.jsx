const Footer = () => {
  return (
    <footer className="bg-sky-50 text-black">
      <div className="container mx-auto px-10 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="font-comfortaa">
            <h3 className="text-xl font-bold mb-4">RealEstate</h3>
            <p className="text-gray-100">Your trusted partner in finding the perfect property.</p>
          </div>

          <div className="font-exo">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-black hover:text-black">
                  Home
                </a>
              </li>
              <li>
                <a href="/property" className="text-black hover:text-black">
                  Properties
                </a>
              </li>
              <li>
                <a href="/about" className="text-black hover:text-black">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-black hover:text-black">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-black hover:text-black">
                  Buy Property
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-black">
                  Sell Property
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-black">
                  Rent Property
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-black">
                  Property Management
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-black">
              <p>📧 info@realestate.com</p>
              <p>📞 +880 123 456 789</p>
              <p>📍 Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-black">© 2025 RealEstate. Design and developed by <a className="text-blue-700" href="https://conqueric.com/"> CONQUERIC</a></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
