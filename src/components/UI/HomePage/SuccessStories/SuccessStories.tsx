'use client'
import { useEffect } from "react";
import Image from "next/image";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import member1Photo from "@/assets/person1.jpg";
import member2Photo from "@/assets/person2.jpg";
import member3Photo from "@/assets/person3.jpg";
import { motion } from "framer-motion";

const SuccessStories = () => {
  const stories = [
    {
      name: "John Doe",
      designation: "Software Engineer",
      address: "New York, NY",
      story:
        "Donating blood saved my friend's life. It's an incredible feeling to know that I can make such a difference.",
      avatar: member1Photo,
    },
    {
      name: "Jane Smith",
      designation: "Nurse",
      address: "Los Angeles, CA",
      story:
        "As a nurse, I see the need for blood donations every day. Giving blood is a small act that can save lives.",
      avatar: member2Photo,
    },
    {
      name: "Robert Brown",
      designation: "Teacher",
      address: "Chicago, IL",
      story:
        "I started donating blood in college and have continued ever since. It's my way of giving back to the community.",
      avatar: member3Photo,
    },
    {
      name: "Emily Johnson",
      designation: "Student",
      address: "Houston, TX",
      story:
        "Donating blood is a simple and rewarding experience. Knowing that I'm helping others is the best part.",
      avatar: member1Photo,
    },
    {
      name: "Michael Davis",
      designation: "Firefighter",
      address: "Phoenix, AZ",
      story:
        "In my line of work, I see the urgent need for blood donations. I donate regularly to support those in need.",
      avatar: member2Photo,
    },
    {
      name: "Sarah Wilson",
      designation: "Doctor",
      address: "San Francisco, CA",
      story:
        "Donating blood is a vital and necessary act. It's quick, easy, and saves lives.",
      avatar: member3Photo,
    },
  ];

  useEffect(() => {
    // Initialize animations or effects here (e.g., using libraries like AOS)
    const AOS = require("aos");
    AOS.init({ once: true }); // Example: initialize AOS with options
  }, []);

  const quoteVariants = {
    hidden: { opacity: 0, rotate: -10, scale: 0.8 },
    visible: {
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative py-6 px-8 bg-cover bg-center">
      <div className="absolute inset-0 bg-white bg-opacity-90"></div>
      <div className="relative z-10">
        <div className="my-12 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-600 mb-4">
            Success Stories
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate="visible"
              variants={quoteVariants}
              className="p-6 rounded-lg bg-gradient-to-r from-red-800 to-red-900 text-white shadow-xl"
              data-aos="fade-up"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                    <Image
                      src={story.avatar}
                      alt={story.name}
                      width={64}
                      height={64}
                      className="rounded-full"
                    />
                  </div>
                  <div className="text-center">
                    <h2 className="text-xl font-bold">{story.name}</h2>
                    <p className="text-sm">{story.designation}</p>
                    <p className="text-sm">{story.address}</p>
                  </div>
                </div>
                <div className="text-center md:text-left mt-4 md:mt-0">
                  <p className="mb-4 text-lg">{story.story}</p>
                  <div className="flex justify-center md:justify-start">
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                  </div>
                </div>
              </div>
              <motion.div
                className="text-4xl absolute top-0 left-0 text-white opacity-50 transform -rotate-10 -translate-x-3 translate-y-3"
                variants={quoteVariants}
                initial="hidden"
                animate="visible"
              >
                <FaQuoteLeft />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
