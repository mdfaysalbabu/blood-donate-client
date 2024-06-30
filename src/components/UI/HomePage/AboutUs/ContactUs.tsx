import contactImage from "@/assets/BloodDonation.png";
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

const ContactUs = () => {
  return (
    <div className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-12">
          Contact Us
        </h1>
        <div className="card card-side bg-gray-900 shadow-xl flex flex-col lg:flex-row mx-auto">
          <figure className="w-full lg:w-1/2">
            <Image
              src={contactImage}
              alt="Contact Image"
              layout="responsive"
              objectFit="cover"
              className="rounded-t-lg lg:rounded-l-lg lg:rounded-t-none"
              width={800}
              height={600}
            />
          </figure>
          <div className="card-body w-full lg:w-1/2 p-6 lg:p-12">
            <div className="divider divider-error mb-4">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-red-400 p-1 border-2 border-red-400">
                Contact Information
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3 text-white bg-gray-800 p-6 rounded-md">
              <div className="flex items-center mb-4">
                <FaEnvelope className="text-3xl text-red-400 mr-3" />
                <div>
                  <h3 className="text-xl font-semibold text-red-400">Email:</h3>
                  <p className="text-lg">faysal@faysalorganization.com</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <FaPhone className="text-3xl text-red-400 mr-3" />
                <div>
                  <h3 className="text-xl font-semibold text-red-400">Phone:</h3>
                  <p className="text-lg">+8801797657407</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <FaMapMarkerAlt className="text-3xl text-red-400 mr-3" />
                <div>
                  <h3 className="text-xl font-semibold text-red-400">Address:</h3>
                  <p className="text-lg">110 Thakurgaon, Bangladesh</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <RiUserFollowFill className="text-3xl text-red-400 mr-3" />
                <div>
                  <h3 className="text-xl font-semibold text-red-400">Follow Us:</h3>
                  <div className="flex space-x-4">
                    <Link
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebook className="text-4xl text-red-400 hover:text-red-600 transition duration-300" />
                    </Link>
                    <Link
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTwitter className="text-4xl text-red-400 hover:text-red-600 transition duration-300" />
                    </Link>
                    <Link
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram className="text-4xl text-red-400 hover:text-red-600 transition duration-300" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
