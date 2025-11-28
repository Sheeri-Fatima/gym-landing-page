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

export default function Features() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const features = [
    {
      title: "Professional Trainers",
      desc: "Train under certified experts who guide you with perfect form and personalized workout plans.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-10 h-10 text-red-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 7.5l4.5 9 4.5-9m-9 0h9"
          />
        </svg>
      ),
    },
    {
      title: "Modern Equipment",
      desc: "Premium machines, advanced cardio tools, strength racks, and high-end fitness technology.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-10 h-10 text-red-500"
        >
          <path d="M3 9h4v6H3V9zm14 0h4v6h-4V9z" />
          <path
            fillRule="evenodd"
            d="M9 5a1 1 0 00-1 1v12a1 1 0 002 0v-3h4v3a1 1 0 102 0V6a1 1 0 00-1-1H9zm5 7h-4V7h4v5z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      title: "Personalized Plans",
      desc: "Get customized workout + diet plans based on your fitness goals and body requirements.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-10 h-10 text-red-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.862 4.487a2.249 2.249 0 113.182 3.182L7.06 20.653 3 21l.347-4.06L16.862 4.487z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white" data-aos="fade-up">
            Why Choose <span className="text-red-600">PeakFit</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-3" data-aos="fade-up" data-aos-delay="200">
            We provide everything you need to transform your fitness journey.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((f, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 200}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 flex flex-col items-center text-center hover:scale-[1.03] transition-transform"
            >
              <div className="mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {f.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-3">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
