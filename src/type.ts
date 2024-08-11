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
   id:number;
   country:string
  }