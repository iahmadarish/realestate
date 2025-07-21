import FeaturedProperties from "@/components/home/FeaturedProperties"
import BuyingProcessSection from "../../components/home/BuyingProcessSection"
import HeroSection from "../../components/home/HeroSection"
import PropertyListing from "../../components/property/PropertyListing"
import AboutSection from "@/components/about/AboutSection"
import TestimonialSection from "@/components/common/TestimonialSection"
import ScrollToTop from "@/components/ScrollToTop"

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <ScrollToTop/>
      <HeroSection/>
        <FeaturedProperties/>
        <BuyingProcessSection/>
        <AboutSection/>
        <TestimonialSection/>
    </div>
  )
}

export default Home
