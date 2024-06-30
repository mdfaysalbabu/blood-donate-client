import AppLogo from "@/assets/BloodDonation.png";
import Image from "next/image";
import Link from "next/link";
import {
  FaEnvelope,
  FaFacebookSquare,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { RiUserFollowFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-red-800 to-red-900 text-white py-12 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="flex flex-col items-center lg:items-start space-y-6">
          <Image
            src={AppLogo}
            alt="Logo"
            height={60}
            width={60}
            className="rounded-full"
          />
          <p className="font-bold text-3xl text-yellow-400">Donate Blood</p>
          <p className="text-center lg:text-left">
            Life is in Your Veins: Share It! Be The Lifeline! <br /> Donate Blood,
            Save Lives!
          </p>
        </div>

        <nav className="space-y-6 lg:col-span-2 lg:flex lg:justify-between lg:items-start">
          <div className="space-y-4">
            <h6 className="font-bold text-2xl text-yellow-400 mb-3">Contact Information</h6>
            <div className="flex items-center">
              <FaEnvelope className="text-xl mr-3 text-yellow-400" />
              <div>
                <h3 className="font-semibold text-yellow-400">Email:</h3>
                <p className="text-white">faysal@faysalganization.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <FaPhone className="text-xl mr-3 text-yellow-400" />
              <div>
                <h3 className="font-semibold text-yellow-400">Phone:</h3>
                <p className="text-white">+8801797657407</p>
              </div>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-xl mr-3 text-yellow-400" />
              <div>
                <h3 className="font-semibold text-yellow-400">Address:</h3>
                <p className="text-white">110 Donation St,Thakurgaon, Bangladesh</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h6 className="font-bold text-2xl text-yellow-400 mb-3">Follow Us</h6>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookSquare className="text-3xl text-yellow-400 hover:text-red-700 transition duration-300" />
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-3xl text-yellow-400 hover:text-red-700 transition duration-300" />
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-3xl text-yellow-400 hover:text-red-700 transition duration-300" />
              </Link>
            </div>
          </div>
        </nav>
      </div>

      <div className="mt-10 text-center lg:text-left">
        <div className="border-t border-red-700 pt-6">
          <nav className="flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-4 lg:space-y-0">
            <div className="text-sm text-yellow-400">
              <p>&copy; 2024 Donate Blood - All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <Link href="/terms" className="link link-hover text-yellow-400">
                Terms of Use
              </Link>
              <Link href="/privacy" className="link link-hover text-yellow-400">
                Privacy Policy
              </Link>
              <Link href="/cookies" className="link link-hover text-yellow-400">
                Cookie Policy
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
