import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Aman Verma",
    role: "Fitness Enthusiast",
    text: "PeakFit completely changed how I look at fitness. The trainers actually focus on form and technique — never felt stronger!",
    image: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "Neha Kulkarni",
    role: "Weight Loss Transformation",
    text: "I lost 11kg in just 3 months with their diet + cardio routine. The support here felt like family. Highly recommended!",
    image: "https://i.pravatar.cc/150?img=48",
  },
  {
    name: "Rohit Choudhary",
    role: "Cricket Athlete",
    text: "Their strength & agility training helped me improve my on-field performance. Best gym ambience in the city!",
    image: "https://i.pravatar.cc/150?img=15",
  },
  {
    name: "Simran Kaur",
    role: "Yoga & Wellness Member",
    text: "PeakFit’s yoga classes are calming yet powerful. My flexibility and posture have improved drastically!",
    image: "https://i.pravatar.cc/150?img=47",
  },
  {
    name: "Arjun Mehta",
    role: "CrossFit Athlete",
    text: "The CrossFit sessions are wild! High intensity, great community, and motivating coaches. PeakFit keeps me pumped every day.",
    image: "https://i.pravatar.cc/150?img=33",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-[#1a1a1a] text-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-4xl font-bold mb-14 text-[#ff4d4d] "
        >
          <span className="text-white">What Our </span>
          Members Say
        </motion.h2>

        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          pagination={{ clickable: true }}
          navigation={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={30}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="
                  bg-[#161616] p-8 rounded-2xl shadow-lg border border-transparent 
                  hover:border-[#ff4d4d] hover:shadow-[0_0_20px_#ff4d4d] 
                  transition-all duration-300 h-full
                "
              >
                {/* User Info */}
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#ff4d4d]"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-[#ff4d4d]">
                      {t.name}
                    </h3>
                    <p className="text-[#f5f5f5]/80 text-sm">{t.role}</p>
                  </div>
                </div>

                {/* Review */}
                <p className="text-[#f5f5f5]/90 leading-relaxed">“{t.text}”</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
