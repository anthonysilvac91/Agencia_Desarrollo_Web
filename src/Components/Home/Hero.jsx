import React from 'react'
import Button from '../Button'
import img_hero from '../../assets/hero_person.jpg'
import Typewriter from 'typewriter-effect';

{/* <div className='flex justify-center items-center flex-col lg:flex-row-reverse lg:gap-24 px-psm xl:px-pxl 2xl:px-p2xl 3xl:px-p3xl mt-4 lg:mb-8 3xl:h-screen'></div> */}


const Hero = () => {
  return (

<div className='responsive-padding flex justify-center items-center flex-col lg:flex-row-reverse 2xl:gap-40 my-10'>

        <div className='max-w-[480px]'>
            <img className='rounded-xl' src={img_hero} alt="Person_hero" />
        </div>

        <div className=''>
            <p className='text-blue-dark font-bold'>_Enfócate en tu negocio_</p>
            <h1 className='text-black font-bold  2xl:text-5xl 2xl:leading-snug 2xl:mb-4'>Nosotros nos encargamos de que tu MARCA 
            </h1>
            <h2 className="text-blue-dark font-bold 2xl:text-6xl 2xl:my-4">
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
            <p className='2xl:text-2xl 2xl:my-4 '>Tenemos soluciones para hacer crecer tu negocio</p>
            <div>
            <Button  text={'Quiero saber más'} fontSize={'2xl:text-3xl'} paddingX={"2xl:px-4"} paddingY={'2xl:py-2'}/>
            </div>    
        </div>
  
    </div>
  )
}

export default Hero