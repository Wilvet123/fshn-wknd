import React from 'react'
import FAQ from '../components/FAQ'

const Contact = () => {
  return (
    <div>
         <div className='flex gap-7 justify-center items-center h-screen px-7 shadow-xl m-20'>
        {/* Contact Form */}
        <div className='w-[50%] px-20'>
            <h1 className='text-4xl font-semibold my-4'>Chat With Us</h1>
            <p className='my-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                 Repellendus sequi porro perspiciatis. Ipsa nobis quibusdam sint
                  dolor necessitatibus itaque similique?</p>
            <form className='flex flex-col gap-4'>
                <input type="text"  placeholder='Full Name' className='outline-none border-b-2 border-gray-200 pb-2'/>
                <input type="email" name="" id="" placeholder='Email' className='outline-none border-b-2 border-gray-200 pb-2'/>
                <input type="number" name="" id="" placeholder='+234' className='outline-none border-b-2 border-gray-200 pb-2' />
                <button type="submit" className='px-3 w-64 font-semibold self-center mt-5 py-2 bg-orange-500 rounded-lg'>Get in touch</button>
            </form>
        </div>
        

        {/* Image Design */}
        <div className='w-[50%]'>
            <img src="https://images.pexels.com/photos/10376247/pexels-photo-10376247.jpeg?auto=compress&cs=tinysrgb&w=600"
             alt=""
             className='h-[90vh] object-cover rounded-lg ' />
        </div>
    </div>
    <FAQ/>
    </div>
   
  )
}

export default Contact