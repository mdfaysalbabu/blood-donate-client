'use client'
import { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaArrowRight,
  FaBed,
  FaHandHoldingHeart,
  FaHandsHelping,
  FaHeartbeat,
  FaStar,
} from "react-icons/fa";
import bgImage from "@/assets/bg.jpg"; 

const DonationTips = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
    });
  }, []);

  return (
    <div
      className="bg-cover bg-center py-12"
      style={{ backgroundImage: `url(${bgImage.src})` }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-red-700 mb-4">
            Donation Tips & Guidelines
          </h1>
          <p className="text-lg text-gray-600">
            Discover essential tips to make your blood donation experience
            positive and impactful.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="flex flex-col items-center bg-white bg-opacity-75 rounded-lg shadow-lg p-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            data-aos="fade-up"
          >
            <div className="text-5xl text-purple-600 mb-4">
              <FaHandsHelping />
            </div>
            <p className="text-lg text-gray-800">
              Organize group donations with friends and family to maximize
              impact.
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center bg-white bg-opacity-75 rounded-lg shadow-lg p-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            data-aos="fade-up"
          >
            <div className="text-5xl text-purple-600 mb-4">
              <FaHandHoldingHeart />
            </div>
            <p className="text-lg text-gray-800">
              Learn about the importance of blood donation and how it saves
              lives.
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center bg-white bg-opacity-75 rounded-lg shadow-lg p-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            data-aos="fade-up"
          >
            <div className="text-5xl text-purple-600 mb-4">
              <FaArrowRight />
            </div>
            <p className="text-lg text-gray-800">
              Maintain a healthy lifestyle by eating nutritious food and staying
              hydrated.
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center bg-white bg-opacity-75 rounded-lg shadow-lg p-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            data-aos="fade-up"
          >
            <div className="text-5xl text-purple-600 mb-4">
              <FaBed />
            </div>
            <p className="text-lg text-gray-800">
              Rest and relax after donating blood to ensure a smooth recovery.
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center bg-white bg-opacity-75 rounded-lg shadow-lg p-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            data-aos="fade-up"
          >
            <div className="text-5xl text-purple-600 mb-4">
              <FaHeartbeat />
            </div>
            <p className="text-lg text-gray-800">
              Raise awareness about blood donation in your community to inspire
              others.
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center bg-white bg-opacity-75 rounded-lg shadow-lg p-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            data-aos="fade-up"
          >
            <div className="text-5xl text-purple-600 mb-4">
              <FaStar />
            </div>
            <p className="text-lg text-gray-800">
              Volunteer at blood drives to support donation efforts and make a
              meaningful impact.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DonationTips;
