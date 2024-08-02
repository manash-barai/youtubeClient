"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import Cookies from "js-cookie";


const OtpVerificationPage=({ params}:{ params: { email: string } }) => {
  const router = useRouter();

  const [otp, setOtp] = useState<string>("");
  const { email } = params;

  const decodedEmail = decodeURIComponent(email)
  const [message, setMessage] = useState<string>('');
  const authCookie = Cookies.get("is_auth");

  useEffect(()=>{
    if (authCookie !== undefined) {
      router.push("/")
    }
  },[])

  const handleSubmit = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_HOST}/api/user/verify-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: decodedEmail, otp }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        alert(data.message)
        router.push('/account/login')
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      setMessage('An error occurred. Please try again later.');
    }
  };
  const handleResendOtp = () => {
    alert(decodedEmail)

  };
  

  return (
    <div className="min-h-screen  py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-700 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg shadow-red-500 sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-semibold">OTP Verification</h1>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="otp"
                    name="otp"
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-700 text-[16px] focus:outline-none focus:border-red-600"
                    placeholder="OTP"
                  />
                  <label
                    htmlFor="otp"
                    className="absolute left-0 -top-3.5 text-re3d-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    OTP
                  </label>
                </div>
                <div className="relative">
                  <button
                    onClick={handleSubmit}
                    className="bg-red-500 text-white rounded-md px-2 py-1"
                  >
                    Verify OTP
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center mt-4">
            <button className="flex items-center bg-white border border-gray-300 rounded-lg shadow shadow-red-500 px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none"

            onClick={handleResendOtp}

            >
              <span>Resend OTP</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpVerificationPage;
