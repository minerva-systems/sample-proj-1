import React from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { LocationSection } from "./LocationSection";
import { BASE } from "../utils/paths";

interface MenuPageProps {
  category: "sushi" | "starters" | "drinks";
}

export function MenuPage({ category }: MenuPageProps) {
  const menuData = {
    sushi: {
      title: "Sushi & Sashimi",
      description: "Special rolls, baked rolls, nigiri, and sashimi",
      image: `${BASE}/salmon_sushi.jpg`,
      items: [
        {
          name: "AYCE Pricing",
          price: "",
          description: "",
        },
        {
          name: "Dinner AYCE",
          price: "$38.99",
          description: "Hadumi Special Menu Holiday All Day Dinner",
        },
        {
          name: "Lunch AYCE",
          price: "$28.99",
          description: "Hadumi Special Menu (Mon-Fri 11am-3pm & Holidays)",
        },
        {
          name: "Kids AYCE",
          price: "$10.99 / $21.99",
          description: "Kids 5 & Under: $10.99, Kids 6-10: $21.99",
        },
        {
          name: "AYCE Note",
          price: "",
          description:
            "Kids AYCE does not include sashimi. Sashimi are prepared as a maximum of only one plate of 15 assorted pieces at the time of first orders per party of 10 or more.",
        },
        {
          name: "Special Roll (特製寿司ロール)",
          price: "",
          description: "",
        },
        {
          name: "Shrimp Tempura Roll",
          price: "",
          description:
            "Shrimp tempura, crab meat, avocado, masago topped with unagi sauce",
        },
        {
          name: "Spider Roll",
          price: "",
          description:
            "Fried soft shell crab, cucumber, avocado, masago topped with unagi sauce",
        },
        {
          name: "Dragon Roll",
          price: "",
          description:
            "Unagi, cucumber topped with avocado, unagi sauce, red tobiko",
        },
        {
          name: "Rainbow Roll",
          price: "",
          description:
            "Crab meat, avocado, cucumber, topped with tuna, salmon, white fish & same",
        },
        {
          name: "Sunrise Roll",
          price: "",
          description:
            "Shrimp tempura, crab meat topped with salmon, spicy mayo and wasabi sauce",
        },
        {
          name: "Super White Tuna Roll",
          price: "",
          description:
            "Spicy tuna, tempura crunch, avocado, topped with seared white tuna & wasabi sauce",
        },
        {
          name: "Angry Roll",
          price: "",
          description:
            "Spicy tuna, avocado, topped with spicy tuna, jalapeno, sriracha",
        },
        {
          name: "J&J Roll",
          price: "",
          description: "California roll topped with spicy seafood salad",
        },
        {
          name: "California King Roll",
          price: "",
          description:
            "Shrimp tempura, avocado, cream cheese topped with spicy crab salad, masago & unagi sauce",
        },
        {
          name: "Sakura Roll",
          price: "",
          description:
            "Shrimp tempura crunch, cucumber topped with assorted fish & spicy mayo",
        },
        {
          name: "Sexy Girl Roll",
          price: "",
          description:
            "Spicy tuna, tempura crunch avocado topped with white tuna & spicy mayo unagi sauce",
        },
        {
          name: "Samurai Roll",
          price: "",
          description:
            "Seared tempura crab meat, topped with avocado, spicy crab salad, masago & unagi sauce mix spicy",
        },
        {
          name: "Popper Tuna Roll",
          price: "",
          description:
            "Spicy tuna, jalapeno topped with seared white tuna & jalapeno with wasabi sauce mix spicy",
        },
        {
          name: "Flaming Shrimp Roll (8pcs)",
          price: "",
          description:
            "Shrimp tempura, avocado, cucumber, seared salad topped with unagi sauce",
        },
        {
          name: "Crazy Boy Roll",
          price: "",
          description:
            "Deep fried California roll topped with spicy crab salad, red tobiko, scallion & unagi sauce",
        },
        {
          name: "B1gg Roll",
          price: "",
          description:
            "Shrimp tempura topped with unagi, avocado, unagi sauce mix spicy",
        },
        {
          name: "47er Roll",
          price: "",
          description:
            "Spicy tuna, avocado topped with seared salmon, spicy mayo, unagi sauce",
        },
        {
          name: "Double Salmon Roll",
          price: "",
          description:
            "Spicy salmon, avocado topped with seared salmon, unagi, tobiko scallion",
        },
        {
          name: "Pink Lady Roll",
          price: "",
          description:
            "Shrimp tempura, crab, avocado inside, with pink soy paper, spicy mayo",
        },
        {
          name: "Captain Lemon Roll",
          price: "",
          description:
            "Salmon avocado topped with salmon slices and lemon peel sliced",
        },
        {
          name: "Baked Roll (20 min wait)",
          price: "",
          description: "",
        },
        {
          name: "Baked Salmon Roll",
          price: "",
          description:
            "Crab meat, avocado inside, topped with salmon, unagi sauce, scallion and spicy mayo",
        },
        {
          name: "Baked Unagi Roll",
          price: "",
          description:
            "Crab meat, avocado inside, topped with unagi, unagi sauce and masago with spicy mayo",
        },
        {
          name: "Baked Yellowtail Roll",
          price: "",
          description:
            "Crab meat, avocado inside, topped with yellowtail, jalapeno, unagi sauce, scallion, spicy mayo mix spicy",
        },
        {
          name: "Baked Scallop Roll",
          price: "",
          description:
            "Crab meat, avocado inside, topped with scallop, unagi sauce, scallion & spicy mayo",
        },
        {
          name: "Bake Raw Fish Roll",
          price: "",
          description:
            "Crab meat, avocado inside, topped with assorted raw fish, masago & scallion",
        },
        {
          name: "Fried Roll (No rice, with unagi)",
          price: "",
          description: "",
        },
        {
          name: "Tuna Lover Roll",
          price: "",
          description: "Spicy tuna, avocado, jalapeno, topped with unagi sauce",
        },
        {
          name: "Dynamite Roll",
          price: "",
          description:
            "Assorted fish, avocado, cream cheese topped with unagi sauce",
        },
        {
          name: "Salmon Lover Roll",
          price: "",
          description: "Spicy salmon, avocado topped with unagi sauce",
        },
        {
          name: "Volcano",
          price: "",
          description:
            "Spicy crab salad, avocado, cream cheese mix with Vegas sauce & tempura crunch",
        },
        {
          name: "California Roll",
          price: "",
          description: "Deep fried california roll with unagi sauce",
        },
        {
          name: "Sushi Appetizer (寿司冷菜) DINNER ONLY",
          price: "",
          description: "2 appetizer per person",
        },
        {
          name: "Yellowtail Jalapeño",
          price: "",
          description:
            "Sliced hamachi, jalapeño, ponzu sauce mixed wasabi & chili oil",
        },
        {
          name: "Salmon Carpaccio",
          price: "",
          description:
            "Sliced salmon, chili oil soy sauce, fried onion, jalapeño",
        },
        {
          name: "Tuna Tataki",
          price: "",
          description: "Seared tuna, ponzu sauce & scallion",
        },
        {
          name: "Cajun Albacore Tuna",
          price: "",
          description: "Seared albacore tuna, garlic ponzu sauce & fried onion",
        },
        {
          name: "Tuna-Su",
          price: "",
          description: "Tuna, octopus, yuzu sauce & scallion",
        },
        {
          name: "Ahi Tuna Bowl",
          price: "",
          description:
            "Diced tuna, onion, scallion tuna sauce mix, masago served with rice",
        },
        {
          name: "Ahi Salmon Bowl",
          price: "",
          description:
            "Dice salmon, onion, scallion, ponzu garlic chives sauce with rice",
        },
        {
          name: "Pepper Tuna Tataki",
          price: "",
          description: "Sliced pepper tuna with ponzu sauce & scallion",
        },
        {
          name: "Seared Ahi Tuna",
          price: "",
          description:
            "Sliced white tuna, ponzu sauce & scallion served with rice",
        },
        {
          name: "Nigiri & Sashimi (寿司と刺身) DINNER ONLY",
          price: "",
          description: "3pc nigiri / 5pc sashimi per person",
        },
        { name: "Crab Meat - Tai", price: "", description: "" },
        { name: "Salmon - Pepper Tuna", price: "", description: "" },
        { name: "Yellowtail - White tuna", price: "", description: "" },
        { name: "Eel - Tako", price: "", description: "" },
        { name: "Mackerel - Ikura - Ebi (shrimp)", price: "", description: "" },
        { name: "Shrimp - Cajun Albacore tuna", price: "", description: "" },
        {
          name: "Smoked Salmon - Botan shrimp (red choice) - Masago",
          price: "",
          description: "",
        },
        {
          name: "Surf Clam - Sweet Shrimp - Tobiko",
          price: "",
          description: "",
        },
        {
          name: "Truffle Yellowtail (Fresh wasabi) - Yuzu Yellowtail (Japanese)",
          price: "",
          description: "",
        },
        {
          name: "Seared Scallop (Spicy mayo, tobiko) - Seared Salmon (Fresh wasabi)",
          price: "",
          description: "",
        },
        {
          name: "Hand Roll & Maki Roll (巻き寿司)",
          price: "",
          description: "",
        },
        {
          name: "Tuna Roll - Cucumber Roll - Shrimp Tempura",
          price: "",
          description: "",
        },
        {
          name: "Spicy Tuna - Eel Avocado Roll - Tuna Avocado",
          price: "",
          description: "",
        },
        {
          name: "Salmon Roll - Eel Cucumber Roll - Tuna Cucumber",
          price: "",
          description: "",
        },
        {
          name: "Spicy Salmon - Avocado Roll - Tuna Cheese roll",
          price: "",
          description: "",
        },
        {
          name: "California Roll - Salmon Avocado - Salmon Cheese roll",
          price: "",
          description: "",
        },
        {
          name: "Sweet Potato - Salmon Cucumber - Salmon Skin",
          price: "",
          description: "",
        },
      ],
    },
    starters: {
      title: "Starters",
      description: "Salads, soups, appetizers, noodles, and warm plates",
      image:
        "https://images.unsplash.com/photo-1607301405390-d831c242f59b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaXNvJTIwc291cHxlbnwxfHx8fDE3NjgxNzY4NTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      items: [
        {
          name: "Salad (サラダ) & Soup (スープ)",
          price: "",
          description: "",
        },
        {
          name: "House Salad",
          price: "",
          description: "",
        },
        {
          name: "Seaweed Salad",
          price: "",
          description: "",
        },
        {
          name: "Crab Salad",
          price: "",
          description: "",
        },
        {
          name: "Miso Soup",
          price: "",
          description: "",
        },
        {
          name: "Steam Rice",
          price: "",
          description: "",
        },
        {
          name: "Fried (揚げ物) & Appetizer (冷菜)",
          price: "",
          description: "",
        },
        {
          name: "Shrimp Tempura",
          price: "",
          description: "Deep fried shrimp & vegetables with tempura sauce",
        },
        {
          name: "Vegetable Tempura",
          price: "",
          description: "Deep fried assorted vegetables with tempura sauce",
        },
        {
          name: "Edamame (Regular / Spicy)",
          price: "",
          description: "Boiled soybean",
        },
        {
          name: "Cheese Eggroll (4pcs)",
          price: "",
          description: "Deep fried cheesy cream cheese crab meat",
        },
        {
          name: "Gyoza",
          price: "",
          description:
            "Pan fried pork & vegetable dumplings served with gyoza sauce",
        },
        {
          name: "Clay Pot Rice (窯ご飯) & Noodles (ラーメン/うどん)",
          price: "",
          description: "",
        },
        {
          name: "Clay Pot Chicken",
          price: "",
          description:
            "Japanese rice cooked in clay pot with chicken & vegetables drizzled with your choice of sauce. Choice of: Shrimp / Beef / Unagi / Chicken. Choice of: Teriyaki / Curry / Spicy Miso / Tobanjan.",
        },
        {
          name: "Clay Pot Udon",
          price: "",
          description:
            "Japanese udon noodles soup with vegetables. Choice of: Tempura (2 pcs shrimp) / Chicken / Shrimp / Beef / Unagi / Chicken.",
        },
        {
          name: "Harumi Ramen",
          price: "",
          description:
            "Japanese style ramen in a choice of chicken broth or pork broth with chashu, soft boiled egg, fish cake, seaweed & scallion. Choice of: Regular / Spicy / Spicy Miso / Tobanjan.",
        },
        {
          name: "Fried Oyster",
          price: "",
          description:
            "Deep fried breaded oyster served with sweet chili aioli",
        },
        {
          name: "Karaage (唐揚)",
          price: "",
          description: "",
        },
        {
          name: "Chicken Karaage",
          price: "",
          description: "Japanese fried chicken served with sweet chili aioli",
        },
        {
          name: "Haru Maki",
          price: "",
          description: "Japanese egg roll with house sauce",
        },
        {
          name: "French Fries",
          price: "",
          description:
            "Deep fried potato sticks tossed in butter filled with pieces of octopus, green onions, and pickled ginger served with a savory sauce, mayonnaise, bonito flakes",
        },
        {
          name: "Chicken Katsu Curry Rice",
          price: "",
          description:
            "Japanese deep fried breaded chicken served on a bed of rice with Japanese curry sauce",
        },
        {
          name: "Udon Soup",
          price: "",
          description:
            "Japanese noodle soup with seaweed & scallions. Choice of: Vegetable / Shrimp / Beef / Chicken.",
        },
        {
          name: "Teriyaki (照り焼き) & Hibachi (鉄板焼き)",
          price: "",
          description: "",
        },
        {
          name: "Teriyaki",
          price: "",
          description:
            "Your choice of protein grilled with teriyaki sauce & mixed vegetables. Choice of: Chicken / Beef / Salmon / Tofu.",
        },
        {
          name: "BBQ Short Ribs",
          price: "",
          description: "Marinated boneless short ribs",
        },
        {
          name: "Hibachi Grill",
          price: "",
          description:
            "Your choice of protein grilled and seasoned with house sauce served with mixed vegetables. Choice of: Chicken / Beef / Steak / Salmon / Shrimp / Tofu.",
        },
      ],
    },
    drinks: {
      title: "Drinks & Desserts",
      description: "Tea, soda, and sweet bites",
      image:
        "https://images.unsplash.com/photo-1527169402691-feff5539e52c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWtlJTIwY2FycGxhZmV8ZW58MXx8fHwxNzY4MTc2OTA2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      items: [
        {
          name: "Soda (Free Refill)",
          price: "$3.59",
          description:
            "Pepsi / Diet Pepsi / Sierra Mist / Lemonade / Pink Lemonade / Mountain Dew / Root Beer",
        },
        {
          name: "Hot Green Tea",
          price: "$3.00",
          description: "",
        },
        {
          name: "Double Layer Milk Roll",
          price: "",
          description: "",
        },
        {
          name: "Glutinous Rice Cake",
          price: "",
          description: "",
        },
        {
          name: "Pumpkin Cake",
          price: "",
          description: "",
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
                {item.price ? (
                  <div className="text-rose-600 whitespace-nowrap">
                    {item.price}
                  </div>
                ) : null}
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