import ScrollToTop from "@/components/ScrollToTop"
import PropertyListing from "../../components/property/PropertyListing"

const Property = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <ScrollToTop/>
      <PropertyListing />
    </div>
  )
}

export default Property
