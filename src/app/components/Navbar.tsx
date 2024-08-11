"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Cookies from "js-cookie";
import { useStore } from "@/store/useStore";
import Image from "next/image";
interface Profile {
  _id: string;
  name: string;
  email: string;
  role: string;
  planId: string;
  profilePicture?: String;
}
export default function Navbar() {
  const { setProfile, profile } = useStore();
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  const handleClick = (item: string) => {
    setActive(item);
    setIsOpen(false); // Close the mobile menu when an item is clicked
  };
  const [isAuth, setIsAuth] = useState<string | undefined>(undefined);
  useEffect(() => {
    const authCookie = Cookies.get("is_auth");
    if (authCookie !== undefined) {
      setIsAuth(authCookie);

      const fetchData = async () => {
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_SERVER_HOST}/api/user/me`,
            {
              method: "GET",
              credentials: "include",
            }
          );

          const data = await response.json();
          setProfile({
            _id: data.user._id,
            name: data.user.name,
            email: data.user.email,
            role: data.user.roles,
            planId: data.user.planId,
            profilePicture: data.user.profilePicture,
          });
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    }
  }, [isAuth]);

  

  return (
    <nav className="shadow-md bg-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex">
            <div className="flex-shrink-0">
              <Link
                onClick={() => handleClick("")}
                href="/"
                className={`${
                  active === "" ? "text-white" : "navbar-text"
                } text-xl text-white`}
              >
                Logo
              </Link>
            </div>
            <div className="lgMenu md:items-center md:space-x-8 md:ml-10">
              <Link
                onClick={() => handleClick("pricing")}
                href="/pricing"
                className={`hover:text-white ${
                  active === "pricing" ? "text-white" : "navbar-text"
                }`}
              >
                Pricing
              </Link>
              <Link
                onClick={() => handleClick("help")}
                href="/help"
                className={`${
                  active === "help" ? "text-white" : "navbar-text"
                } hover:text-white`}
              >
                Help Center
              </Link>
              <Link
                onClick={() => handleClick("insights")}
                href="/insights"
                className={`${
                  active === "insights" ? "text-white" : "navbar-text"
                } hover:text-white`}
              >
                Insights
              </Link>
              <Link
                onClick={() => handleClick("contact")}
                href="/contact"
                className={`${
                  active === "contact" ? "text-white" : "navbar-text"
                } hover:text-white`}
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="lgMenu items-center space-x-4">
            {isAuth ? (
              <div className="flex gap-2">
                {profile && profile.profilePicture ? (
                  <img
                    src={profile.profilePicture}
                    alt=""
                    className="w-[30px] rounded-full h=[30px]"
                    rounded-full
                  />
                ) : (
                  <div className="bg-red-700 rounded-full w-7 h-7 flex justify-center items-center">
                    {profile && profile.name.slice(0,1)}

                  </div>
                )}

                {/* <button onClick={handleLogout}>{"My Profile"} </button> */}
                <Link href={"/dashBoard"} >{"My Profile"} </Link>
              </div>
            ) : (
              <>
                {" "}
                <Link
                  onClick={() => handleClick("login")}
                  href="/account/login"
                  className={`${
                    active === "login" ? "text-white" : "navbar-text"
                  } hover:text-white`}
                >
                  Login
                </Link>
                <Link
                  onClick={() => handleClick("signup")}
                  href="/account/signup"
                  className={`${
                    active === "signup" ? "text-white" : "navbar-text"
                  } hover:text-white`}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden text-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              onClick={() => handleClick("pricing")}
              href="/pricing"
              className="block px-3 py-2 rounded-md text-base font-medium navbar-text"
            >
              Pricing
            </Link>
            <Link
              onClick={() => handleClick("help")}
              href="/help"
              className="block px-3 py-2 rounded-md text-base font-medium navbar-text"
            >
              Help Center
            </Link>
            <Link
              onClick={() => handleClick("insights")}
              href="/insights"
              className="block px-3 py-2 rounded-md text-base font-medium navbar-text"
            >
              Insights
            </Link>
            <Link
              onClick={() => handleClick("contact")}
              href="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium navbar-text"
            >
              Contact
            </Link>

            {isAuth ? (
              <Link href="/user/dashBoard" className="text-white mr-4">
                My Profile   
              </Link>
            ) : (
              <>
                {" "}
                <Link
                  onClick={() => handleClick("login")}
                  href="/account/login"
                  className="block px-3 py-2 rounded-md text-base font-medium navbar-text"
                >
                  Login
                </Link>
                <Link
                  onClick={() => handleClick("signup")}
                  href="/account/signup"
                  className="block px-3 py-2 rounded-md text-base font-medium navbar-text"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
