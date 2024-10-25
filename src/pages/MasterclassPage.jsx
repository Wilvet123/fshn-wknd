import React from 'react'
import FAQ from '../components/FAQ'
import { testimonials } from '../data'

const MasterclassPage = () => {
  return (
    <div className=''>
      <div className="relative gradient-to-b h-screen flex  ">
        <div className='w-[50%] flex flex-col items-center justify-center px-16'>
        <h1 className='text-7xl font-bold '>JANE DOE</h1>
        <h1 className='text-2xl text-orange-500 font-semibold'>Model</h1>
        <p className='mt-5'>
            Jane Doe is an award-winning fashion journalist and Beauty Editor-at-Large at Cosmopolitan.
            She has held various positions including Beauty Director at Cosmo, Global Beauty Director 
            at ESSENCE, and Executive Director of BeautyUnited. Julee has written for various 
            publications including InStyle, Conde Nast Traveler, The Business of Fashion, and The
            International Journal of Fashion Studies. She has made appearances on Good Morning 
            America, CNN, The Today Show, and CBS Early Show.
        </p>
        </div>
        <img src="https://images.pexels.com/photos/3225901/pexels-photo-3225901.jpeg?auto=compress&cs=tinysrgb&w=600" 
        alt="" 
        className='w-[50%] object-cover  grayscale'/>
      </div>



       

        <div className='flex items-center justify-center pt-40'>
        <iframe width="720" height="450" src="https://www.youtube.com/embed/YgWTnDi4tzw?si=y10PB4FQ0feQbkx-" 
        title="YouTube video player" frameborder="0"
        
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
         referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

          <FAQ/>
            {/*Comment Card */}
            <div className='py-10 px-7'>
            <h1 className='text-center text-3xl  my-20 font-bold underline-text'>TESTIMONIALS</h1>
            <div className='flex flex-wrap gap-3'>
            { testimonials.map((testimonial) =>(
              <div className='rounded-md p-4 bg-orange-200 max-w-72 h-60 shadow-md'>
              <div>
                <img src="https://images.pexels.com/photos/3225901/pexels-photo-3225901.jpeg?auto=compress&cs=tinysrgb&w=600x" alt="" className='rounded-full w-20 h-20 object-cover'/>
                <div>
                  <h1>{testimonial.name}</h1>
                <h1 className='text-sm'>{testimonial.country}</h1>
                </div>
                
              </div>
              <p className='mt-2 text-sm'>
                {testimonial.comment}
              </p>
              <div>
                <h1 className='text-sm'>{testimonial.date}</h1>
            </div>
            </div>
            ))
            }
            </div>
           <div className='max-w-72 h-60'>
              
           </div>
            
            </div>
      

      
    </div>
  )
}

export default MasterclassPage