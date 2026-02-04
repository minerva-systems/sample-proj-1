import React from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Instagram } from "lucide-react";
import { BASE } from "../utils/paths";
import { LocationSection } from "./LocationSection";

export function Home() {
  return (
    <div className="w-full min-w-0 overflow-x-hidden">
      {/* Hero Section - banner height, cover + crop */}
      <section
        className="relative block w-full min-w-0 flex-shrink-0 overflow-hidden"
        style={{ height: "clamp(240px, 35vh, 420px)", minHeight: 240 }}
      >
        <div className="absolute inset-0 w-full h-full">
          <ImageWithFallback
            src={`${BASE}/sushi-black-plate-aesthetic-look_629685-13756.avif`}
            alt="Harumi Sushi & Hibachi"
            className="absolute inset-0 w-full h-full object-cover object-center block"
          />
        </div>

        {/* Optional: subtle dark overlay to match the screenshot vibe */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      </section>

      {/* Welcome Section */}
      <section className="py-10 md:py-14 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-4 md:mb-6">
              <p className="text-2xl md:text-3xl text-gray-600 mb-2">Welcome to</p>
              <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4 md:mb-6">
                Harumi Sushi & Hibachi
              </h2>
              <p className="text-lg md:text-xl text-gray-600 -mt-3 md:-mt-4">
                All-You-Can-Eat Sushi &amp; Hibachi • Dine-In Only • Natomas, Sacramento
              </p>
            </div>
            
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed mb-6">
              <p>
                Enjoy fresh sushi, premium sashimi, and sizzling hibachi made to order in a
                warm, family-friendly space. From classic favorites to chef specials, every
                plate is crafted with bold flavor and quality ingredients.
              </p>
              <p>
                Dine in for an all-you-can-eat experience that’s perfect for lunch, dinner,
                and celebrations.
              </p>
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

      {/* Location Section */}
      <LocationSection />
    </div>
  );
}
