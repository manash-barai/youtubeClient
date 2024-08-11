// store/useStore.ts
import create from 'zustand';
import {Country} from "../type"
export interface Profile {
  _id: string;
  name: string;
  email: string;
  role:string;
  planId:string;
  profilePicture?:string;
  is_verified?:boolean;
  createdAt?: string;
  // Add other profile fields as needed
}


interface Plan {
  planTitle: string;
  pricePerMonth: number;
  planDetails: string[];
  planId: string;
  _id:String
}


interface StoreState {
  profile: Profile;
  setProfile: (profile: Profile) => void;
  
  plans: Plan[];
  setPlans: (plans: Plan[]) => void;
  country:Country[];
  setCountry: (country: Country[]) => void;
  users: Profile[];
  setUsers: (users: Profile[]) => void;
}

export const useStore = create<StoreState>((set) => ({
  profile: { _id: '', name: '', email: '',role:"",planId:"",profilePicture:""},
  
  setProfile: (profile) => set({ profile }),

  plans: [],
  setPlans: (plans) => set({ plans }),


  country: [],
  setCountry: (country) => set({ country }),

  users: [],
  setUsers: (users) => set({ users }),
}));
