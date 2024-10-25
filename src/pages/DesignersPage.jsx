import React, { useRef, useState } from 'react';
import { designer } from '../data';  // Make sure your designer array contains valid collection data
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { RxExternalLink } from "react-icons/rx";
import Masterclass from '../components/Masterclass';

const DesignersPage = () => {
    const [collection, setCollection] = useState(null);
    const imageSliderRef = useRef(null);

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
                <div className='h-screen absolute w-full top-0 left-0 bg-black/70 z-20'>
                    <h1 className='font-bold text-3xl text-white center'></h1>
                    <h1 className='font-bold text-3xl text-white center'>
                        <span>GTCO <span className='text-orange-500'>FSHN</span> WKND</span><br />
                        2022 HIGHLIGHTS
                    </h1>
                </div>
                <img className='h-screen w-full object-cover -z-20' src="https://images.pexels.com/photos/9509647/pexels-photo-9509647.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </div>

        <div className='flex gap-16'>

       
            {/* Card Section */}
            <div className='relative  left-20 z-30'>
                <h1 className="text-5xl font-bold -rotate-90 absolute -left-40 top-24">Designers</h1>
                {/* <button onClick={prevButton} className=' absolute -left-5 top-[50%] z-50'><FaArrowCircleLeft size={30} /></button> */}
                <div ref={imageSliderRef} className='flex gap-4 flex-col w-[95%]  whitespace-nowrap scroll-smooth'>
                    {designer.map((design, index) => (
                        <div key={design.id} className='inline-block px-2 cursor-pointer pt-2 pb-5 w-56 font-bold shadow-xl bg-white'>
                            <img
                                src={design.image}
                                alt="designer"
                                className={`w-full h-56 ${index ? 'grayscale' : 'grayscale-0'} hover:grayscale-0 transition duration-300 ease-in-out`}
                            />
                            <div className='flex items-center justify-between pt-2'>
                                <h1 className=' text-lg'>{design.title}</h1>
                                <RxExternalLink size={20} onClick={() => setCollection(design)} />
                            </div>
                        </div>
                    ))}
                </div>
                {/* <button onClick={nextButton} className=' absolute right-20 top-[50%] z-50 hover:text-orange-500'><FaArrowCircleRight size={30} /></button> */}
            </div>



            {/* Render Collection */}
            {collection ? (
                <div className='collection-details mt-10 px-20'>
                    <h2 className='text-2xl font-bold'>{collection.title} Collection</h2>
                    <div className='grid grid-cols-3 gap-4'>
                        {collection.collections && (
                            <>
                                <img src={collection.collections.img1} alt="collection image 1" className='w-full h-auto' />
                                <img src={collection.collections.img2} alt="collection image 2" className='w-full h-auto' />
                                <img src={collection.collections.img3} alt="collection image 3" className='w-full h-auto' />
                            </>
                        )}
                    </div>
                </div>
            ) : (
                <div className='mt-10 px-20'>
                    <h2 className='text-2xl font-bold'>John Doe Collection</h2>
                   <div className='grid grid-cols-3 gap-4'>
                        
                                <img src='https://images.pexels.com/photos/10370350/pexels-photo-10370350.jpeg?auto=compress&cs=tinysrgb&w=600' alt="collection image 1" className='w-full h-auto' />
                                <img src='https://images.pexels.com/photos/9052359/pexels-photo-9052359.jpeg?auto=compress&cs=tinysrgb&w=600' alt="collection image 2" className='w-full h-auto' />
                                <img src='https://images.pexels.com/photos/12527002/pexels-photo-12527002.jpeg?auto=compress&cs=tinysrgb&w=600' alt="collection image 3" className='w-full h-auto' />
                            
                    
                    </div> 
                </div>
                
            )}
 </div>
            <div className='flex items-center justify-center mt-10'>
                <iframe src="https://www.youtube.com/embed/CjAFxpRsx3M"
                    width="760" height="415"
                    title="GTCO Fashion Week Highlights" frameBorder="0"
                    allowFullScreen></iframe>
            </div>

            <h1 className='text-center text-3xl mt-36 mb-20 underline-text font-bold'>MASTERCLASS</h1>
            <Masterclass />
        </div>
    );
};

export default DesignersPage;
