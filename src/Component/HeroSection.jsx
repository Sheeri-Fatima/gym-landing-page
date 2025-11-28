// Hero.jsx
// Modern Hero Section with typing effect + gradient overlay + responsive layout
// Put in: src/components/Hero.jsx
// Use library: react-typed (install first: npm install react-typed)
// Usage: <Hero />

import React from "react";
import { ReactTyped } from "react-typed";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center text-center text-white"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=2070&auto=format&fit=crop')",
        }}
      ></div>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-4">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
          Transform Your
          <br />
          <span className="text-red-500">
            <ReactTyped
              strings={["Strength", "Fitness", "Body"]}
              typeSpeed={80}
              backSpeed={80}
              loop
            />
          </span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto">
          Join the most advanced training center designed for those who want to
          build a stronger, healthier, and better version of themselves.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#join"
            className="px-8 py-3 rounded-xl bg-red-600 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
          >
            Join Now
          </a>

          <a
            href="#services"
            className="px-8 py-3 rounded-xl border border-white/40 text-white font-semibold backdrop-blur-md hover:bg-white/20 transition"
          >
            Explore Programs
          </a>
        </div>
      </div>
    </section>
  );
}
