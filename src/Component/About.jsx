import React from "react";
import { motion } from "framer-motion";

export default function AboutGym() {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-xl border-4 border-white bg-white">
            <img
              src="https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1000"
              alt="Gym Trainer"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Right Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Transform Your Body & Mind With <span className="text-red-600">Expert Fitness</span>
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Our gym provides top-tier training programs, modern equipment, and
            certified trainers to help you reach your full potential. Whether
            you're a beginner or an athlete — we help you grow stronger.
          </p>

          {/* Stats Section */}
          <div className="grid grid-cols-2 gap-6 pt-4">
            {/* Stat 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-md border text-center"
            >
              <h3 className="text-4xl font-bold text-red-600">150+</h3>
              <p className="text-gray-700 font-medium">Active Clients</p>
            </motion.div>

            {/* Stat 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-md border text-center"
            >
              <h3 className="text-4xl font-bold text-red-600">20+</h3>
              <p className="text-gray-700 font-medium">Certified Trainers</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
