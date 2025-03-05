
import { useState } from "react";
import { Search, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  price: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Digital pH Meter",
    category: "Laboratory",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd",
    description: "High-precision digital pH meter for accurate measurements",
    price: "$299.99"
  },
  {
    id: 2,
    name: "Microscope Set",
    category: "Educational",
    image: "https://images.unsplash.com/photo-1582719471137-c3967ffb1c42",
    description: "Advanced microscope set for educational purposes",
    price: "$599.99"
  },
  {
    id: 3,
    name: "Chemical Glassware Kit",
    category: "Laboratory",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69",
    description: "Complete set of laboratory glassware",
    price: "$199.99"
  },
  {
    id: 4,
    name: "Physics Lab Equipment",
    category: "Educational",
    image: "https://images.unsplash.com/photo-1576153192396-180ecef2a715",
    description: "Comprehensive physics laboratory equipment",
    price: "$899.99"
  },
  {
    id: 5,
    name: "Digital Multimeter",
    category: "Laboratory",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837",
    description: "Professional-grade digital multimeter",
    price: "$149.99"
  },
  {
    id: 6,
    name: "Biology Model Set",
    category: "Educational",
    image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8",
    description: "Detailed biological models for teaching",
    price: "$399.99"
  },
  {
    id: 7,
    name: "Chemistry Kit",
    category: "Educational",
    image: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6",
    description: "Complete chemistry experiment kit",
    price: "$299.99"
  },
  {
    id: 8,
    name: "Laboratory Balance",
    category: "Laboratory",
    image: "https://images.unsplash.com/photo-1581092162384-8987c1d64926",
    description: "High-precision laboratory balance",
    price: "$799.99"
  }
];

const categories = ["All", "Laboratory", "Educational"];

export const ProductShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our best-selling laboratory and educational equipment, designed to meet the highest standards of quality and precision.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <div className="flex gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="min-w-[100px]"
              >
                {category}
              </Button>
            ))}
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search products..."
              className="pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full transform transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-white border-white hover:bg-white hover:text-black"
                    onClick={() => window.location.href = `/products/${product.id}`}
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    Quick View
                  </Button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-accent font-bold">{product.price}</span>
                  <span className="text-sm text-gray-500">{product.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Catalog CTA */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90"
            onClick={() => window.location.href = '/catalog'}
          >
            View Full Catalog
          </Button>
        </div>
      </div>
    </section>
  );
};
