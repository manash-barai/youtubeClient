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

  export interface Country {
   country:string
  }

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
  
  export interface PlanDetail {
    feature: string;
    description: string;
    _id:string
  }
  export interface Plan {
    _id: string;
    planTitle: string;
    description: string;
    pricePerMonth: number;
    planDetails: PlanDetail[];
    planId: number;
    popularity: boolean;
  }
  