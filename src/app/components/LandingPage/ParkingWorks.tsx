"use client";
import Link from "next/link";
import React, { useState } from "react";

interface ISearchCategory {
  id: number;
  price: number;
  searchTitle: string;
  about: string;
  priceMode?: string | null;
  buttonName: string;
}
const ParkingWorks = () => {
  const [searchCategory, setSearchCategory] = useState<ISearchCategory[]>([
    {
      id: 1,
      price: 0,
      searchTitle: "Basic Search",
      about: "Use basic filters & see up to 40 search results for free",
      buttonName: "Start a search",
      priceMode: null,
    },
    {
      id: 2,
      price: 35,
      searchTitle: "Premium Search",
      about:
        "Purchase a premium plan to use advanced search filters with fewer limitations",
      buttonName: "Compare plans",
      priceMode: "mo",
    },
    {
      id: 3,
      price: 35,
      searchTitle: "Premium Search",
      about:
        "Purchase a premium plan to use advanced search filters with fewer limitations",
      buttonName: "Compare plans",
      priceMode: "email",
    },
  ]);

  return (
    <div className="lg:px-28 md:px-11 sm:px-11 py-11 mt-3 ">
      <h1 className="text-center  text-zinc-800 font-bold text-3xl">
        How our pricing works
      </h1>

      <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 gap-11  justify-center flex my-7 ">
        {searchCategory.map((item: ISearchCategory) => {
          return (
            <div
              key={item.id}
              className="border drop-shadow-lg rounded p-7 bg-white flex flex-col gap-10 "
            >
              <div className="flex flex-col item-center flex-wrap gap-4">
                <p className="bg-orange-200 py-1 px-2 text-center m-auto text-zinc-800 inline-block rounded-full">
                  {item.price === 0
                    ? "Free"
                    : `${item.price}/${item.priceMode && item.priceMode}`}{" "}
                </p>
                <h2 className="text-center text-2xl font-bold">
                  {" "}
                  {item.searchTitle}{" "}
                </h2>
                <p className="text-center text-sm  leading-loose">
                  {item.about}{" "}
                </p>
              </div>

              <div className="flex justify-start">
                <Link
                  className="group text-center flex m-auto text-sm font-semibold text-red-700 hover:text-zinc-800"
                  href={"/#"}
                >
                  {" "}
                  {item.searchTitle}
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ParkingWorks;
