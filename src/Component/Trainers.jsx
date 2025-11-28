import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter } from "lucide-react";

const trainers = [
  {
    name: "Arjun Mehta",
    role: "Strength Coach",
    image: "https://i.pravatar.cc/300?img=22",
  },
  {
    name: "Sara Khan",
    role: "Yoga & Flexibility",
    image: "https://i.pravatar.cc/300?img=47",
  },
  {
    name: "Karan Singh",
    role: "CrossFit Expert",
    image: "https://i.pravatar.cc/300?img=52",
  },
];

export default function Trainers() {
  return (
    <section id="trainers" className="py-20 bg-[#1a1a1a] text-[#f5f5f5]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-4xl font-bold mb-14 text-[#ff4d4d] drop-shadow-[0_0_10px_#ff4d4d]"
        >
          Meet Our Trainers
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {trainers.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1a1a1a] p-6 rounded-2xl border border-transparent hover:border-[#ff4d4d] transition-all duration-300 hover:shadow-[0_0_18px_#ff4d4d] group"
            >
              <div className="overflow-hidden rounded-xl mb-5">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-64 object-cover rounded-xl transform group-hover:scale-110 transition-all duration-500"
                />
              </div>

              <h3 className="text-2xl font-semibold text-[#ff4d4d]">{t.name}</h3>
              <p className="text-[#f5f5f5]/80 mb-4">{t.role}</p>

              <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <a href="#" className="hover:text-[#ff4d4d] transition"> <Facebook size={20} /> </a>
                <a href="#" className="hover:text-[#ff4d4d] transition"> <Instagram size={20} /> </a>
                <a href="#" className="hover:text-[#ff4d4d] transition"> <Twitter size={20} /> </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
