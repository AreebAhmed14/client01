import React from "react";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Men's Cap 001",
    desc: "Classic black cap with adjustable strap.",
    img: "/static/c1.jpg",
  },
  {
    id: 2,
    name: "Men's Cap 002",
    desc: "Trendy cap with a curved brim for casual wear.",
    img: "/static/c2.jpg",
  },
  {
    id: 3,
    name: "Men's Cap 003",
    desc: "Sporty blue cap, lightweight and breathable.",
    img: "/static/c3.jpg",
  },
  {
    id: 4,
    name: "Women's Cap 004",
    desc: "Stylish white cap with a minimalist design.",
    img: "/static/c4.jpg",
  },
  {
    id: 5,
    name: "Men's Cap 005",
    desc: "Vintage-inspired brown cap with a rugged look.",
    img: "/static/c5.jpg",
  },
  {
    id: 6,
    name: "Men's Cap 006",
    desc: "Elegant beige cap, perfect for outdoor activities.",
    img: "/static/c6.jpg",
  },
];

const ProductGrid = () => {
  return (
    <div className="w-full px-6 py-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10 text-[#E5C07B]">
        Leather Caps
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
