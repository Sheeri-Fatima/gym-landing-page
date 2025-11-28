import { motion } from 'framer-motion';
import {
  Dumbbell,
  Flame,
  StretchHorizontal,
  Apple,
  User,
  Repeat,
  Bolt,
} from "lucide-react";

import { FaRunning } from "react-icons/fa";


const services = [
  {
    title: "Personal Training",
    desc: "One-on-one coaching tailored to your body, goals, and fitness level.",
    icon: <User className="w-12 h-12" />,
  },
  {
    title: "Strength Training",
    desc: "Build muscle and increase strength with structured programs.",
    icon: <Dumbbell className="w-12 h-12" />,
  },
  {
    title: "Cardio Programs",
    desc: "High-intensity cardio sessions designed to burn fat efficiently.",
    icon: <Flame className="w-12 h-12 " />,
  },
  {
    title: "Yoga & Flexibility",
    desc: "Improve mobility, posture, and overall flexibility with guided yoga.",
    icon: <StretchHorizontal className="w-12 h-12 " />,
  },
  {
    title: "Diet Coaching",
    desc: "Custom nutrition plans to support your performance & recovery.",
    icon: <Apple className="w-12 h-12 " />,
  },
  {
    title: "CrossFit Sessions",
    desc: "Intense group workouts to push limits and build endurance.",
    icon: <FaRunning className="w-12 h-12 " />,
  },
];


export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-4xl font-bold mb-6 text-gray-800"
        >
          Our <span className="text-red-600">Services</span>
        </motion.h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Train smarter and achieve more with PeakFit’s premium fitness programs
          designed for every athlete — beginners to advanced.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="
    group relative overflow-hidden 
    bg-gray-100 p-8 rounded-2xl shadow-lg border border-gray-300
    transition-all duration-500
  "
            >
              {/* VENOM GOOPY OVERLAY — controlled by clip-path */}
              <div className="venom-overlay pointer-events-none" />

              {/* Foreground Content */}
              <div className="relative z-10 transition-all duration-500">
                {/* Icon */}
                <div
                  className="
      mb-5 w-16 h-16 rounded-xl flex items-center justify-center shadow-sm
      bg-red-100 group-hover:bg-red-600 transition-all duration-500
    "
                >
                  <div className="text-red-500 group-hover:text-white transition-all duration-500">
                    {service.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold mb-2 text-gray-800 group-hover:text-white transition-colors duration-500">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 group-hover:text-gray-200 leading-relaxed transition-colors duration-500">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
   
}

<style>
  {`
@keyframes venomSpread {
  0% { clip-path: circle(0% at 50% 50%); }
  40% { clip-path: circle(60% at 50% 50%); }
  100% { clip-path: circle(140% at 50% 50%); }
}
`}
</style>;