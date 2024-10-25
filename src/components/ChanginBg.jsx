import React, { useState, useEffect } from 'react';

const ChangingBg = ({title, show}) => {
  const images = [
    'https://images.pexels.com/photos/9511238/pexels-photo-9511238.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/16035765/pexels-photo-16035765/free-photo-of-milan.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://media.istockphoto.com/id/157532410/photo/catwalk-show.jpg?s=1024x1024&w=is&k=20&c=P45YR4_hiboNeO92dkISHyXYAdCEaSWEr21gpliunNc=',
    'https://images.pexels.com/photos/14622793/pexels-photo-14622793.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/27953790/pexels-photo-27953790/free-photo-of-people-in-colorful-clothing-posing-together.jpeg?auto=compress&cs=tinysrgb&w=600'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3500); 

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
  text-white hover:text-orange-500 duration-300 '>{title}</h1>
 <p className='  text-white text-2xl '>{show}</p>
       
    </div>      </div>
    </div>
  );
};

export default ChangingBg;
