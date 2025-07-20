import FeaturedProperties from "@/components/home/FeaturedProperties"
import BuyingProcessSection from "../../components/home/BuyingProcessSection"
import HeroSection from "../../components/home/HeroSection"
import PropertyListing from "../../components/property/PropertyListing"
import AboutSection from "@/components/about/AboutSection"

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <HeroSection/>
        <FeaturedProperties/>
        <BuyingProcessSection/>
        <AboutSection/>
    </div>
  )
}

export default Home
