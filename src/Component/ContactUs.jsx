import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactUs() {
  return (
    <section id="contact" className="py-10 bg-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-4xl font-bold mb-14 text-gray-800"
        >
          Contact <span className="text-red-600">Us</span>
        </motion.h2>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* LEFT SECTION — CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-xl border border-gray-300"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Contact Info
            </h3>

            {/* Address */}
            <div className="flex items-start gap-4 mb-6">
              <MapPin className="w-6 h-6 text-red-600 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800">Gym Address</h4>
                <p className="text-gray-600">
                  PeakFit Gym, 2nd Floor, Omega Complex,
                  <br />
                  Gomti Nagar, Lucknow, Uttar Pradesh
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 mb-6">
              <Phone className="w-6 h-6 text-red-600 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800">Phone Number</h4>
                <p className="text-gray-600">+91 98765 43210</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-red-600 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800">Email</h4>
                <p className="text-gray-600">contact@peakfitgym.in</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SECTION — CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-xl border border-gray-300"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Get in Touch
            </h3>

            <form className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-gray-700 mb-1 font-medium">
                  Full Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-red-500"
                  placeholder="Enter your name"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-gray-700 mb-1 font-medium">
                  Phone Number <span className="text-red-600">*</span>
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-red-500"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Email - Optional */}
              <div>
                <label className="block text-gray-700 mb-1 font-medium">
                  Email (optional)
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-red-500"
                  placeholder="Enter your email"
                />
              </div>

              {/* Message - Optional */}
              <div>
                <label className="block text-gray-700 mb-1 font-medium">
                  Message (optional)
                </label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-red-500"
                  placeholder="Write your message..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="
                  w-full bg-red-600 hover:bg-red-700 text-white
                  font-semibold py-3 rounded-xl transition-all duration-300
                "
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
