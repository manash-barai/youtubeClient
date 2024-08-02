import React from "react";
import Plans from "./components/LandingPage/Plans";
import HeroSection from "./components/LandingPage/HeroSection";
import SearchArea from "./components/LandingPage/SearchArea";
import IntroVideo from "./components/LandingPage/IntroVideo";
import ParkingWorks from "./components/LandingPage/ParkingWorks";
import FilterRequirement from "./components/LandingPage/FilterRequirement";
import StartChat from "./components/LandingPage/StartChat";

const page = () => {

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
