'use client';

import userImg from '@/assets/person1.jpg';
import ProfileUpdateModal from '@/components/ProfileUpdateModal/ProfileUpdateModal';
import { useGetMYProfileQuery } from '@/redux/api/userApi';
import Image from 'next/image';
import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaHeart, FaClock } from 'react-icons/fa';

const MyProfile = () => {
  const { data, isLoading } = useGetMYProfileQuery('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleUpdateProfileClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="w-full bg-gray-100 min-h-screen py-6">
      <div className="w-full bg-purple-600 p-6 shadow-xl shadow-blue-200 rounded-lg mx-auto">
        <div className="relative rounded-full mx-auto w-32 h-32 flex justify-center items-center overflow-hidden">
          <Image
            src={userImg}
            alt="Profile Image"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <h2 className="text-2xl font-bold my-4 text-white text-center">
          {data?.name}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-blue-900 gap-6 p-6">
        <div className="p-4 bg-white rounded-md flex items-center shadow-md">
          <FaEnvelope className="text-xl text-blue-600 mr-3" />
          <span className="font-semibold">Email:</span> {data?.email}
        </div>

        <div className="p-4 bg-white rounded-md flex items-center shadow-md">
          <FaPhone className="text-xl text-blue-600 mr-3" />
          <span className="font-semibold">Phone:</span> {data?.phone}
        </div>

        <div className="p-4 bg-white rounded-md flex items-center shadow-md">
          <FaHeart className="text-xl text-blue-600 mr-3" />
          <span className="font-semibold">Blood Type:</span> {data?.bloodType}
        </div>

        <div className="p-4 bg-white rounded-md flex items-center shadow-md">
          <FaMapMarkerAlt className="text-xl text-blue-600 mr-3" />
          <span className="font-semibold">Location:</span> {data?.location}
        </div>

        <div className="p-4 bg-white rounded-md flex items-center shadow-md">
          <FaHeart className="text-xl text-blue-600 mr-3" />
          <span className="font-semibold">Donate Blood:</span>{' '}
          {data?.isDonateBlood ? 'Yes' : 'No'}
        </div>

        <div className="p-4 bg-white rounded-md flex items-center shadow-md">
          <FaClock className="text-xl text-blue-600 mr-3" />
          <span className="font-semibold">Availability:</span>{' '}
          {data?.availability ? 'Available' : 'Not Available'}
        </div>

        <div className="p-4 bg-white rounded-md shadow-md">
          <span className="font-semibold">Bio:</span> {data?.userProfile?.bio}
        </div>

        <div className="p-4 bg-white rounded-md shadow-md">
          <span className="font-semibold">Age:</span> {data?.userProfile?.age}
        </div>

        <div className="p-4 bg-white rounded-md shadow-md">
          <span className="font-semibold">Last Donation Date:</span>{' '}
          {data?.userProfile?.lastDonationDate}
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <button
          className="btn bg-blue-600 hover:bg-blue-500 p-3 px-6 rounded-lg font-bold text-white shadow-md"
          onClick={handleUpdateProfileClick}
        >
          Update Profile
        </button>
      </div>
      {isModalOpen && (
        <ProfileUpdateModal
          setOpen={setIsModalOpen}
          id="updateProfileModal"
          title="Update Profile"
          showModalButtonLabel="Update Profile"
          defaultValues={{
            phone: data?.phone,
            location: data?.location,
            bio: data?.userProfile?.bio,
            age: data?.userProfile?.age,
            lastDonationDate: data?.userProfile?.lastDonationDate,
          }}
        />
      )}
    </div>
  );
};

export default MyProfile;
