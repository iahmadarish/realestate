import { Search, DollarSign, RotateCcw, Sun } from "lucide-react"

export default function BuyingProcessSection() {
  const steps = [
    {
      id: 1,
      title: "Research",
      description: "Gathering information about properties, market prices, locations, and amenities.",
      icon: Search,
    },
    {
      id: 2,
      title: "Inspection",
      description: "Evaluating the property's condition, location, amenities, and legal documents to ensure.",
      icon: DollarSign,
    },
    {
      id: 3,
      title: "Negotiation",
      description: "The process of discussing and agreeing on the property price, payment terms, and other.",
      icon: RotateCcw,
    },
    {
      id: 4,
      title: "Registration",
      description: "Process of transferring property ownership by registering the sale deed.",
      icon: Sun,
    },
  ]

  return (
    <section className="py-20 bg-stone-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-orange-500 font-medium text-sm tracking-wider uppercase mb-4">OUR PROCESS</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Process of Buying</h2>
        </div>

        {/* Steps Grid */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <div key={step.id} className="bg-white rounded-lg p-8 text-center">
                {/* Step Number */}
                <div className="text-left mb-6">
                  <span className="text-gray-400 text-sm font-medium">Step-{step.id}</span>
                </div>

                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 flex items-center justify-center">
                    <Icon className="w-12 h-12 text-orange-500 stroke-1" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
