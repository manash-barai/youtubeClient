// store/useStore.ts
import create from 'zustand';

interface Profile {
  _id: string;
  name: string;
  email: string;
  role:string;
  planId:string;
  profilePicture?:string
  // Add other profile fields as needed
}

interface Plan {
  planTitle: string;
  pricePerMonth: number;
  planDetails: string[];
  planId: string;
  _id:String
}

interface User {
  _id: string;
  name: string;
  email: string;
  // Add other user fields as needed
}

interface StoreState {
  profile: Profile;
  setProfile: (profile: Profile) => void;
  
  plans: Plan[];
  setPlans: (plans: Plan[]) => void;

  users: User[];
  setUsers: (users: User[]) => void;
}

export const useStore = create<StoreState>((set) => ({
  profile: { _id: '', name: '', email: '',role:"",planId:"",profilePicture:""},
  
  setProfile: (profile) => set({ profile }),

  plans: [],
  setPlans: (plans) => set({ plans }),

  users: [],
  setUsers: (users) => set({ users }),
}));
