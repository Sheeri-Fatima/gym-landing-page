import { motion } from "framer-motion";

const plans = [
  {
    name: "Basic",
    price: "₹999 / mo",
    features: ["Gym Floor Access", "Free Locker", "1 Trainer Session"],
    popular: false,
  },
  {
    name: "Pro",
    price: "₹1499 / mo",
    features: ["All Equipment", "Group Classes", "Diet Plan", "3 Trainer Sessions"],
    popular: true,
  },
  {
    name: "Elite",
    price: "₹2499 / mo",
    features: ["Unlimited Access", "Personal Trainer", "Custom Diet + Workout", "Sauna Access"],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-[#1a1a1a] text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-4xl font-bold mb-14 text-[#ff4d4d]"
        >
          Pricing Plans
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`p-8 rounded-2xl border transition-all duration-300 shadow-xl bg-[#0e0e0f] ${
                plan.popular
                  ? "border-[#ff4d4d] scale-105 shadow-[0_0_20px_#ff4d4d]"
                  : "border-gray-700 hover:border-[#ff4d4d] hover:shadow-[0_0_15px_#ff4d4d]"
              }`}
            >
              {plan.popular && (
                <p className="text-[#ff4d4d] font-semibold text-sm mb-2 uppercase tracking-wide text-center">
                  Most Popular
                </p>
              )}

              <h3 className="text-3xl font-bold text-center text-[#f5f5f5] mb-4">
                {plan.name}
              </h3>
              
              <p className="text-center text-4xl font-extrabold text-[#ff4d4d] mb-6">
                {plan.price}
              </p>

              <ul className="space-y-3 mb-8 text-[#f5f5f5]">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-[#ff4d4d]">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 rounded-lg bg-[#ff4d4d] text-white font-semibold hover:bg-red-600 transition-all duration-300"
              >
                Join Now
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}