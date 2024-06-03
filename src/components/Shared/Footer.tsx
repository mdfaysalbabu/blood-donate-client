import AppLogo from "@/assets/BloodDonation.png";
import Image from "next/image";
import Link from "next/link";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { RiUserFollowFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-red-700 text-white">
      <aside>
        <Image
          src={AppLogo}
          alt="Logo"
          height={100}
          width={100}
          className="bg-pink-100 rounded-full"
        />
        <p className="font-bold text-2xl text-yellow-400">Donate Blood</p>
        <ul className="list-inside list-disc">
          <li>Bridge the gap between donors and recipients.</li>
          <li>Provide lifesaving education and awareness.</li>
          <li>Facilitate the donation process.</li>
          <li>Create a positive impact on lives.</li>
          <li>Foster a culture of giving and compassion.</li>
          <li>
            Extend our reach to communities worldwide. Recognize and honor our
          </li>
        </ul>
        <p className="text-center font-semibold mt-2 text-yellow-400">
          Copyright © 2024 - All right reserved By Donate Blood
        </p>
      </aside>
      <nav>
        <h6 className="font-bold text-2xl text-yellow-400">
          Contact Information
        </h6>
        <div className="flex items-center mb-4">
          <FaEnvelope className="text-2xl mr-3 text-yellow-400" />
          <div>
            <h3 className="font-semibold text-lg">Email:</h3>
            <p>contact@ourorganization.com</p>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <FaPhone className="text-2xl mr-3 text-yellow-400" />
          <div>
            <h3 className="font-semibold text-lg">Phone:</h3>
            <p>+880123456789</p>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <FaMapMarkerAlt className="text-2xl mr-3 text-yellow-400" />
          <div>
            <h3 className="font-semibold text-lg">Address:</h3>
            <p>123 Donation St, Dhaka, Bangladesh</p>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <RiUserFollowFill className="text-2xl mr-3 text-yellow-400" />
          <div>
            <h3 className="font-semibold text-lg">Follow Us:</h3>
            <div className="flex space-x-4 mt-2">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-xl hover:text-red-700 transition duration-300" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-xl hover:text-red-700 transition duration-300" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-xl hover:text-red-700 transition duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <nav>
        <h6 className="font-bold text-2xl text-yellow-400">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
