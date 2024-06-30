'use client'
import NewHeroImage from "@/assets/BloodDonation.png"; // Update with the new image path
import bgImg from "@/assets/bg.jpg";
import Image from "next/image";
import SearchButton from "../SearchDonar/SearchButton";
import { useState } from "react";

const HeroSection = () => {
  const [bgColor, setBgColor] = useState("#F9FAFB");

  return (
    <div
      className="relative hero min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImg.src})`, backgroundColor: bgColor }}
    >
      <div className="absolute inset-0 bg-white bg-opacity-80 backdrop-blur-sm"></div>

      <div className="relative hero-content flex flex-col lg:flex-row items-center justify-center lg:justify-between px-4 py-8 lg:px-24 lg:py-16">
        <div className="flex-shrink-0 w-full lg:w-2/5 mb-10 lg:mb-0">
          <Image
            src={NewHeroImage}
            alt="Hero Image"
            layout="responsive"
            className="lg:mb-20"
            width={500}
            height={400}
          />
        </div>
        <div className="text-center lg:text-left max-w-2xl">
          <h1 className="text-3xl lg:text-5xl font-semibold text-gray-800">
            Be The Lifeline, Donate Blood
          </h1>
          <h2 className="text-4xl lg:text-6xl font-bold my-3 text-purple-800">
            Save Lives Today!
          </h2>
          <p className="my-5 text-gray-900">
            Your blood donation is a lifeline of hope. Join us in saving lives
            and spreading hope across communities. Each drop counts towards
            making a difference that lasts a lifetime.
          </p>
          
          <SearchButton />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
