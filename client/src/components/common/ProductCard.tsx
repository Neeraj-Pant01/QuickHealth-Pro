import React from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-teal-100 overflow-hidden flex flex-col h-full">
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-32 object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-2 right-2 bg-teal-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
          {product.category}
        </div>
      </div>
      <div className="p-3 flex flex-col flex-1">
        <h4 className="text-sm md:text-[16px] font-semibold text-teal-600 mb-2">{product.name}</h4>
        <p className="text-sm text-gray-500 mb-3">{product.category}</p>
        <div className="flex flex-col mt-auto ">
          <p className="text-xl font-bold text-teal-700">${product.price.toFixed(2)}</p>
          <button className="px-4 py-1 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition-colors duration-200 text-sm font-medium">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;