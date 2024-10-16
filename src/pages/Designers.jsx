import React, { useRef } from 'react';
import { designer } from '../data';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { RxExternalLink } from "react-icons/rx";


const Designers = () => {
    const imageSliderRef = useRef(null);  // Create a reference for the .design container

    const prevButton = () => {
        if (imageSliderRef.current) {
            const scrollAmount = imageSliderRef.current.clientWidth * -1;
            imageSliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const nextButton = () => {
        if (imageSliderRef.current) {
            const scrollAmount = imageSliderRef.current.clientWidth;
            imageSliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className='overflow-hidden'>
            <div>
                <div className='h-screen absolute  w-full top-0 left-0 bg-black/70 z-20'>
                    <h1 className='font-bold text-3xl text-white center'></h1>
                    <h1 className='font-bold text-3xl text-white center'>
                        <span>GTCO <span className='text-orange-500'>FSHN</span> WKND</span><br />
                        2022 HIGHLIGHTS
                    </h1>
                </div>
                <img className='h-screen w-full object-cover -z-20' src="https://images.pexels.com/photos/9509647/pexels-photo-9509647.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </div>

            {/* Card Section */}
            <div className='relative -top-20 left-20 z-30'>
                <h1 className="text-5xl font-bold -rotate-90 absolute -left-40 top-24">Designers</h1>
                <button onClick={prevButton} className=' absolute -left-5 top-[50%] z-50'><FaArrowCircleLeft size={30} /></button>
                <div ref={imageSliderRef} className='design w-[95%] overflow-x-scroll whitespace-nowrap scroll-smooth'>
                    {designer.map(design => (
                        <div key={design.id} className='inline-block px-2 cursor-pointer pt-2 pb-5 w-56 font-bold shadow-xl bg-white '>
                            <img
                                src={design.image}
                                alt=""
                                className='w-full h-56 grayscale hover:grayscale-0 transition duration-300 ease-in-out'
                            />
                            <div className='flex items-center justify-between pt-2'>
                            <h1 className=' text-lg'>{design.title}</h1>
                            <RxExternalLink size={20}/>

                            </div>
                        </div>
                    ))}
                </div>
                <button onClick={nextButton} className=' absolute right-20 top-[50%] z-50 hover:text-orange-500'><FaArrowCircleRight size={30} /></button>
            </div>

            <div className='flex items-center justify-center'>
                <iframe src="https://www.youtube.com/embed/CjAFxpRsx3M"
                    width="560" height="315"
                    title="" frameBorder="0"
                    allowFullScreen></iframe>
            </div>

            <h1>Masterclass</h1>
            <h1>Shopping</h1>
        </div>
    );
};

export default Designers;
