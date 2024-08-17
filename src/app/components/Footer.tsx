"use client"
import { useStore } from '@/store/useStore'
import React, { useEffect } from 'react'

const Footer = () => {

  
    useEffect(()=>{
      fetchData()
    },[])


  const fetchData = useStore((state) => state.fetchData);

  return (

    <div className='py-4 sm:px-6 lg:px-8 bg-zinc-900 '>
        <p className='text-white font-semibold text-center'>
        @ Copy right Footer 2024
        

        </p>
      
    </div>
  )
}

export default Footer
