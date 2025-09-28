import React from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  { name: "Jackets", img: "/static/j5.jpg", link: "/jackets" },
  { name: "Hats", img: "/static/cap2.jpg", link: "/hats" },
  { name: "Bags", img: "/static/b9.jpg", link: "/bags" },
  { name: "Caps", img: "/static/c3.jpg", link: "/caps" },
  { name: "Track suits", img: "/static/t7.jpg", link: "/track" },
  { name: "Gloves", img: "/static/g8.jpg", link: "/gloves" },
];

const Categories = () => {
  return (
    <div className="w-full px-6 py-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10 text-[#E5C07B]">Explore by Category</h2>

      <div
        className="grid gap-6 
                    sm:grid-cols-2 
                    md:grid-cols-3 
                    lg:grid-cols-3 
                    xl:grid-cols-3"
      >
        {categories.map((item, index) => (
          <Link href={item.link} key={index} className="group">
            <div className="flex flex-col items-center justify-center bg-white shadow-md rounded-2xl p-6 hover:scale-105 transition-transform cursor-pointer">
              <div className="w-55 h-45 relative mb-4 rounded-md">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className=""
                />
              </div>
              <p className="text-lg text-[#1C1C1C] font-semibold group-hover:text-[#E5C07B] transition-colors">
                {item.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
