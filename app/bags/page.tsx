import React from "react";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Leather Bag 001",
    desc: "Classic black leather bag, perfect for daily use.",
    img: "/static/b1.jpg",
  },
  {
    id: 2,
    name: "Leather Bag 002",
    desc: "Spacious brown leather bag, ideal for travel.",
    img: "/static/b11.jpg",
  },
  {
    id: 3,
    name: "Leather Bag 003",
    desc: "Stylish crossbody leather bag for modern fashion.",
    img: "/static/b3.jpg",
  },
  {
    id: 4,
    name: "Leather Bag 004",
    desc: "Compact leather sling bag, made for convenience.",
    img: "/static/b4.jpg",
  },
  {
    id: 5,
    name: "Leather Bag 005",
    desc: "Vintage-inspired leather backpack with multiple pockets.",
    img: "/static/b5.jpg",
  },
  {
    id: 6,
    name: "Leather Bag 006",
    desc: "Elegant office leather bag, perfect for professionals.",
    img: "/static/b6.jpg",
  },
  {
    id: 7,
    name: "Leather Bag 007",
    desc: "Luxury leather handbag crafted with fine stitching.",
    img: "/static/b7.jpg",
  },
  {
    id: 8,
    name: "Leather Bag 008",
    desc: "Durable travel duffel bag made from genuine leather.",
    img: "/static/b8.jpg",
  },
  {
    id: 9,
    name: "Leather Bag 009",
    desc: "Smart leather laptop bag with secure compartments.",
    img: "/static/b9.jpg",
  },
  {
    id: 10,
    name: "Leather Bag 010",
    desc: "Minimalist tote bag designed for daily essentials.",
    img: "/static/b10.jpg",
  },
];

const ProductGrid = () => {
  return (
    <div className="w-full px-6 py-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10 text-[#E5C07B]">
        Leather Bags
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
