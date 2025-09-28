import React from "react";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Classic Track Suit 001",
    desc: "Lightweight cotton blend, perfect for casual workouts.",
    img: "/static/t1.jpg",
  },
  {
    id: 2,
    name: "Classic Track Suit 002",
    desc: "Breathable polyester fabric, ideal for running sessions.",
    img: "/static/t2.jpg",
  },
  {
    id: 3,
    name: "Classic Track Suit 003",
    desc: "Slim-fit design with stretch, made for modern athletes.",
    img: "/static/t3.jpg",
  },
  {
    id: 4,
    name: "Classic Track Suit 004",
    desc: "Moisture-wicking fabric, keeps you cool and dry.",
    img: "/static/t4.jpg",
  },
  {
    id: 5,
    name: "Classic Track Suit 005",
    desc: "Soft fleece lining, perfect for chilly mornings.",
    img: "/static/t5.jpg",
  },
  {
    id: 6,
    name: "Classic Track Suit 006",
    desc: "Two-tone sporty design, stylish and comfortable.",
    img: "/static/t6.jpg",
  },
  {
    id: 7,
    name: "Classic Track Suit 007",
    desc: "Full-zip jacket with tapered pants, made for flexibility.",
    img: "/static/t7.jpg",
  },
  {
    id: 8,
    name: "Classic Track Suit 008",
    desc: "Quick-dry fabric, perfect for high-intensity workouts.",
    img: "/static/t8.jpg",
  },
  {
    id: 9,
    name: "Classic Track Suit 009",
    desc: "Retro-inspired design with a modern sporty touch.",
    img: "/static/t9.jpg",
  },
  {
    id: 10,
    name: "Classic Track Suit 010",
    desc: "Ultra-lightweight material, great for summer training.",
    img: "/static/t10.jpg",
  },
  {
    id: 11,
    name: "Classic Track Suit 011",
    desc: "Premium comfort fit, designed for all-day wear.",
    img: "/static/t11.jpg",
  },
  {
    id: 12,
    name: "Classic Track Suit 012",
    desc: "High-performance track suit, built for serious athletes.",
    img: "/static/t12.jpg",
  },
];

const ProductGrid = () => {
  return (
    <div className="w-full px-6 py-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10 text-[#E5C07B]">
        Track Suits
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
