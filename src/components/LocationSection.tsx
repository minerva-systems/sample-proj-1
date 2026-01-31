import React from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Location {
  name: string;
  image: string;
  address: string;
  city: string;
  hours: string[];
  mapEmbedUrl: string;
  directionsUrl: string;
  yelpUrl: string;
}

export function LocationSection() {
  const locations: Location[] = [
    {
      name: "Natomas",
      image:
        "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxqYXBhbmVzZSUyMHJlc3RhdXJhbnQlMjBpbmVyaW9yfGVufDF8fHx8MTc2ODE3NjYwOHww&ixlib=rb-4.1.0&q=80&w=1080",
      address: "3541 Truxel Rd",
      city: "Sacramento, CA 95834",
      hours: ["See Yelp for current hours"],
      mapEmbedUrl:
        "https://www.google.com/maps?q=3541+Truxel+Rd+Sacramento+CA+95834&output=embed",
      directionsUrl:
        "https://www.google.com/maps/search/?api=1&query=3541+Truxel+Rd+Sacramento+CA+95834",
      yelpUrl:
        "https://www.yelp.com/biz/harumi-sushi-and-hibachi-natomas-sacramento-11",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-4">Visit Us in Natomas</h2>
        <p className="text-center text-gray-600 mb-12">
          Sushi nights made easy with quick directions and live updates
        </p>

        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto justify-items-center">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden w-full"
            >
              {/* Location Image */}
              <div className="p-8 text-center border-b">
                <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-8 border-gray-100 shadow-md">
                  <ImageWithFallback
                    src={location.image}
                    alt={location.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-2 text-center">
                  <p className="text-gray-800">{location.address}</p>
                  <p className="text-gray-800">{location.city}</p>
                  <a
                    href={location.yelpUrl}
                    className="text-gray-600 hover:text-rose-600 inline-block"
                  >
                    View on Yelp
                  </a>
                  {location.hours.map((hour, idx) => (
                    <p
                      key={idx}
                      className={idx === 0 ? "text-gray-600" : "text-rose-700"}
                    >
                      {hour}
                    </p>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div className="relative">
                <h3 className="text-center py-4 bg-white">{location.name}</h3>
                <div className="w-full h-64 bg-gray-200">
                  <iframe
                    src={location.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${location.name} Map`}
                  />
                </div>
              </div>

              {/* Action Section */}
              <div className="p-6 border-t">
                <div className="space-y-3">
                  <a
                    className="block w-full bg-rose-600 hover:bg-rose-700 text-white py-3 rounded transition-colors text-center"
                    href={location.yelpUrl}
                  >
                    See Photos & Reviews
                  </a>
                  <a
                    className="block w-full border border-gray-300 hover:border-gray-400 text-gray-700 py-3 rounded transition-colors text-center"
                    href={location.directionsUrl}
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
