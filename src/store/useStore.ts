"use client";

import create from "zustand";
import { useEffect } from "react";
import { Country, Profile, Plan } from "../type"; // Ensure types are correctly imported

interface StoreState {
  profile: Profile;
  plans: Plan[];
  country: Country[];
  users: Profile[];
  
  setProfile: (profile: Profile) => void;
  setPlans: (plans: Plan[]) => void;
  setCountry: (country: Country[]) => void;
  setUsers: (users: Profile[]) => void;

  fetchData: () => void; // New function to fetch data
}

export const useStore = create<StoreState>((set) => ({
  profile: { _id: "", name: "", email: "", role: "", planId: "", profilePicture: "" },
  plans: [],
  country: [],
  users: [],

  setProfile: (profile) => set({ profile }),
  setPlans: (plans) => set({ plans }),
  setCountry: (country) => set({ country }),
  setUsers: (users) => set({ users }),

  fetchData: async () => {
    try {
      // Replace these with your actual API calls
      // const profileResponse = await fetch("/api/profile");
      const plansResponse = await fetch(`${process.env.NEXT_PUBLIC_SERVER_HOST}/api/plan`);
      const countryResponse = await fetch(`${process.env.NEXT_PUBLIC_SERVER_HOST}/api/country`);
      
      const plans = await plansResponse.json();
      const country = await countryResponse.json();
      // const users = await usersResponse.json();

      set({ country ,plans});
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
}));

