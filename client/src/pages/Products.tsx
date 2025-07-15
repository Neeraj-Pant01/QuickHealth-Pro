import React, { useState } from "react";
import Sidebar from "../components/common/Sidebar.tsx";
import ProductCard from "../components/common/ProductCard.tsx";

// Sample Product Data
const products = [
  { id: 1, name: "Vitamin C Serum", price: 25, category: "Skincare", image: "https://assets.entrepreneur.com/content/3x2/2000/20150804171106-pills-medicine-medical.jpeg?format=pjeg&auto=webp" },
  { id: 2, name: "Multivitamin Capsules", price: 40, category: "Multivitamins", image: "https://assets.entrepreneur.com/content/3x2/2000/20150804171106-pills-medicine-medical.jpeg?format=pjeg&auto=webp" },
  { id: 3, name: "Herbal Medicine", price: 15, category: "Medicines", image: "https://assets.entrepreneur.com/content/3x2/2000/20150804171106-pills-medicine-medical.jpeg?format=pjeg&auto=webp" },
  { id: 4, name: "Sanitizer", price: 10, category: "Hygiene", image: "https://assets.entrepreneur.com/content/3x2/2000/20150804171106-pills-medicine-medical.jpeg?format=pjeg&auto=webp" },
];

const Products: React.FC = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);

  // Filtered Products Logic
  const filteredProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(search.toLowerCase()) &&
      (selectedCategory === "All" || !selectedCategory || product.category === selectedCategory) &&
      product.price >= priceRange[0] &&
      product.price <= priceRange[1]
    );
  });
  

  return (
    <div className="flex gap-4 p-6">
      {/* Sidebar Filters */}
      <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} priceRange={priceRange} setPriceRange={setPriceRange} />

      {/* Products Section */}
      <div className="w-3/4">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full p-2 border rounded-md text-[grey]"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)
          ) : (
            <p>No products found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
