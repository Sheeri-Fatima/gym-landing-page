import React from "react";
import { ArrowRight } from "lucide-react";

export default function FitFactoryAbout() {
  return (
    <div className="min-h-screen bg-gray-200 py-12 md:py-20 px-4 sm:px-6 lg:px-8" id="about" >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1591311630200-ffa9120a540f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGd5bSUyMGVxdWlwbWVudHxlbnwwfHwwfHx8MA%3D%3D"
                alt="Personal Training"
                className="w-full h-[500px] md:h-[600px] object-cover"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-lime-500/20 to-transparent"></div> */}
            </div>
            {/* Lime accent border */}
            {/* <div className="absolute -bottom-4 -left-4 w-full h-full border-4 border-lime-500 rounded-lg -z-10"></div> */}
          </div>

          {/* Right Content */}
          <div className="space-y-6 lg:pt-8">
            <div className="space-y-3">
              <p className="text-red-600 font-bold text-xl uppercase">
                About Us
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {/* Tailored Training, Real Results – Only at FitFactory */}
                Your Body, Your Journey — We Build the Plan That Builds You
              </h1>
            </div>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              At PeakFit Gym, we believe fitness should adapt to you — your
              goals, your lifestyle, and your pace. Our world-class training
              programs are designed to deliver maximum results through
              personalized guidance, science-backed workouts, and a motivating
              environment that pushes you to go further every day. Whether
              you're aiming to build muscle, lose fat, improve performance, or
              transform your overall fitness, our certified trainers craft a
              plan that works specifically for your body and your routine. With
              modern equipment, elite coaching, and flexible training options,
              PeakFit Gym helps you stay consistent, stay driven, and become the
              strongest, fittest version of yourself.
            </p>

            {/* Features List */}
            <ul className="space-y-3 pt-2">
              <li className="flex items-center text-gray-700 text-lg">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-4"></span>
                Muscle Growth
              </li>
              <li className="flex items-center text-gray-700 text-lg">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-4"></span>
                Fat Loss
              </li>
              <li className="flex items-center text-gray-700 text-lg">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-4"></span>
                Performance
              </li>
              <li className="flex items-center text-gray-700 text-lg">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-4"></span>
                Nutrition
              </li>
            </ul>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="bg-red-500 hover:bg-red-600 text-gray-200 font-semibold px-8 py-4 rounded-md transition-all inline-flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Know More
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
