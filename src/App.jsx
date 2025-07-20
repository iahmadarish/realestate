import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import FrontendLayout from "./layouts/Frontend/FrontendLayout"
import AdminLayout from "./layouts/Admin/AdminLayout"

// Frontend Pages
import Home from "./pages/Frontend/Home"
import Property from "./pages/Frontend/Property"
import About from "./pages/Frontend/About"
import Blog from "./pages/Frontend/Blog"
import Contact from "./pages/Frontend/Contact"

// Admin Pages (placeholder)
import AdminDashboard from "./pages/Admin/AdminDashboard"
import PropertyDetails from "./pages/Frontend/PropertyDetails"
import PropertyListing from "./components/property/PropertyListing"

function App() {
  return (
    <Router>
      <Routes>
        {/* Frontend Routes */}
        <Route path="/" element={<FrontendLayout />}>
          <Route index element={<Home />} />
          <Route path="property" element={<Property />} />
          <Route path="property" element={<PropertyListing />} />
          <Route path="/property/:slug" element={<PropertyDetails />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
