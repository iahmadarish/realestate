import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-2 items-center min-h-[500px]">
            {/* Left Content */}
            <div className="p-8 lg:p-16 space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl font-family-heading lg:text-5xl xl:text-6xl font-light text-gray-900 leading-tight">
                  Find your best <br className="hidden sm:block" />
                  Real Estate
                </h1>

                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-md">
                  We provide a complete service for the sale, purchase or rental of real estate.
                </p>
              </div>

              <Button
                className="bg-sky-400 hover:bg-sky-500 text-white px-8 py-6 text-base font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                size="lg"
              >
                CONTACT US
              </Button>
            </div>

            {/* Right Image */}
            <div className="relative h-full min-h-[400px] lg:min-h-[500px]">
              <div className="absolute inset-0"></div>
              <img
                src="https://png.pngtree.com/png-vector/20240201/ourmid/pngtree-modern-office-building-with-blue-glass-window-png-image_11529966.png"
                alt="Modern office building"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
