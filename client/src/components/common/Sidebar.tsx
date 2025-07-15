import React from 'react';

interface SidebarProps {
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ selectedCategory, setSelectedCategory, priceRange, setPriceRange }) => {
  const categories = ["All", "Skincare", "Multivitamins", "Medicines", "Hygiene"];

  return (
    <div className="w-full md:w-1/4 bg-white p-6 rounded-xl shadow-lg border border-teal-100">
      <h3 className="text-2xl font-bold text-teal-600 mb-6">Filters</h3>

      {/* Category Filter */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold text-teal-700 mb-3">Category</h4>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li
              key={category}
              onClick={() => setSelectedCategory(category === selectedCategory ? null : category)}
              className={`cursor-pointer py-2 px-4 rounded-md transition-all duration-200 hover:bg-teal-50 hover:text-teal-600 ${
                selectedCategory === category ? 'bg-teal-100 text-teal-700 font-medium' : 'text-gray-600'
              }`}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      {/* Price Range Filter */}
      <div className="mb-4">
        <h4 className="text-lg font-semibold text-teal-700 mb-3">Price Range</h4>
        <div className="space-y-4">
          <div>
            <input
              type="range"
              min="0"
              max="100"
              value={priceRange[0]}
              onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
              className="w-full h-2 bg-teal-200 rounded-lg appearance-none cursor-pointer accent-teal-500"
            />
          </div>
          <div>
            <input
              type="range"
              min="0"
              max="100"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
              className="w-full h-2 bg-teal-200 rounded-lg appearance-none cursor-pointer accent-teal-500"
            />
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span className="font-medium">${priceRange[0]}</span>
            <span className="font-medium">${priceRange[1]}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;