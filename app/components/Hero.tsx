"use client";
import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/static/vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay (optional dark layer for readability) */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          <span className="text-[#E5C07B]">Welcome</span> to <span className="text-[#E5C07B]">Leather</span> World
        </h1>
        <p className="text-lg md:text-2xl max-w-2xl">
          Discover premium leather products crafted with elegance and durability.
        </p>
      </div>
    </section>
  );
};

export default Hero;

