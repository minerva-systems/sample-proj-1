import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Flame, UtensilsCrossed, Clock, Star } from "lucide-react";
import { BASE } from "../utils/paths";

export function Home() {
  const features = [
    {
      icon: Flame,
      title: "Premium Quality",
      description: "Finest cuts of meat, carefully selected for the perfect BBQ experience",
    },
    {
      icon: UtensilsCrossed,
      title: "Traditional Recipes",
      description: "Authentic Korean marinades and side dishes prepared daily",
    },
    {
      icon: Clock,
      title: "All You Can Eat",
      description: "Unlimited options with our signature AYCE menu",
    },
    {
      icon: Star,
      title: "Premium Service",
      description: "Attentive staff to help you grill to perfection",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 bg-black">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1677367306400-d090b5ab52d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjBiYnElMjBncmlsbHxlbnwxfHx8fDE3NjQwMTMxMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Korean BBQ Grill"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl mb-6">Welcome to KBBQ HOUSE</h1>
          <p className="text-xl md:text-2xl mb-8">
            Experience the Authentic Korean BBQ Tradition
          </p>
          <a
            href={`${BASE}/menu/bbq`}
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded transition-colors"
          >
            View Our Menu
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                  <feature.icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12">Our Specialties</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-80 overflow-hidden rounded-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1702741168115-cd3d9a682972?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwbWVhdCUyMGJicXxlbnwxfHx8fDE3NjQwMjgyMzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Grilled BBQ"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <p className="text-white p-6">Premium BBQ Cuts</p>
              </div>
            </div>
            <div className="relative h-80 overflow-hidden rounded-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1629642621587-9947ce328799?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjBmb29kJTIwcmVzdGF1cmFudHxlbnwxfHx8fDE3NjM5NDY1NTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Korean Food"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <p className="text-white p-6">Traditional Korean Dishes</p>
              </div>
            </div>
            <div className="relative h-80 overflow-hidden rounded-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1709433420624-832e2264c346?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjBzaWRlJTIwZGlzaGVzfGVufDF8fHx8MTc2NDAyODIzOHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Korean Side Dishes"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <p className="text-white p-6">Fresh Banchan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6">Ready to Experience KBBQ?</h2>
          <p className="text-xl mb-8">
            Visit us today and enjoy the finest Korean BBQ in town
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`${BASE}/menu/bbq`}
              className="inline-block bg-white text-red-600 px-8 py-4 rounded hover:bg-gray-100 transition-colors"
            >
              Browse Menu
            </a>
            <a
              href="tel:5551234567"
              className="inline-block border-2 border-white px-8 py-4 rounded hover:bg-white hover:text-red-600 transition-colors"
            >
              Call to Reserve
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
