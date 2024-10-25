import React from 'react'
import { masterclass } from '../data'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
const Masterclass = () => {
  return (
    <div className='flex flex-wrap gap-6'>
     {
        masterclass.map((master) =>(
            <div className='ml-10 relative  w-60 h-80 flex items-center justify-center flex-col rounded-xl shadow-md'>
     <span className='h-24 w-60 absolute left-0 top-0 bg-orange-500 -z-20 rounded-xl'>
     </span>
     <img src={master.image}
      alt="" 
      className='rounded-full w-28 h-28 object-cover'/>
              <div className='mt-4  text-center px-6'>
                <h1 className='font-semibold'>{master.name}</h1>
                <p className='text-sm'>{master.title}</p>

                <div  className='flex gap-3 mt-6 justify-center text-xl '>
                    <FaFacebook/>
                    <FaInstagram/>
                    <FaTwitter/>
                </div>
              </div>
     </div>
       
            
        ))
     } 

     
    </div>
  )
}

export default Masterclass