"use client";

import user from "@/assets/user.png";
import useUserInfo from "@/hooks/useUserInfo";
import { logoutUser } from "@/services/actions/logoutUser";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { userInfo, setUserInfo } = useUserInfo();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleLogOut = () => {
    logoutUser(router);
    setUserInfo("");
    router.push("/");
  };

  return (
    <div className="navbar px-2 md:px-8 lg:px-16 bg-teal-700">
    <div className="navbar-start">
      <div className="dropdown lg:hidden">
        <div tabIndex={0} role="button" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-600"
            fill="none"
            viewBox="0 0 16 16"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-white rounded-lg text-gray-800 font-semibold">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/donors">All Donors</Link>
          </li>
          {isClient && userInfo?.email ? (
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
          ) : null}
        </ul>
      </div>
      <Link href="/">
        <h1 className="text-lg lg:text-3xl text-red-400 font-bold">
          Donate Blood
        </h1>
      </Link>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal text-white font-semibold">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/donors">All Donors</Link>
        </li>
        {isClient && userInfo?.email ? (
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
        ) : null}
      </ul>
    </div>
    <div className="navbar-end">
      {isClient && userInfo?.email ? (
        <p className="text-sm lg:text-lg text-white font-semibold">
          {userInfo?.email}
        </p>
      ) : null}
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <Image alt="Profile image" src={user} height={40} width={40} />
          </div>
        </div>
        <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-48"
          >
            {isClient && userInfo?.email ? (
              <>
                <li>
                  <Link href="/dashboard">My Profile</Link>
                </li>
                <li>
                  <a onClick={handleLogOut}>Logout</a>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link href="/login">Login</Link>
                </li>
                <li>
                  <Link href="/register">Register</Link>
                </li>
              </>
            )}
          </ul>
      </div>
    </div>
  </div>
  );
};

export default Navbar;
