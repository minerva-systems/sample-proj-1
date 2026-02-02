import React from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { MapPin, Phone, Sparkles, Star, Instagram } from "lucide-react";
import { BASE } from "../utils/paths";
import { LocationSection } from "./LocationSection";

export function Home() {
  const features = [
    {
      icon: Sparkles,
      title: "Fresh Sushi Bar",
      description:
        "Seasonal fish, bright flavors, and handcrafted rolls prepared to order",
    },
    {
      icon: Star,
      title: "Signature Rolls",
      description:
        "House rolls layered with bright flavors and premium ingredients",
    },
    {
      icon: MapPin,
      title: "Natomas Neighborhood",
      description:
        "Easy to find and perfect for lunch, dinner, or a quick happy-hour stop",
    },
    {
      icon: Phone,
      title: "Dine In or Takeout",
      description:
        "Comfortable dining room with quick pickup options for busy nights",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[700px] md:h-[800px]">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={`${BASE}/salmon_sushi.jpg`}
            alt="Harumi Sushi & Hibachi"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <p className="text-2xl md:text-3xl text-gray-600 mb-2">Welcome to</p>
              <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8">
                Harumi Sushi & Hibachi
              </h2>
            </div>
            
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed mb-8">
              <p>
                Welcome to Harumi Sushi & Hibachi, where authentic Japanese cuisine meets 
                warm hospitality. We specialize in fresh, handcrafted sushi rolls, premium 
                sashimi, and sizzling hibachi dishes prepared with the finest ingredients. 
                Our chefs bring bold, unforgettable flavors to every plate, ensuring each 
                visit is a memorable dining experience.
              </p>
              <p>
                Our restaurant offers a warm and inviting atmosphere, perfect for special 
                occasions or quality time with friends and family. Whether you're celebrating 
                a milestone or simply craving exceptional Japanese cuisine, gather around our 
                tables, share laughter, and experience the taste of Japan — one delicious 
                bite at a time.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 mb-8">
              <span className="text-gray-600 text-lg">Fresh Ingredients</span>
              <span className="text-gray-400">|</span>
              <span className="text-gray-600 text-lg">Authentic Flavors</span>
              <span className="text-gray-400">|</span>
              <span className="text-gray-600 text-lg">Family-Friendly Dining</span>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/harumisushi_natomas/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 bg-black text-white rounded-full hover:bg-gray-800 transition-colors shadow-lg"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12">Why Locals Love Harumi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full mb-4">
                  <feature.icon className="w-8 h-8 text-rose-600" />
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
          <h2 className="text-center mb-12">Signature Moments</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-80 overflow-hidden rounded-lg">
              <ImageWithFallback
                src={`${BASE}/salmon_tail_sushi.jpg`}
                alt="Salmon tail sushi"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <p className="text-white p-6">Chef's Specials</p>
              </div>
            </div>
            <div className="relative h-80 overflow-hidden rounded-lg">
              <ImageWithFallback
                src={`${BASE}/smoked_salmon.jpg`}
                alt="Smoked salmon sushi"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <p className="text-white p-6">Sushi Bar Staples</p>
              </div>
            </div>
            <div className="relative h-80 overflow-hidden rounded-lg">
              <ImageWithFallback
                src={`${BASE}/salmon_sushi.jpg`}
                alt="Salmon sushi"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <p className="text-white p-6">Nigiri sushi </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-rose-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6">Plan Your Harumi Night Out</h2>
          <p className="text-xl mb-8">
            Explore our menus and visit us in Natomas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`${BASE}/menu`}
              className="inline-block bg-white text-rose-600 px-8 py-4 rounded hover:bg-gray-100 transition-colors"
            >
              View Menu
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=3541+Truxel+Rd+Sacramento+CA+95834"
              className="inline-block border-2 border-white px-8 py-4 rounded hover:bg-white hover:text-rose-600 transition-colors"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <LocationSection />
    </div>
  );
}
