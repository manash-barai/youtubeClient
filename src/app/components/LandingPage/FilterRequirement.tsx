import Image from "next/image";
import Link from "next/link";
import React from "react";

const FilterRequirement = () => {
  return (
    <>
    <div className=" py-14 flex justify-center lg:px-28 md:px-11 sm:px-11 bg-zinc-200 items-center">
      <div className="grid lg:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 items-center ">
        <div className="flex flex-col gap-5">
          <h1 className="text-3xl leading-snug text-zinc-800 font-bold">
            Filter for your requirements across Millions of YouTubers
          </h1>
          <p className="text-zinc-700">
            With the free version of our tool, you can search using ten basic
            filters to find the biggest creators, right through to small,
            growing channels - also known as ‘micro influencers’. If you need
            more filters - like Subscriber Growth, Monthly Views, Topic
            searching and channel metadata like ‘Tags’ - you'll need{" "}
            <span className="text-red-700 hover:text-zinc-800">
              a Premium plan
            </span>{" "}
            . Each tier provides access to more filters for improved search,
            wider channel results and discounts on{" "}
            <span className="text-red-700 hover:text-zinc-800">
              data purchases
            </span>
            .
          </p>

          <Link
                  className="group  flex  text-sm font-semibold text-red-700 hover:text-zinc-800"
                  href={"/#"}
                  >
                  {" "}
                  Compare premium plans
                  <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      >
                      <path
                        d="M15.5 7L20.5 12L15.5 17"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        ></path>
                      <path
                        d="M5.5 12L20.5 12"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        ></path>
                    </svg>
                  </span>
                </Link>
        </div>
        <div className=" flex justify-end ">
            <Image className=""  src="/images/filtering-image.png" alt="filter-image" width={490} height={439}/>
        </div>
      </div>
    </div>
    <div className=" py-14 flex justify-center lg:px-28 md:px-11 sm:px-11 items-center">
      <div className="grid lg:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 items-center">
        <div className="flex flex-col gap-5">
          <h1 className="text-3xl leading-snug text-zinc-800 font-bold">
          How to Contact YouTube Creators at Scale
          </h1>
          <p className="text-zinc-700 text-sm leading-loose font-medium">

          To run a campaign yourself, use the Export button within search results and select 'Include Email'. Tick the 'Full Data' option if you want to export Social Media handles too, like Instagram. For a large Export (> 50k channels or >10k emails)  <span className="text-red-700 hover:text-zinc-800">Contact us</span> for bespoke pricing and search help across our 150m channels. We have over 800,000 creators to contact with many that have ‘opted in’ via our <span className="text-red-700 hover:text-zinc-800"> BrandAlerts.co</span>  platform. Alternatively we can handle the process for you as a ‘Campaign’ product. We achieve strong open rates for our clients and have run many successful YouTube campaigns for consumer products companies as well as small agencies. <br/>
          Visit our enterprise site at streamdna.com for our suite of data capabilities and marketing products.
           
           
             
           
          </p>

          <Link
                  className="group  flex  text-sm font-semibold text-red-700 hover:text-zinc-800"
                  href={"/#"}
                >
                  {" "}
                  Manage campaigns
                  <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                    >
                      <path
                        d="M15.5 7L20.5 12L15.5 17"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M5.5 12L20.5 12"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </span>
                </Link>
        </div>
        <div className="flex justify-end">
            <Image className=""  src="/images/exporting-image.png" alt="filter-image" width={490} height={439}/>
        </div>
      </div>
    </div>
                        </>
  );
};

export default FilterRequirement;
