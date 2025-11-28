import { motion } from 'framer-motion';

const services = [
  {
    title: 'Personal Training',
    desc: 'One-on-one coaching tailored to your goals.',
    icon: '🏋️‍♂️',
  },
  {
    title: 'Strength Training',
    desc: 'Build muscle with guided strength programs.',
    icon: '💪',
  },
  {
    title: 'Cardio Programs',
    desc: 'High-intensity cardio workouts to burn fat.',
    icon: '🔥',
  },
  {
    title: 'Yoga & Flexibility',
    desc: 'Improve posture, flexibility, and mobility.',
    icon: '🧘‍♀️',
  },
  {
    title: 'Diet Coaching',
    desc: 'Custom diet plans for performance & health.',
    icon: '🥗',
  },
  {
    title: 'CrossFit Sessions',
    desc: 'Intense group workouts to boost endurance.',
    icon: '🏃‍♂️',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-[#1a1a1a] text-white">
      <div className="max-w-6xl mx-auto px-4">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-4xl font-bold mb-12 text-[#ff4d4d]"
        >
          Our Services
        </motion.h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#0f0f0f] p-8 rounded-2xl border border-transparent 
              hover:border-[#ff4d4d] hover:shadow-[0_0_15px_#ff4d4d] 
              transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-5xl mb-4">{service.icon}</div>

              <h3 className="text-2xl font-semibold mb-2 text-[#ff4d4d]">
                {service.title}
              </h3>

              <p className="text-[#f5f5f5]/70">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
