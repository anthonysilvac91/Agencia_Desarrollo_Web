import React from 'react'
import Button from '../Components/Button'
import img_hero from '../assets/hero_person.jpg'
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <div className='flex justify-center items-center flex-col lg:flex-row-reverse lg:gap-24 px-psm xl:px-pxl 2xl:px-p2xl 3xl:px-p3xl mt-4 lg:mb-8'>

        <div>
            <img className='rounded-xl' src={img_hero} alt="Person_hero" />

        </div>
        <div className=''>
            <h3 className='text-blue-dark font-bold mt-2 sm:text-xl sm:mt-4'>_Enfócate en tu negocio_</h3>
            <h1 className='text-black font-bold mt-2 text-3xl sm:text-5xl sm:leading-tight 3xl:text-7xl 3xl:leading-snug 3xl:mr-28'>Nosotros nos encargamos de que tu MARCA 
    
            </h1>
            <p className="text-blue-dark mt-2 font-bold text-4xl sm:text-6xl sm:mt-4 3xl:text-8xl">
              <Typewriter
                options={{
                  strings: ['BRILLE', 'DESTAQUE', 'CREZCA'],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                }}
              />
            </p>
            {/* <p className='my-2'>Tenemos la planificación para hacer crecer tu negocio</p> */}
            <div className='text-center mt-4 sm:mt-6 lg:text-left'>
            <Button  text={'Quiero saber más'}/>
            </div>
           
        </div>
        
    
    </div>
  )
}

export default Hero