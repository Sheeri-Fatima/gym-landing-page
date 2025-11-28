import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Aman Dev",
    role: "Fitness Enthusiast",
    text: "This gym completely transformed my fitness journey! Trainers are super supportive and classes are fire!",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Neha Singh",
    role: "Weight Loss Client",
    text: "Their diet + workout plan helped me lose 14kg in 4 months. Best decision ever!",
    image: "https://i.pravatar.cc/150?img=31",
  },
  {
    name: "Rohit Sharma",
    role: "Athlete",
    text: "Amazing equipment, great ambience, and powerful CrossFit sessions. Highly recommended!",
    image: "https://i.pravatar.cc/150?img=55",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-[#1a1a1a] text-[#f5f5f5]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-4xl font-bold mb-14 text-[#ff4d4d] drop-shadow-[0_0_10px_#ff4d4d]"
        >
          What Our Members Say
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-[#1a1a1a] p-8 rounded-2xl shadow-lg border border-transparent hover:border-[#ff4d4d] hover:shadow-[0_0_20px_#ff4d4d] transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#ff4d4d]"
                />
                <div>
                  <h3 className="text-xl font-semibold text-[#ff4d4d]">{t.name}</h3>
                  <p className="text-[#f5f5f5]/80 text-sm">{t.role}</p>
                </div>
              </div>
              <p className="text-[#f5f5f5]/90 leading-relaxed">“{t.text}”</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
