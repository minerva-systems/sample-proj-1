import { ImageWithFallback } from "./figma/ImageWithFallback";
import { LocationSection } from "./LocationSection";

interface MenuPageProps {
  category: "bbq" | "appetizers" | "drinks" | "desserts";
}

export function MenuPage({ category }: MenuPageProps) {
  const menuData = {
    bbq: {
      title: "BBQ Menu",
      description: "Premium cuts grilled to perfection at your table",
      image: "https://images.unsplash.com/photo-1702741168115-cd3d9a682972?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwbWVhdCUyMGJicXxlbnwxfHx8fDE3NjQwMjgyMzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      items: [
        { name: "Galbi (Short Ribs)", price: "$32.99", description: "Marinated beef short ribs with signature sauce" },
        { name: "Bulgogi", price: "$28.99", description: "Thinly sliced marinated beef" },
        { name: "Samgyeopsal", price: "$26.99", description: "Premium pork belly slices" },
        { name: "Chadol (Beef Brisket)", price: "$29.99", description: "Thinly sliced beef brisket" },
        { name: "Spicy Pork", price: "$25.99", description: "Spicy marinated pork shoulder" },
        { name: "Chicken", price: "$24.99", description: "Marinated chicken thigh" },
        { name: "Shrimp", price: "$30.99", description: "Jumbo shrimp with garlic butter" },
        { name: "Combo Platter", price: "$58.99", description: "Assortment of beef, pork, and chicken" },
      ],
    },
    appetizers: {
      title: "Appetizers",
      description: "Start your meal with authentic Korean starters",
      image: "https://images.unsplash.com/photo-1709433420624-832e2264c346?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjBzaWRlJTIwZGlzaGVzfGVufDF8fHx8MTc2NDAyODIzOHww&ixlib=rb-4.1.0&q=80&w=1080",
      items: [
        { name: "Kimchi Pancake", price: "$12.99", description: "Crispy pancake with fermented kimchi" },
        { name: "Seafood Pancake", price: "$14.99", description: "Mixed seafood and scallions" },
        { name: "Mandu (Dumplings)", price: "$10.99", description: "Steamed or fried pork dumplings" },
        { name: "Japchae", price: "$13.99", description: "Stir-fried glass noodles with vegetables" },
        { name: "Tteokbokki", price: "$11.99", description: "Spicy rice cakes" },
        { name: "Korean Fried Chicken", price: "$15.99", description: "Crispy wings with choice of sauce" },
        { name: "Kimchi", price: "$5.99", description: "House-made fermented cabbage" },
        { name: "Banchan Set", price: "$8.99", description: "Assorted Korean side dishes" },
      ],
    },
    drinks: {
      title: "Drinks",
      description: "Refresh yourself with our beverage selection",
      image: "https://images.unsplash.com/photo-1629642621587-9947ce328799?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjBmb29kJTIwcmVzdGF1cmFudHxlbnwxfHx8fDE3NjM5NDY1NTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      items: [
        { name: "Soju", price: "$12.99", description: "Korean distilled spirit - Original or Flavored" },
        { name: "Makgeolli", price: "$14.99", description: "Traditional Korean rice wine" },
        { name: "Korean Beer", price: "$6.99", description: "Hite, Cass, or OB" },
        { name: "Soju Cocktail", price: "$10.99", description: "Soju mixed with fresh fruit juice" },
        { name: "Green Tea", price: "$3.99", description: "Hot or iced" },
        { name: "Korean Citron Tea", price: "$4.99", description: "Sweet yuzu tea" },
        { name: "Soft Drinks", price: "$2.99", description: "Coke, Sprite, or Fanta" },
        { name: "Bottled Water", price: "$1.99", description: "Spring water" },
      ],
    },
    desserts: {
      title: "Desserts",
      description: "Sweet endings to your meal",
      image: "https://images.unsplash.com/photo-1677367306400-d090b5ab52d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjBiYnElMjBncmlsbHxlbnwxfHx8fDE3NjQwMTMxMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      items: [
        { name: "Bingsu", price: "$12.99", description: "Korean shaved ice with sweet toppings" },
        { name: "Mochi Ice Cream", price: "$7.99", description: "Assorted flavors (3 pieces)" },
        { name: "Hotteok", price: "$6.99", description: "Sweet Korean pancake with cinnamon filling" },
        { name: "Green Tea Ice Cream", price: "$5.99", description: "Premium matcha ice cream" },
        { name: "Fresh Fruit Platter", price: "$8.99", description: "Seasonal fruits" },
        { name: "Korean Rice Cake", price: "$6.99", description: "Traditional tteok dessert" },
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
                <div className="text-red-600 whitespace-nowrap">
                  {item.price}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <p className="text-center text-gray-700">
              All BBQ items come with complimentary lettuce wraps, ssamjang,
              sesame oil with salt, and a selection of banchan (side dishes).
            </p>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <LocationSection />
    </div>
  );
}