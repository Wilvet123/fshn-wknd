import React from 'react'

const DesignersWork = () => {
  return (
    <div>
        <div className='w-full  bg-black/70'>
        <div 
        className='flex items-center  gap-40 pt-20 pb-10 pl-20'>
         <div className='w-[70%] inline-block px-2 cursor-pointer pt-2 pb-5 font-bold shadow-xl bg-white '>
            <img
            src="https://images.pexels.com/photos/8980686/pexels-photo-8980686.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className='w-full h-72 grayscale hover:grayscale-0 transition duration-300 ease-in-out'
            />
            <div className=' pt-2'>
                <h1 className=' text-xl'>John Doe</h1>

            </div>

        </div>

<div>
    <div className='w-[70%] text-lg'>
        <h1><span className='font-bold'>Brand:</span> Lorem, ipsum. </h1>
        <h1><span className='font-bold'>Collection:</span> Lorem, ipsum.</h1>
        <h1><span className='font-bold'>Inspiration:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Dolore nemo architecto temporibus quia sit voluptatem
         expedita tempore neque! Amet, iste. Lorem ipsum dolor sit amet 
         consectetur adipisicing elit. Atque, recusandae.
        </h1>
    </div>
    <button className='bg-orange-500 rounded-md font-bold px-4 py-2 mt-2'>View My Show</button>
</div>  

    </div>
    {/* <img className='h-[80%] w-full object-cover -z-20' src="https://images.pexels.com/photos/9509647/pexels-photo-9509647.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /> */}

        </div>







        

    <marquee behavior="" 
    direction="right"
    className='text-9xl '>Lorem ipsum   Lorem Ipsum  Lorem Ipsum</marquee>

    <div className='grid-designer  mx-10 mt-10'>
   <img className='tall' src="https://images.pexels.com/photos/12527002/pexels-photo-12527002.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
    <img className='tall' src="https://images.pexels.com/photos/9052359/pexels-photo-9052359.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
    <img className='tall'  src="https://images.pexels.com/photos/10370350/pexels-photo-10370350.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
    <img className='tall'src="https://images.pexels.com/photos/10139611/pexels-photo-10139611.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
    <img className='big' src="https://images.pexels.com/photos/12101738/pexels-photo-12101738.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
    <img className='big' src="https://images.pexels.com/photos/9540964/pexels-photo-9540964.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
    <img className='tall' src="https://images.pexels.com/photos/26885613/pexels-photo-26885613/free-photo-of-portrait-of-an-african-man-in-shadow.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
    <img className='tall' src="https://images.pexels.com/photos/10176438/pexels-photo-10176438.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
    <img className='tall' src="https://images.pexels.com/photos/12527002/pexels-photo-12527002.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
    <img className='tall' src="https://images.pexels.com/photos/9052359/pexels-photo-9052359.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />

</div>  

<h1 className='text-center text-3xl mt-20 mb-20 font-bold underline-text'>Lorem Ipsum's Show</h1>
<div className='flex items-center justify-center '>
                <iframe src="https://www.youtube.com/embed/CjAFxpRsx3M"
                    width="760" height="415"
                    title="" frameBorder="0"
                    allowFullScreen></iframe>
            </div>
    </div>
    
  )
}

export default DesignersWork