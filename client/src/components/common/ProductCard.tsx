import React from "react";

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
    <div className="bg-white shadow-lg rounded-md overflow-hidden">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h4 className="text-lg font-semibold text-[#1fc4b4]">{product.name}</h4>
        <p className="text-sm text-gray-600">{product.category}</p>
        <p className="text-xl font-bold text-[#1fc4b4]">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
