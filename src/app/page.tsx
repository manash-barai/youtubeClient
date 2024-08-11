"use client"
import React, { useEffect } from "react";
import Plans from "./components/LandingPage/Plans";
import HeroSection from "./components/LandingPage/HeroSection";
import SearchArea from "./components/LandingPage/SearchArea";
import IntroVideo from "./components/LandingPage/IntroVideo";
import ParkingWorks from "./components/LandingPage/ParkingWorks";
import FilterRequirement from "./components/LandingPage/FilterRequirement";
import StartChat from "./components/LandingPage/StartChat";
import { useStore } from "@/store/useStore";
import { Country } from "@/type";

const page = () => {
  const { setCountry,country } = useStore();

  
  

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

  return (
    <div>
      <Plans />
      <div className="hero-section-bg">
        <HeroSection />
      </div>
      <SearchArea />
      <IntroVideo/>
      <ParkingWorks/>
      <FilterRequirement/>
      <StartChat/>
    </div>
  );
};

export default page;
