"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import Cookies from "js-cookie";
import Image from "next/image";
import { useStore } from "@/store/useStore";
import { Country } from "@/type";

interface SignUpForm {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  country: string;
}


const SignUpPage: React.FC = () => {

  const { setCountry,country } = useStore();
  console.log(country);
  
  const countries=country.map(({country})=> country)

  const router = useRouter();
  const authCookie = Cookies.get("is_auth");

  useEffect(() => {
    if (authCookie !== undefined) {
      router.push("/")
    }
  }, [])
  useEffect(()=>{

    const fetchCountries = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_HOST}/api/country`);
        if (!response.ok) {
          throw new Error("Failed to fetch countries");
        }
        const data: Country[] = await response.json();
        setCountry(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  },[])
  const [formData, setFormData] = useState<SignUpForm>({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    country: "",
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCountries, setFilteredCountries] = useState<string[]>([]);

  useEffect(() => {
    // Filter countries based on search term
    setFilteredCountries(
      countries.filter(country =>
        country.toLowerCase().startsWith(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

 

  const handleGoogleLogin = () => {
    // Google login logic
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_HOST}/api/user/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          password: formData.password,
          password_confirmation: formData.confirmPassword,
          country: formData.country,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        alert("Please Check Your Email For OTP")
        router.push(`/account/verify-email/${formData.email}`)
      } else {
        const errorData = await response.json();
        console.error("Error:", errorData);
        alert("Registration failed: " + errorData.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred during registration");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-700 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg shadow-red-500 sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-semibold">Sign Up</h1>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-700 text-[16px] focus:outline-none focus:border-rose-600"
                    placeholder="Full Name"
                  />
                  <label
                    htmlFor="fullName"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Full Name
                  </label>
                </div>
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-700 text-[16px] focus:outline-none focus:border-rose-600"
                    placeholder="Email address"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Email Address
                  </label>
                </div>
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-700 text-[16px] focus:outline-none focus:border-rose-600"
                    placeholder="Password"
                  />
                  <label
                    htmlFor="password"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Password
                  </label>
                </div>
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-700 text-[16px] focus:outline-none focus:border-rose-600"
                    placeholder="Confirm Password"
                  />
                  <label
                    htmlFor="confirmPassword"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Confirm Password
                  </label>
                </div>
                <div className="relative mt-5">
                {formData.country===""?<>
                  <label
                    htmlFor="country"
                    className="text-[17px] text-slate-600"
                  >
                    Country
                  </label>
                  <input
                    type="text"
                     id="country"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search Country"
                    className="peer placeholder-transparent h-5 w-full border-b-2 border-gray-300 text-gray-700 text-[16px] focus:outline-none focus:border-rose-600"
                  /></>: <div className="text-[16px] flex justify-between "><p className="min-w-48 border-b border-slate-300"> {formData.country}  </p> <button className="bg-red-500 rounded text-white px-3" onClick={()=>{
                    setFormData((prevData) => ({
                      ...prevData,
                      country: "",
                    }))
                  }}  > x </button>    </div> }
                  {
                    filteredCountries.length > 0 && searchTerm!=="" && <div className="absolute end-0 top-0 z-20 flex flex-col w-auto p-3 text-[13px] bg-zinc-700 text-white h-92 border">
                      {filteredCountries.slice(0, 3).map((country, index) => (
                      <button key={index} value={ formData.country} className="hover:text-gray-500" onClick={()=>{
                        setFormData((prevData) => ({
                          ...prevData,
                          country: country,
                        }));
                        setFilteredCountries([])
                      }}>
                        {country}
                      </button>
                    ))}
                      

                      


                    </div>
                  }
                  
                </div>
                <div className="relative mt-4">
                  <button
                    onClick={handleSubmit}
                    className="bg-red-500 text-white rounded-md px-2 py-1"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <button className="flex items-center bg-white border border-gray-300 rounded shadow shadow-red-500 px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none gap-3" onClick={handleGoogleLogin}>
              <Image src={"/images/google.png"} alt="google" width={25} height={25} quality={100} />
              <span>Continue with Google</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
