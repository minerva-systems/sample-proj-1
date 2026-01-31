import { ImageWithFallback } from "./figma/ImageWithFallback";
import { LocationSection } from "./LocationSection";

interface MenuPageProps {
  category: "sushi" | "starters" | "drinks" | "desserts";
}

export function MenuPage({ category }: MenuPageProps) {
  const menuData = {
    sushi: {
      title: "Sushi & Sashimi",
      description: "Fresh, bright flavors from the sushi bar",
      image:
        "https://images.unsplash.com/photo-1541542684-4d33b4b9f3eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXNoaSUyMHBsYXRlcnxlbnwxfHx8fDE3NjgxNzY4MDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      items: [
        {
          name: "Chef's Nigiri Set",
          price: "$24.99",
          description: "Assorted daily nigiri with seasonal fish",
        },
        {
          name: "Sashimi Deluxe",
          price: "$28.99",
          description: "Thick-cut sashimi with fresh wasabi",
        },
        {
          name: "Salmon Lovers",
          price: "$22.99",
          description: "Salmon nigiri, sashimi, and toro roll",
        },
        {
          name: "Tuna Trio",
          price: "$25.99",
          description: "Akami, spicy tuna roll, and seared tuna",
        },
        {
          name: "Vegetable Roll",
          price: "$9.99",
          description: "Cucumber, avocado, and kampyo",
        },
        {
          name: "California Roll",
          price: "$10.99",
          description: "Crab, avocado, and cucumber",
        },
        {
          name: "Dragon Roll",
          price: "$16.99",
          description: "Eel, avocado, and sweet soy glaze",
        },
        {
          name: "Spicy Tuna Roll",
          price: "$12.99",
          description: "Tuna, chili, and crunchy tempura flakes",
        },
      ],
    },
    starters: {
      title: "Starters",
      description: "Light bites to open your meal",
      image:
        "https://images.unsplash.com/photo-1607301405390-d831c242f59b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaXNvJTIwc291cHxlbnwxfHx8fDE3NjgxNzY4NTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      items: [
        {
          name: "Miso Soup",
          price: "$3.99",
          description: "Tofu, scallions, and wakame",
        },
        {
          name: "Edamame",
          price: "$5.99",
          description: "Steamed soybeans with sea salt",
        },
        {
          name: "Gyoza",
          price: "$8.99",
          description: "Pan-seared pork dumplings with ponzu",
        },
        {
          name: "Shrimp Tempura",
          price: "$12.99",
          description: "Crispy shrimp with tentsuyu dip",
        },
        {
          name: "Crispy Calamari",
          price: "$11.99",
          description: "Lightly fried with spicy mayo",
        },
        {
          name: "Seaweed Salad",
          price: "$6.99",
          description: "Sesame vinaigrette and tobiko",
        },
        {
          name: "Agedashi Tofu",
          price: "$9.99",
          description: "Silky tofu with dashi broth",
        },
        {
          name: "Takoyaki",
          price: "$10.99",
          description: "Octopus fritters with savory sauce",
        },
      ],
    },
    drinks: {
      title: "Drinks",
      description: "Sake, tea, and refreshing favorites",
      image:
        "https://images.unsplash.com/photo-1527169402691-feff5539e52c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWtlJTIwY2FycGxhZmV8ZW58MXx8fHwxNzY4MTc2OTA2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      items: [
        {
          name: "Hot Green Tea",
          price: "$2.99",
          description: "Traditional sencha",
        },
        {
          name: "Iced Jasmine Tea",
          price: "$3.99",
          description: "Light floral notes",
        },
        {
          name: "Sparkling Yuzu Soda",
          price: "$4.99",
          description: "Citrus-forward and refreshing",
        },
        {
          name: "House Sake",
          price: "$8.99",
          description: "Warm or chilled",
        },
        {
          name: "Junmai Sake",
          price: "$12.99",
          description: "Clean, dry finish",
        },
        {
          name: "Japanese Lager",
          price: "$6.99",
          description: "Light and crisp",
        },
        {
          name: "Lychee Lemonade",
          price: "$4.99",
          description: "Sweet tropical twist",
        },
        {
          name: "Sparkling Water",
          price: "$2.99",
          description: "Still or sparkling",
        },
      ],
    },
    desserts: {
      title: "Desserts",
      description: "Sweet bites to close your meal",
      image:
        "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtb2NoaSUyMGljZSUyMGNyZWFtfGVufDF8fHx8MTc2ODE3Njk0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      items: [
        {
          name: "Mochi Ice Cream",
          price: "$7.99",
          description: "Assorted flavors (3 pieces)",
        },
        {
          name: "Matcha Ice Cream",
          price: "$6.99",
          description: "Premium green tea",
        },
        {
          name: "Tempura Ice Cream",
          price: "$8.99",
          description: "Lightly fried with strawberry drizzle",
        },
        {
          name: "Sesame Panna Cotta",
          price: "$7.99",
          description: "Black sesame with berry sauce",
        },
        {
          name: "Yuzu Sorbet",
          price: "$6.99",
          description: "Bright citrus finish",
        },
        {
          name: "Seasonal Fruit",
          price: "$5.99",
          description: "Chef's daily selection",
        },
      ],
    },
  };

  const menu = menuData[category];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 bg-black">
          <ImageWithFallback
            src={menu.image}
            alt={menu.title}
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl mb-4">{menu.title}</h1>
          <p className="text-xl">{menu.description}</p>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-6">
            {menu.items.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-start gap-4 pb-6 border-b border-gray-200 last:border-0"
              >
                <div className="flex-1">
                  <h3 className="mb-2">{item.name}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                <div className="text-rose-600 whitespace-nowrap">
                  {item.price}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <p className="text-center text-gray-700">
              Menu items and availability may vary. Ask your server about
              seasonal sushi and chef specials.
            </p>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <LocationSection />
    </div>
  );
}