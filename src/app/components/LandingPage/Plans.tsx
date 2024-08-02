import Link from "next/link";
import React from "react";

const Plans = () => {
  return (
    <div className=" plan-bg max-w-[100%] mx-[auto] px-[12px] py-[12px] text-center w-full text-black-100">
      <div className="md:w-7/12 sm:w-full m-auto flex flex-col md:flex-row gap-[14px] md:gap-[20px] justify-center items-center font-semibold">
        <p className="text-sm	">
          Get the Upgraded ChannelCrawler Power Plan for $1000 Annually! Use
          code POWER1000. Offer ends in 6 days 6 hours 36 minutes 19 seconds
        </p>
        <span className="h-[23px] w-[1px] bg-black hidden md:!flex"></span>
        <div className="flex gap-2 w-[25%]">
          <Link
            href={"/#"}
            className="flex gap-[4px] items-center text-black-100 hover:underline"
          >
            <span>Learn More</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="21"
              viewBox="0 0 16 17"
              fill="none"
              className="-rotate-45"
            >
              <path
                d="M2.66666 7.9063V9.23964H10.6667L6.99999 12.9063L7.94666 13.853L13.2267 8.57297L7.94666 3.29297L6.99999 4.23964L10.6667 7.9063H2.66666Z"
                fill="#181818"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Plans;
