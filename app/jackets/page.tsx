import React from "react";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Women's Leather Jacket 001",
    desc: "Elegant black leather jacket, tailored for women.",
    img: "/static/j1.jpg",
  },
  {
    id: 2,
    name: "Women's Leather Jacket 002",
    desc: "Stylish red leather jacket with a slim-fit cut.",
    img: "/static/j2.jpg",
  },
  {
    id: 3,
    name: "Women's Leather Jacket 003",
    desc: "Classic brown biker jacket, designed for women.",
    img: "/static/j3.jpg",
  },
  {
    id: 4,
    name: "Women's Leather Jacket 004",
    desc: "Trendy cropped leather jacket for casual outings.",
    img: "/static/j4.jpg",
  },
  {
    id: 5,
    name: "Men's Leather Jacket 005",
    desc: "Classic black biker jacket, rugged and durable.",
    img: "/static/j5.jpg",
  },
  {
    id: 6,
    name: "Men's Leather Jacket 006",
    desc: "Brown vintage-style jacket with a timeless look.",
    img: "/static/j6.jpg",
  },
  {
    id: 7,
    name: "Men's Leather Jacket 007",
    desc: "Slim-fit modern leather jacket for daily wear.",
    img: "/static/j7.jpg",
  },
  {
    id: 8,
    name: "Men's Leather Jacket 008",
    desc: "Classic bomber leather jacket with ribbed cuffs.",
    img: "/static/j8.jpg",
  },
  {
    id: 9,
    name: "Men's Leather Jacket 009",
    desc: "Stylish distressed leather jacket for a rugged look.",
    img: "/static/j9.jpg",
  },
  {
    id: 10,
    name: "Men's Leather Jacket 010",
    desc: "Premium suede leather jacket, soft and durable.",
    img: "/static/j10.jpg",
  },
  {
    id: 11,
    name: "Men's Leather Jacket 011",
    desc: "Motorcycle leather jacket designed for protection.",
    img: "/static/j11.jpg",
  },
  {
    id: 12,
    name: "Men's Leather Jacket 012",
    desc: "Luxury Italian leather jacket with a sleek finish.",
    img: "/static/j12.jpg",
  },

];

const ProductGrid = () => {
  return (
    <div className="w-full px-6 py-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10 text-[#E5C07B]">
        Leather Jackets
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
