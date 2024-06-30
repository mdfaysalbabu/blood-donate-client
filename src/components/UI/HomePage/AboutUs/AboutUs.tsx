'use client'
import {
  FaDonate,
  FaHeartbeat,
  FaHandsHelping,
  FaUserFriends,
  FaRegLightbulb,
  FaRegCompass,
  FaMedal,
  FaStar,
  FaSun,
} from "react-icons/fa";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-10">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold my-6 text-gradient-to-r from-red-500 to-red-500 text-center text-red-700">
        Who We Are
      </h1>
      <p className="mb-10 mx-auto max-w-4xl text-xl text-gray-800 text-center leading-relaxed">
        At Lifeline Connect, our vision is to create a world where the gift of blood
        donation seamlessly connects to those in critical need. Through innovative
        outreach, dedicated support, and a commitment to excellence, we aim to
        foster a community of compassionate donors and grateful recipients.
      </p>
      <div className="bg-gradient-to-br from-red-700 to-indigo-900 text-center text-green-500 py-10">
        <div className="divider my-12">
          <h1 className="text-3xl font-extrabold border-2  border-white p-4">
            Our Core Values
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto max-w-5xl px-4">
          {[
            { icon: FaHandsHelping, text: "Empowering connections between donors and recipients." },
            { icon: FaHeartbeat, text: "Promoting vital health education and awareness." },
            { icon: FaDonate, text: "Streamlining the donation process for everyone." },
            { icon: FaUserFriends, text: "Building a supportive and caring community." },
            { icon: FaRegLightbulb, text: "Cultivating a spirit of innovation and empathy." },
            { icon: FaRegCompass, text: "Expanding our reach to impact more lives globally." },
            { icon: FaMedal, text: "Honoring the selfless acts of our donors." },
            { icon: FaStar, text: "Striving for unmatched excellence in all we do." },
            { icon: FaSun, text: "Illuminating lives with hope and kindness." },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg transform transition-all hover:scale-105"
              whileHover={{ scale: 1.1 }}
            >
              <item.icon className="text-6xl text-yellow-400 mb-4" />
              <p className="text-lg text-gray-900 font-medium">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
