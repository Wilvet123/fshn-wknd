import React from 'react'
import { FaFacebook, FaTwitter, FaLinkedinIn, FaInstagram} from "react-icons/fa";

const Socials = () => {
  return (
    <div className='absolute md:right-10 right-2 z-20 top-[269px]'>
        <ul className='  flex flex-col gap-8 '>
            <li ><a href='' target="_blank"><FaTwitter size={25} className='hover:text-orange-600'/></a></li>
            <li ><a href='' target="_blank"><FaInstagram size={25} className='hover:text-orange-600'/></a></li>
            <li><a href='' target="_blank"><FaLinkedinIn size={25} className='hover:text-orange-600'/></a></li>
            <li ><a href=''><FaFacebook size={25} className='hover:text-orange-600 duration-500'/></a></li>
        </ul> 
    </div>
  )
}

export default Socials