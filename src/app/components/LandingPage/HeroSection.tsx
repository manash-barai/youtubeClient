"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import companyList from "./../../data/companyLogo.json";

const HeroSection = () => {
  function windowsScroll(): void {
    
    window.scrollTo({
      top: 800,
      behavior: "smooth" 
    });
    
  }

  return (
    <div className=" container mx-auto lg:px-28 md:px-11 sm:px-11 ">
      <div className="grid grid-cols-1 md:grid-cols-2 py-10 md:py-20">
        <div className="flex flex-col gap-6 md:gap-11 md:pr-16">
          <div>
            <p
              style={{ background: "rgba(0,0,0,0.2)" }}
              className="inline-block py-1 px-3 rounded text-white font-semibold"
            >
              The world's largest YouTube channel database
            </p>
          </div>
          <h1 className="text-3xl lg:text-6xl font-bold text-center lg:text-left">
            Find, analyze and reach the right YouTube creators
          </h1>
          <p className="text-lg sm:text-center sm:text-sm lg:text-start text-zinc-900">
            Search for, analyze & contact the creators you need,
            <br /> find niche audiences or export large lists
          </p>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center md:justify-start">
            <button
              
              className="px-6 py-4 flex gap-2 bg-white rounded-lg font-semibold text-lg text-zinc-900 items-center justify-center"
              onClick={windowsScroll}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="31"
                viewBox="0 0 30 31"
                fill="none"
              >
                <g clip-path="url(#clip0_3325_30748)">
                  <rect
                    width="30"
                    height="30"
                    transform="translate(0 0.0742188)"
                    fill="white"
                  ></rect>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.1251 2.57422C11.4308 2.57436 9.76115 2.97967 8.25539 3.75634C6.74963 4.533 5.45144 5.65849 4.46912 7.03891C3.4868 8.41933 2.84884 10.0147 2.60846 11.6918C2.36808 13.3689 2.53226 15.0792 3.0873 16.6799C3.64233 18.2807 4.57213 19.7255 5.79912 20.8939C7.02611 22.0622 8.5147 22.9202 10.1407 23.3962C11.7667 23.8722 13.483 23.9525 15.1463 23.6304C16.8097 23.3082 18.3719 22.5929 19.7026 21.5442L24.2676 26.1092C24.5033 26.3369 24.8191 26.4629 25.1468 26.4601C25.4746 26.4572 25.7881 26.3258 26.0198 26.094C26.2516 25.8622 26.3831 25.5487 26.3859 25.221C26.3888 24.8932 26.2628 24.5775 26.0351 24.3417L21.4701 19.7767C22.7051 18.21 23.474 16.3272 23.6889 14.3439C23.9039 12.3605 23.5561 10.3567 22.6854 8.56184C21.8146 6.76693 20.4562 5.25341 18.7654 4.19451C17.0747 3.1356 15.12 2.57408 13.1251 2.57422ZM5.00007 13.1992C5.00007 11.0443 5.8561 8.97771 7.37983 7.45398C8.90356 5.93024 10.9702 5.07422 13.1251 5.07422C15.28 5.07422 17.3466 5.93024 18.8703 7.45398C20.394 8.97771 21.2501 11.0443 21.2501 13.1992C21.2501 15.3541 20.394 17.4207 18.8703 18.9445C17.3466 20.4682 15.28 21.3242 13.1251 21.3242C10.9702 21.3242 8.90356 20.4682 7.37983 18.9445C5.8561 17.4207 5.00007 15.3541 5.00007 13.1992Z"
                    fill="#181818"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_3325_30748">
                    <rect
                      width="30"
                      height="30"
                      fill="white"
                      transform="translate(0 0.0742188)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
              Start a free search
            </button>

            <Link href={"/pricing"} className="text-zinc-900 font-bold text-lg">
              Explore pricing
            </Link>
          </div>
        </div>
        <div style={{height:"460px"}} className="flex justify-center items-center h-auto ">
        <img
            src="/images/hero-image-2.png"
            alt="Logo"
            
          >
          </img>
         
        </div>
      </div>
      
      <div className="flex justify-between overflow-auto">
        <img src="/images/companyLogo/accenture-2.png" alt={"logo"} />
        <img src="/images/companyLogo/circle-bgreen.png" alt={"logo"} />
        <img src="/images/companyLogo/EMC-2.png" alt={"logo"} />
        <img src="/images/companyLogo/lumen-2.png" alt={"logo"} />
        <img src="/images/companyLogo/nordvpn-bgreen.png" alt={"logo"} />
        <img src="/images/companyLogo/superpeer-2.png" alt={"logo"} />
        <img src="/images/companyLogo/vimeo-bgreen.png" alt={"logo"} />
        <img src="/images/companyLogo/wscsports-bgreen.png" alt={"logo"} />
      </div>
    </div>
  );
};

export default HeroSection;
