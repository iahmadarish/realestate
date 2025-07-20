import FeaturedProperties from "@/components/home/FeaturedProperties"
import BuyingProcessSection from "../../components/home/BuyingProcessSection"
import HeroSection from "../../components/home/HeroSection"
import PropertyListing from "../../components/property/PropertyListing"

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <HeroSection/>
        <PropertyListing/>
        <BuyingProcessSection/>
        <FeaturedProperties/>
    </div>
  )
}

export default Home
