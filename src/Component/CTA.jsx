import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section
      id="cta"
      className="py-24 px-4 bg-gradient-to-r from-[#ff4d4d] to-[#b30000] text-white text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl font-extrabold mb-6 drop-shadow-lg"
      >
        Transform Your Body. Transform Your Life.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-lg sm:text-xl mb-10 font-medium opacity-90"
      >
        Join today and get a <span className="font-bold">7-Day Free Pass</span> — No commitment.
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="px-10 py-4 text-lg font-bold rounded-full bg-black text-[#ff4d4d] shadow-[0_0_20px_rgba(0,0,0,0.7)] hover:bg-[#1a1a1a] transition-all duration-300"
      >
        Join Now
      </motion.button>
    </section>
  );
}