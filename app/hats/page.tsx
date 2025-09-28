import React from "react";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Classic Leather Hat 001",
    desc: "Premium brown leather, perfect for casual wear.",
    img: "/static/cap1.jpg",
  },
  {
    id: 2,
    name: "Classic Leather Hat 002",
    desc: "Durable vintage leather, made for adventure.",
    img: "/static/cap2.jpg",
  },
  {
    id: 3,
    name: "Classic Leather Hat 003",
    desc: "Spacious design with a modern leather finish.",
    img: "/static/cap3.jpg",
  },
  {
    id: 4,
    name: "Classic Leather Hat 004",
    desc: "Smooth camel leather, stylish for all occasions.",
    img: "/static/cap4.jpg",
  },
];

const ProductGrid = () => {
  return (
    <div className="w-full px-6 py-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10 text-[#E5C07B]">
        Leather Hats
      </h2>

      {/* Responsive Grid */}
      <div
        className="grid gap-6
                   sm:grid-cols-2 
                   md:grid-cols-3 
                   lg:grid-cols-3 
                   xl:grid-cols-3"
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition-all"
          >
            {/* Product Image */}
            <div className="w-40 h-40 relative mb-4">
              <Image
                src={product.img}
                alt={product.name}
                fill
                className="object-contain"
              />
            </div>

            {/* Product Info */}
            <p className="text-lg font-semibold text-gray-600">{product.name}</p>
            <p className="text-[#E5C07B] text-sm text-center mt-2">
              {product.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
