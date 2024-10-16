import React from 'react'
import heroimg from '../assets/about-us/hero-image2.jpg'
import heroimg2 from '../assets/about-us/hero-image1.jpg'
import heroimg3 from '../assets/about-us/hero-image3.jpg'
import heroimg4 from '../assets/about-us/hero-img4.jpg'
import Highlights from './Highlights'
import ChangingBg from '../components/ChanginBg'

const About = () => {
  return (
    <div className='mt-20'>
        <div className='h-screen'>
          <ChangingBg/>
        {/* <h1 className='font-poppins text-7xl font-bold text-center relative -bottom-5 '>About Us </h1> */}
        <div>
            {/* <img src={heroimg} alt="" className='w-96 h-64 object-cover rounded-xl' /> */}
            <p className='flex justify-center items-center relative -top-40
             mx-20 text-center font-semibold mt-7 px-20 py-12 bg-orange-400 rounded-lg'>
            The Guaranty Trust Fashion Weekend is a consumer-focused fair and free 
            business platform designed to showcase the best of Africa’s Fashion 
            to a global audience whilst promoting the effervescent enterprise of the 
            continents growing fashion industry.
            </p>
        </div>
        {/* <div className='flex gap-5 justify-center mt-9'>
            <img src={heroimg2} className='h-48 w-48 rounded-full object-cover' />
            <img src={heroimg} alt="" className='w-48 h-48 object-cover rounded-xl' />
            <div className='h-48 w-48 rounded-full bg-orange-600' ></div>
            <img src={heroimg3} alt="" className='w-48 h-48 object-cover rounded-xl' />
            <img src={heroimg4} alt="" className='h-48 w-48 rounded-full object-cover'/>
        </div> */}
      

        </div>
        

        <section className='flex mt-12 gap-12 relative px-20 pt-32'>
            <div className='w-[50%] sticky top-0 h-[90%]'>
            <img src={heroimg2} alt=""  />
            </div>
            <div className='w-[50%] mt-12 leading-9 overflow-y-auto'>
                <p>
                Created in 2016, The Guaranty Trust Fashion Weekend has become 
                one of the continent's leading platforms for showcasing Africa’s 
                Finest and promoting real commerce for small businesses in the fashion industry.
                </p><br></br>
                <p>
                This year, the Guaranty Trust Fashion Weekend is scheduled to hold on 
                November 9th and 10th, 2024. The two-day event will feature fashion-leaders
                 and industry experts from around the world while providing hundreds of 
                 indigenous small fashion businesses with the opportunity to expand their
                  online presence, reach new markets, and position their businesses for
                   sustainable growth.
                </p><br></br>
                <p>
                In addition to its innovative fashion retail experiences, the 2024 Guaranty 
                Trust Fashion Weekend will feature a series of online masterclasses facilitated
                 by renowned fashion industry experts. A “must-attend” for entrepreneurs and
                  fashion enthusiasts, the masterclasses have been designed to deliver the same
                   quality in content and engagement as previous years, through interactive 
                   webinars that will focus on exploring new and exciting ways to build and 
                   sustain fashion brands in these times and the future.
                </p><br></br>
                <p>
                The Runway Show will also keep its place at the 2024 GTCO Fashion Weekend. 
                Designed with current realities in mind, the Runway Show will feature a carefully
                 curated ensemble of bold and enthralling fashion statements by Africa’s
                  Finest Fashion Brands.
                </p>
            </div>
        </section>
        <Highlights/>

    </div>
  )
}

export default About