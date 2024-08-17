// src/components/PlanCard.tsx
import React from 'react';
import { FaCircleCheck } from "react-icons/fa6";
import { SiBlockchaindotcom } from "react-icons/si";

interface PlanDetail {
  feature: string;
  description: string;
}

interface Plan {
  planTitle: string;
  description: string;
  pricePerMonth: number;
  planDetails: PlanDetail[];
  planId: number;
  popularity: boolean;
}

interface PlanCardProps {
  plan: Plan;
}

const PlanCard: React.FC<PlanCardProps> = ({ plan }) => {
    console.log(plan);
    
  return (
    <div className={` px-5 py-7 bg-white shadow-lg ${plan.popularity ? ' border-2 rounded border-red-500' : ' border border-red-500 rounded '}`}>

   
    <div >
      <h2 className="text-xl font-bold">{plan.planTitle}</h2>
      <p className="text-gray-500 mb-4">{plan.description}</p>
      <div className="text-3xl font-extrabold mb-4">${plan.pricePerMonth}/month</div>
      <ul className="mb-4 flex flex-col gap-3">
        {plan.planDetails.map((detail, index: number) => (
         <li
         key={index}
         className={`flex m-0 p-0 gap-3 items-start  ${detail.feature === 'bold' ? 'font-bold' : ''} ${detail.feature === 'block' ? 'text-gray-400 line-through' : ''}`}
       >
         <span className="flex mt-1">{detail.feature!=="block"&&<FaCircleCheck  className='text-blue-500' />} {detail.feature==="block"&&<SiBlockchaindotcom  className='text-zinc-800'  />} </span> 
         <span className="flex items-start">{detail.description}</span>
       </li>
        ))}
      </ul>
      <button className={`w-full py-2 mt-5 text-white ${plan.popularity ? 'bg-red-500' : 'bg-red-400'} rounded-md`}>
        {plan.planId === 1 ? 'Create free account' : 'Get this plan'}
      </button>
      </div>
    </div>
  );
};

export default PlanCard;
