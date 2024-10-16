import React, { useState, useEffect } from 'react';

const ChangingBg = () => {
  const images = [
    'https://images.pexels.com/photos/28428858/pexels-photo-28428858/free-photo-of-shinamachi-izakaya.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    'https://images.pexels.com/photos/28558790/pexels-photo-28558790/free-photo-of-traditional-arabic-canopies-at-dusk-in-jeddah.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    'https://images.pexels.com/photos/27854039/pexels-photo-27854039/free-photo-of-the-city.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    'https://images.pexels.com/photos/28448837/pexels-photo-28448837/free-photo-of-twilight-view-of-berlin-tv-tower-and-bridge.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  ];

  // State to hold the index of the current background image
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Function to change the background image index every 5 seconds
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3500); 

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div
      className="h-screen w-full bg-cover bg-center transition-all duration-1000 ease-in-out"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <div className="flex items-center justify-center h-screen bg-black bg-opacity-60">
<div className='flex flex-col  gap-2 absolute  left-20 text-white'>
<h1 className='font-poppins text-6xl font-bold text-center
  text-white hover:text-orange-500 duration-300 '>About</h1>
 <p className='  text-white text-2xl '>GTCO FSHN WKND</p>
        {/* <div>
            <p className='flex justify-center items-center mx-96 text-center font-semibold mt-10'>
            The Guaranty Trust Fashion Weekend is a consumer-focused fair and free 
            business platform designed to showcase the best of Africa’s Fashion 
            to a global audience whilst promoting the effervescent enterprise of the 
            continents growing fashion industry.
            </p>
        </div> */}
    </div>      </div>
    </div>
  );
};

export default ChangingBg;
