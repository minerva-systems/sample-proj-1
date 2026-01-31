import React from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { MapPin, Phone, Sparkles, Star } from "lucide-react";
import { BASE } from "../utils/paths";

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
      <section className="relative h-[620px] flex items-center justify-center">
        <div className="absolute inset-0 bg-black">
          <ImageWithFallback
            src={`${BASE}/salmon_sushi.jpg`}
            alt="Sushi dining"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <p className="uppercase tracking-[0.3em] text-sm md:text-base mb-4 text-white/80">
            Susiho
          </p>
          <h1 className="text-5xl md:text-7xl mb-6">Harumi Sushi & Hibachi Natomas</h1>
          <p className="text-xl md:text-2xl mb-8">
            Sushi bar favorites in a warm, modern space
          </p>
          <a
            href="https://www.yelp.com/biz/harumi-sushi-and-hibachi-natomas-sacramento-11"
            className="inline-block bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded transition-colors"
          >
            View on Yelp
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12">Why Locals Love Susiho</h2>
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
          <h2 className="mb-6">Plan Your Susiho Night Out</h2>
          <p className="text-xl mb-8">
            Explore menus, photos, and the latest hours on Yelp.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.yelp.com/biz/harumi-sushi-and-hibachi-natomas-sacramento-11"
              className="inline-block bg-white text-rose-600 px-8 py-4 rounded hover:bg-gray-100 transition-colors"
            >
              See Yelp Details
            </a>
            <a
              href="https://www.yelp.com/biz/harumi-sushi-and-hibachi-natomas-sacramento-11"
              className="inline-block border-2 border-white px-8 py-4 rounded hover:bg-white hover:text-rose-600 transition-colors"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
