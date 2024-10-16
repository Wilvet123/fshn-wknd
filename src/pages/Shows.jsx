import React from 'react'

const Shows = () => {
  return (
    <div>
        <h1 className='text-center text-3xl mt-36 mb-20 underline-text font-bold'>FSHN WKND SHOWS</h1>
      <div className='my-5 mx-auto  flex justify-center items-center gap-16'>
        <div className='relative rounded-xl  w-full top-0 left-0 bg-black/50 cursor-pointer overflow-hidden group shadow-xl  max-w-[250px] h-[300px]'>
            <div className='absolute h-full w-full top-0 left-0 bg-black/50 rounded-xl'></div>
        <div className=' '>
            <img 
             src="https://images.pexels.com/photos/9509649/pexels-photo-9509649.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="" 
              className='block w-full h-[300px]  object-cover'/>
            </div>
            <div className='max-h-[35px] pl-3 absolute bottom-0 group-hover:max-h-[125px] duration-500'>
            <h1 className='font-semibold text-lg text-white '>Runway Shows</h1>
            <div className='text-sm text-white mt-2'>
            
            <p className='pb-2'>The Runway Shows will offer spectators artistic insights
                 into the modern world of Nigerian and global fashion design.
            </p>
            </div>
            </div>
            
         
        </div>

        <div className='relative rounded-xl  w-full top-0 left-0 bg-black/50 cursor-pointer group shadow-xl overflow-hidden max-w-[250px] h-[300px]'>
            <div className='absolute h-full w-full top-0 left-0 bg-black/50'></div>
            <div className=' '>
            <img 
             src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="" 
              className='block w-full h-[300px]  object-cover'/>
            </div>
            <div className='max-h-[35px] pl-3 absolute bottom-0 group-hover:max-h-[125px] duration-500 overflow-hidden'>
            <h1 className='font-semibold text-lg text-white '>Shopping</h1>
            <div className='text-sm text-white mt-2 '>
            
            <p className='pb-2'>Experience the best in shopping.
            </p>
            </div>
            </div>
            
        </div>

        <div className='relative rounded-xl  w-full top-0 left-0 bg-black/50 cursor-pointer overflow-hidden group shadow-xl  max-w-[250px] h-[300px]'>
            <div className='absolute h-full w-full top-0 left-0 bg-black/50 rounded-xl'></div>
        <div className=' '>
            <img 
             src="https://images.pexels.com/photos/9908669/pexels-photo-9908669.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="" 
              className='block w-full h-[300px]  object-cover'/>
            </div>
            <div className='max-h-[35px] pl-3 absolute bottom-0 group-hover:max-h-[125px] duration-500'>
            <h1 className='font-semibold text-lg text-white '>Masterclasses</h1>
            <div className='text-sm text-white mt-2'>
            
            <p className='pb-2'>Providing fashion entrepreneurs the unique 
              opportunity to learn from global industry leaders
            </p>
            </div>
            </div>
            
         
        </div>
        
    </div>
    </div>
    
  )
}

export default Shows