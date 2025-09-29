import FeaturedProperties from "@/components/home/FeaturedProperties"
import BuyingProcessSection from "../../components/home/BuyingProcessSection"
import HeroSection from "../../components/home/HeroSection"
import PropertyListing from "../../components/property/PropertyListing"
import AboutSection from "@/components/about/AboutSection"
import TestimonialSection from "@/components/common/TestimonialSection"
import ScrollToTop from "@/components/ScrollToTop"
import RealEstateServices from "@/components/common/RealEstateServices"
import DreamHomeLanding from "@/components/common/DreamHomeLanding"
import CommonContact from "@/components/contact/commonContact"
import FeaturedProjects from "@/components/home/FeaturedProjects"

const Home = () => {
  return (
    <div className="container font-exo mx-auto  py-8">
      <ScrollToTop/>
      <HeroSection/>
        <FeaturedProperties/>
        <BuyingProcessSection/>
        <FeaturedProjects/>
        <RealEstateServices/>
        <AboutSection/>
        <CommonContact/>
        <TestimonialSection/>
    </div>
  )
}

export default Home
