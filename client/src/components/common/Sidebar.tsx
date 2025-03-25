import React from "react";

interface SidebarProps {
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ selectedCategory, setSelectedCategory, priceRange, setPriceRange }) => {
  const categories = ["All", "Skincare", "Multivitamins", "Medicines", "Hygiene"];

  return (
    <div className="w-1/4 bg-[#1fc4b4] p-4 text-white rounded-md">
      <h3 className="text-xl font-semibold mb-4 text-[teal] bg-[white] px-4 rounded-md">Filters</h3>

      {/* Category Filter */}
      <div className="mb-4">
        <h4 className="font-medium mb-2 text-black">Category</h4>
        <ul >
          {categories.map((category) => (
            <li
              key={category}
              onClick={() => setSelectedCategory(category === selectedCategory ? null : category)}
              className={`cursor-pointer my-2 p-2 rounded-md hover:bg-white hover:text-[#1fc4b4] transition duration-300 ${selectedCategory === category ? "bg-white text-[#1fc4b4]" : ""}`}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      {/* Price Range Filter */}
      <div className="mb-4">
        <h4 className="font-medium mb-2 text-[black]">Price Range</h4>
        <input
          type="range"
          min="0"
          max="100"
          value={priceRange[0]}
          onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
          className="w-full mb-2"
        />
        <input
          type="range"
          min="0"
          max="100"
          value={priceRange[1]}
          onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
          className="w-full"
        />
        <div className="flex justify-between text-sm">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
