"use client"
import React, { useEffect } from 'react';
import { useStore } from '@/store/useStore'; // Adjust the path according to your project structure
import PlanCard from '../components/PlanCard';

const HomePage: React.FC = () => {
  const { plans, fetchData } = useStore();


  
  return (
    <div className="container mx-auto p-4 my-11">
      <h1 className="text-center text-3xl font-extrabold mb-8">Discovery tool plans</h1>
      <div className="flex justify-center mb-8">
        <button className="px-4 py-2 bg-gray-200 rounded-l-md">Monthly</button>
        <button className="px-4 py-2 bg-red-300 rounded-r-md">Annual (35% cheaper)</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-11">
        {plans.map((plan) => (
          <PlanCard key={plan._id} plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
