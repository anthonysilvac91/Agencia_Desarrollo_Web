import React from 'react'
import Button from '../Button'
import img_hero from '../../assets/hero_person.jpg'
import Typewriter from 'typewriter-effect';

{/* <div className='flex justify-center items-center flex-col lg:flex-row-reverse lg:gap-24 px-psm xl:px-pxl 2xl:px-p2xl 3xl:px-p3xl mt-4 lg:mb-8 3xl:h-screen'></div> */}


const Hero = () => {
  return (

<div className='responsive-padding flex justify-center items-center flex-col lg:flex-row-reverse lg:gap-20 xl:gap-40 my-5 md:my-10'>

        <div className='max-w-[480px]'>
            <img className='rounded-xl' src={img_hero} alt="Person_hero" />
        </div>

        <div className=''>
            <p className='text-blue-dark font-bold text-sm text-md sm:text-xl md:text-2xl mt-5 md:mt-10'>_Enfócate en tu negocio_</p>
            
            <h1 className='text-black font-bold text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl leading-snug sm:leading-snug  mb-2 sm:mb-4'>Nosotros nos encargamos de que tu MARCA 
            </h1>

            <h2 className="text-blue-dark font-bold text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl my-2 sm:my-2 md:my-4">
              <Typewriter
                options={{
                  strings: ['BRILLE', 'DESTAQUE', 'CREZCA'],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                }}
              />
            </h2>
            <p className='text-xl md:text-2xl lg:text-xl xl:text-2xl my-2 md:my-4 '>Tenemos soluciones para hacer crecer tu negocio</p>
            <div>
            <Button  text={'Quiero saber más'} fontSize={'text-lg md:text-xl lg:text-lg xl:text-xl'} paddingX={"px-3 md:px-4 lg:px-3 xl:px-4"} paddingY={'py-1 md:py-2 lg:py-1 xl:py-2'}/>
            </div>    
        </div>
  
    </div>
  )
}

export default Hero