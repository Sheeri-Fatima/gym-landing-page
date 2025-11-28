import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0e0e0f] text-white py-14 border-t border-[#ff4d4d]/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-extrabold text-[#ff4d4d] mb-3">GYM</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Push harder than yesterday if you want a different tomorrow.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#ff4d4d]">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-[#ff4d4d] transition">Home</li>
              <li className="hover:text-[#ff4d4d] transition">About</li>
              <li className="hover:text-[#ff4d4d] transition">Services</li>
              <li className="hover:text-[#ff4d4d] transition">Pricing</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#ff4d4d]">Support</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-[#ff4d4d] transition">FAQs</li>
              <li className="hover:text-[#ff4d4d] transition">Contact</li>
              <li className="hover:text-[#ff4d4d] transition">Membership</li>
              <li className="hover:text-[#ff4d4d] transition">Terms & Policy</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#ff4d4d]">Follow Us</h3>
            <div className="flex gap-5">
              <a className="hover:text-[#ff4d4d] transition cursor-pointer"><Facebook size={22} /></a>
              <a className="hover:text-[#ff4d4d] transition cursor-pointer"><Instagram size={22} /></a>
              <a className="hover:text-[#ff4d4d] transition cursor-pointer"><Twitter size={22} /></a>
              <a className="hover:text-[#ff4d4d] transition cursor-pointer"><Youtube size={22} /></a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm border-t border-gray-700 pt-6">
          © {new Date().getFullYear()} GYM Landing Page. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
