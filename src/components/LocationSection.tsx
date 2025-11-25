import { Clock, Phone, MapPin } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Location {
  name: string;
  image: string;
  address: string;
  city: string;
  phone: string;
  hours: string[];
  waitTime: string;
  waitStatus: "low" | "medium" | "high";
  mapEmbedUrl: string;
}

export function LocationSection() {
  const locations: Location[] = [
    {
      name: "Elk Grove",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZXh0ZXJpb3IlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjQwMjgyMzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      address: "2605 West Taron Ct",
      city: "Elk Grove, CA 95757",
      phone: "(916) 478-9292",
      hours: ["Sun-Thu: 11am-10pm", "Fri-Sat: 11am-11pm"],
      waitTime: "5-15 mins",
      waitStatus: "low",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3133.123456789!2d-121.4!3d38.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDI0JzAwLjAiTiAxMjHCsDI0JzAwLjAiVw!5e0!3m2!1sen!2sus!4v1234567890",
    },
    {
      name: "Roseville",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZXh0ZXJpb3IlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjQwMjgyMzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      address: "2080 Douglas Blvd",
      city: "Roseville, CA 95661",
      phone: "(916) 472-6598",
      hours: ["Sun-Thu: 11am-10pm", "Fri-Sat: 11am-11pm"],
      waitTime: "10-20 mins",
      waitStatus: "medium",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3133.123456789!2d-121.3!3d38.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDQyJzAwLjAiTiAxMjHCsDE4JzAwLjAiVw!5e0!3m2!1sen!2sus!4v1234567890",
    },
  ];

  const getWaitStatusColor = (status: string) => {
    switch (status) {
      case "low":
        return "bg-green-500";
      case "medium":
        return "bg-yellow-500";
      case "high":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-4">Check out our locations!</h2>
        <p className="text-center text-gray-600 mb-12">
          Visit us at any of our convenient locations
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
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
                <div className="space-y-2">
                  <p className="text-gray-800">{location.address}</p>
                  <p className="text-gray-800">{location.city}</p>
                  <a
                    href={`tel:${location.phone.replace(/[^0-9]/g, "")}`}
                    className="text-gray-600 hover:text-red-600 inline-block"
                  >
                    {location.phone}
                  </a>
                  {location.hours.map((hour, idx) => (
                    <p
                      key={idx}
                      className={idx === 0 ? "text-gray-600" : "text-red-700"}
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

              {/* Wait Time Section */}
              <div className="p-6 border-t">
                <h4 className="text-center mb-4">Waitlist</h4>
                <div className="text-center mb-4">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-3xl">{location.waitTime}</span>
                    <span
                      className={`${getWaitStatusColor(
                        location.waitStatus
                      )} text-white text-xs px-2 py-1 rounded`}
                    >
                      LIVE
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Wait time for 2 people
                  </p>
                </div>

                <div className="space-y-3">
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded transition-colors">
                    Join waitlist now
                  </button>
                  <button className="w-full border border-gray-300 hover:border-gray-400 text-gray-700 py-3 rounded transition-colors">
                    Remind me to join later
                  </button>
                </div>

                <div className="mt-4 text-center">
                  <p className="text-xs text-gray-500">
                    Powered by{" "}
                    <span className="text-red-600">yelp</span> Guest Manager
                  </p>
                </div>
              </div>

              {/* Order Online Button */}
              <div className="p-6 bg-gray-900">
                <button className="w-full bg-white hover:bg-gray-100 text-gray-900 py-3 rounded transition-colors">
                  Order Online {location.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
