import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";

import bgImage from "@/assets/BloodDrop.png";
import member1Photo from "@/assets/person1.jpg";
import member2Photo from "@/assets/person2.jpg";
import member3Photo from "@/assets/person3.jpg";

const TeamInformation = () => {
  const teamMembers = [
    {
      name: "Alex Johnson",
      position: "Lead Blood Donation Advocate",
      email: "alex.johnson@example.com",
      photo: member1Photo,
    },
    {
      name: "Samantha Carter",
      position: "Community Engagement Director",
      email: "samantha.carter@example.com",
      photo: member2Photo,
    },
    {
      name: "Ryan Matthews",
      position: "Outreach Coordinator",
      email: "ryan.matthews@example.com",
      photo: member3Photo,
    },
    {
      name: "Emily Davis",
      position: "Creative Graphic Designer",
      email: "emily.davis@example.com",
      photo: member3Photo,
    },
    {
      name: "David Brown",
      position: "Volunteer Coordinator",
      email: "david.brown@example.com",
      photo: member1Photo,
    },
    {
      name: "Laura Wilson",
      position: "Support Services Specialist",
      email: "laura.wilson@example.com",
      photo: member2Photo,
    },
  ];

  return (
    <div className="bg-gradient-to-br from-red-800 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="divider my-12">
          <h1 className="text-3xl font-extrabold border-2 text-green-500 border-white p-4">
            Our Core Values
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center text-center transition-transform hover:scale-105"
            >
              <div className="relative w-32 h-32">
                <Image
                  src={member.photo}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-lg text-gray-700 mb-4">{member.position}</p>
                <div className="flex justify-center space-x-4">
                  <a
                    href={`mailto:${member.email}`}
                    className="text-indigo-600 hover:text-indigo-800"
                  >
                    <FaEnvelope className="text-xl" />
                  </a>
                  <FaFacebookF className="text-2xl text-indigo-600 hover:text-indigo-800" />
                  <FaTwitter className="text-2xl text-indigo-600 hover:text-indigo-800" />
                  <FaLinkedinIn className="text-2xl text-indigo-600 hover:text-indigo-800" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamInformation;
