import React from 'react'

const AboutMessage = () => {
  return (
    <div className='sm:mb-10 sm:my-5 md:my-10  my-2'>
        <div className='flex flex-col sm:gap-40 md:gap-40 sm:grid sm:grid-cols-3 responsive-padding  lg:gap-10 items-center'>
            <div className='w-32 sm:w-48 md:w-72'>
            <img src="https://res.cloudinary.com/djwxwsnel/image/upload/v1737908291/luz_bgpyyv.png" alt="" />
            </div>
            <p className='mb-5 sm:mb-0 text-sm sm:text-2xl lg:text-xl xl:text-2xl col-span-2'>
            Tu negocio necesita más que buenas ideas, necesita una estrategia clara y efectiva. Una que no solo te diga qué hacer, sino cómo y cuándo hacerlo
            </p>
            
            

        </div>
        <div className='text-white bg-blue-dark flex flex-col sm:grid sm:grid-cols-3 responsive-padding gap-2 sm:gap-0 py-4 lg:gap-10 sm:py-5 md:py-10 items-center'>
        <h2 className='text-xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-[0.2em] col-span-2 leading-relaxed'>LLEGA A LO MÁS ALTO</h2>
            
            <p className='text-sm sm:text-sm md:text-lg lg:text-xl xl:text-2xl '>
            Nuestra Agencia Digital es el aliado perfecto para impulsar tu marca y aumentar tus ventas
            </p>

        </div>
    </div>
  )
}

export default AboutMessage