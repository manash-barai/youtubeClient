"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import BasicSearch from "./BasicSearch";

const SearchArea = () => {
  const router = useRouter();
  const authCookie = Cookies.get("is_auth");

  const searchResult = async () => {

    if(authCookie !== undefined){
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_HOST}/api/search`,
          {
            method: "POST",
            credentials: "include",
          }
        );
  
        if (response.status===200) {
          const data = await response.json();
  
          router.push("/result");
        } else if (response.status === 201) {
          const data = await response.json();
          alert(data.message);
          router.push("/pricing");
        } else {
          alert("Something went wrong.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while making the API request.");
      }
    }else{
      router.push("/account/login");
    }
      
   
  };

  return (
    <div className="my-11">
      <h1 className="text-center text-2xl text-zinc-800 font-bold">
        Search over 150 million channels
      </h1>
      <p className="text-zinc-700 text-center text-sm">
        Use basic filters & see limited results for free or get a premium
        account to unlock all features.
      </p>
      <div className="mx-auto lg:px-28 sm:px-11 md:px-11 mt-8 flex flex-col gap-3 mb-3">
        <Accordion type="single" collapsible defaultValue="item-1">
          <AccordionItem value="item-1" className="shadow px-5 rounded">
            <AccordionTrigger className=" decoration-white">
              Basic Search
            </AccordionTrigger>
            <AccordionContent>
              <BasicSearch />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible defaultValue="item-1">
          <AccordionItem value="item-1" className="shadow px-5 rounded">
            <AccordionTrigger className=" decoration-white">
              Basic Search
            </AccordionTrigger>
            <AccordionContent>
              <BasicSearch />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="flex justify-center">
        <button
          className="bg-red-700 px-7 py-3 text-white rounded font-semibold flex searchButton"
          onClick={searchResult}
        >
          See Results
          <span className="ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M15 7.83398L20 12.834L15 17.834"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M5 12.834L20 12.834"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default SearchArea;
