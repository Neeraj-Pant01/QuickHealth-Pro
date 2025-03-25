import React from "react";

interface PriceRangeProps {
  min: number;
  max: number;
  values: [number, number];
  onChange: (values: [number, number]) => void;
}

const PriceRange: React.FC<PriceRangeProps> = ({ min, max, values, onChange }) => {
  return (
    <div className="w-full">
      <h4 className="font-semibold mb-2">Price Range</h4>
      <div className="flex items-center justify-between text-sm">
        <span>${values[0]}</span>
        <span>${values[1]}</span>
      </div>

      {/* Range Slider */}
      <div className="relative mt-2">
        {/* Min Price Input */}
        <input
          type="range"
          min={min}
          max={max}
          value={values[0]}
          onChange={(e) => onChange([Number(e.target.value), values[1]])}
          className="absolute w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
          style={{ zIndex: values[0] > min ? 1 : 0 }}
        />

        {/* Max Price Input */}
        <input
          type="range"
          min={min}
          max={max}
          value={values[1]}
          onChange={(e) => onChange([values[0], Number(e.target.value)])}
          className="absolute w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
        />
      </div>
    </div>
  );
};

export default PriceRange;
