// Features.jsx
// Modern Features Section with icon cards + scroll animation using AOS
// IMPORTANT: Install AOS
// npm install aos
// Add in main.jsx:
// import 'aos/dist/aos.css';
// import AOS from 'aos';
// AOS.init();

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Dumbbell, BadgeCheck, ClipboardList } from "lucide-react";


export default function Features() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

const features = [
  {
    title: "Professional Trainers",
    desc: "Train under certified experts who guide you with perfect form and personalized workout plans.",
    icon: <BadgeCheck className="w-10 h-10 text-red-500" />,
  },
  {
    title: "Modern Equipment",
    desc: "Premium machines, advanced cardio tools, strength racks, and high-end fitness technology.",
    icon: <Dumbbell className="w-10 h-10 text-red-500" />,
  },
  {
    title: "Personalized Plans",
    desc: "Get customized workout + diet plans based on your fitness goals and body requirements.",
    icon: <ClipboardList className="w-10 h-10 text-red-500" />,
  },
];


  return (
    <section className="w-full bg-[#0d0d0d] py-20 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Why Choose <span className="text-red-500">PeakFit</span>?
        </h2>

        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">
          Experience a gym built around results — modern equipment, elite
          trainers, and programs designed for one purpose: **your
          transformation**.
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="group bg-[#1a1a1a] p-8 rounded-xl border border-white/5 hover:border-red-500/40 transition-all duration-300 shadow-lg hover:shadow-red-500/10 hover:-translate-y-1">
            <div className="mb-4">
              <BadgeCheck className="w-12 h-12 text-red-500 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Professional Trainers
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Train under certified experts who guide you with perfect form and
              personalized workout plans tailored just for your goals.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group bg-[#1a1a1a] p-8 rounded-xl border border-white/5 hover:border-red-500/40 transition-all duration-300 shadow-lg hover:shadow-red-500/10 hover:-translate-y-1">
            <div className="mb-4">
              <Dumbbell className="w-12 h-12 text-red-500 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Modern Equipment</h3>
            <p className="text-gray-400 leading-relaxed">
              Train with premium machines, strength racks, advanced cardio
              tools, and top-tier fitness technology designed for maximum
              results.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group bg-[#1a1a1a] p-8 rounded-xl border border-white/5 hover:border-red-500/40 transition-all duration-300 shadow-lg hover:shadow-red-500/10 hover:-translate-y-1">
            <div className="mb-4">
              <ClipboardList className="w-12 h-12 text-red-500 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Personalized Plans</h3>
            <p className="text-gray-400 leading-relaxed">
              Get custom workout and nutrition plans crafted according to your
              body, schedule, and transformation goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
