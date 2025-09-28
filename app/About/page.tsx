
import React from "react";

const About = () => {
  return (
    <div className="w-full bg-[#E5C07B] px-6 py-16">
      <div className="max-w-3xl mx-auto text-center text-white">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="text-lg leading-relaxed mb-10">
          Welcome to our leather collection store. We specialize in crafting
          timeless, high-quality leather products designed to bring durability,
          style, and comfort to your lifestyle. From jackets to shoes, bags to
          wallets, every piece reflects our passion for excellence and
          attention to detail.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-2">
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-semibold text-[#E5C07B] mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed">
            To provide premium quality leather products that combine tradition
            with modern design, giving our customers an unforgettable
            experience. We believe in sustainability and creating products that
            last for years.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-semibold text-[#E5C07B] mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our products are handcrafted with genuine leather, ensuring style
            and durability. We focus on delivering not just accessories, but a
            touch of elegance and confidence in every product you own.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
