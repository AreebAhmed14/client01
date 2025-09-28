import React from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#E5C07B] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-8 
                      sm:grid-cols-2 
                      md:grid-cols-3 
                      lg:grid-cols-4">

        {/* Brand / About */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Leather World</h2>
          <p className="text-sm text-white/90">
            Premium leather products crafted with elegance and durability.  
            Jackets, shoes, bags, and more — designed for timeless style.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            {/* <li><Link href="/shop" className="hover:underline">Shop</Link></li> */}
            <li><Link href="/About" className="hover:underline">About Us</Link></li>
            <li><Link href="/Contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Categories</h3>
          <ul className="space-y-2">
            <li><Link href="/jackets" className="hover:underline">Jackets</Link></li>
            <li><Link href="/gloves" className="hover:underline">Gloves</Link></li>
            <li><Link href="/bags" className="hover:underline">Bags</Link></li>
            <li><Link href="/caps" className="hover:underline">Caps</Link></li>
            <li><Link href="/track" className="hover:underline">Track Suits</Link></li>
            <li><Link href="/hats" className="hover:underline">Hats</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <Link href="#" className="hover:opacity-80"><FaFacebookF size={20} /></Link>
            <Link href="#" className="hover:opacity-80"><FaInstagram size={20} /></Link>
            <Link href="#" className="hover:opacity-80"><FaTwitter size={20} /></Link>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="bg-[#D4A94F] text-center py-4 text-sm text-white">
        © {new Date().getFullYear()} Leather World. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
