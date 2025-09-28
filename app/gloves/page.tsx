import React from "react";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Classic Leather Gloves 001",
    desc: "Premium brown leather gloves, perfect for casual wear.",
    img: "/static/g1.jpg",
  },
  {
    id: 2,
    name: "Classic Leather Gloves 002",
    desc: "Elegant black leather gloves, ideal for formal occasions.",
    img: "/static/g2.jpg",
  },
  {
    id: 3,
    name: "Classic Leather Gloves 003",
    desc: "Soft tan leather gloves, versatile for work and travel.",
    img: "/static/g3.jpg",
  },
  {
    id: 4,
    name: "Classic Leather Gloves 004",
    desc: "Hand-stitched leather gloves, built for durability and style.",
    img: "/static/g4.jpg",
  },
  {
    id: 5,
    name: "Classic Leather Gloves 005",
    desc: "Warm lined leather gloves, perfect for winter wear.",
    img: "/static/g5.jpg",
  },
  {
    id: 6,
    name: "Classic Leather Gloves 006",
    desc: "Lightweight suede leather gloves, great for everyday use.",
    img: "/static/g6.jpg",
  },
  {
    id: 7,
    name: "Classic Leather Gloves 007",
    desc: "Modern slim-fit leather gloves for a sleek look.",
    img: "/static/g7.jpg",
  },
  {
    id: 8,
    name: "Classic Leather Gloves 008",
    desc: "Vintage-inspired leather gloves with a rugged finish.",
    img: "/static/g8.jpg",
  },
  {
    id: 9,
    name: "Classic Leather Gloves 009",
    desc: "Premium driving gloves, designed for grip and comfort.",
    img: "/static/g9.jpg",
  },
  {
    id: 10,
    name: "Classic Leather Gloves 010",
    desc: "Luxury Italian leather gloves, crafted for elegance.",
    img: "/static/g10.jpg",
  },
  {
    id: 11,
    name: "Classic Leather Gloves 011",
    desc: "Textured leather gloves with superior grip and durability.",
    img: "/static/g11.jpg",
  },
  {
    id: 12,
    name: "Classic Leather Gloves 012",
    desc: "Minimalist leather gloves, stylish for all-day wear.",
    img: "/static/g12.jpg",
  },
  {
    id: 13,
    name: "Classic Leather Gloves 013",
    desc: "Premium soft-grain leather gloves, perfect for daily comfort.",
    img: "/static/g13.jpg",
  },
];

const ProductGrid = () => {
  return (
    <div className="w-full px-6 py-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10 text-[#E5C07B]">
        Leather Gloves
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
