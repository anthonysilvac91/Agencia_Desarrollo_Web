import React from 'react'

const AboutMessage = () => {
  return (
    <div className='md:mb-10 md:my-10  '>
        <div className='md:gap-40 grid grid-cols-3 responsive-padding  lg:gap-10 items-center'>
            <div className='w-72'>
            <img src="https://res.cloudinary.com/djwxwsnel/image/upload/v1737908291/luz_bgpyyv.png" alt="" />
            </div>
            <p className='md:text-2xl lg:text-xl xl:text-2xl col-span-2'>
            Tu negocio necesita más que buenas ideas, necesita una estrategia clara y efectiva. Una que no solo te diga qué hacer, sino cómo y cuándo hacerlo
            </p>
            
            

        </div>
        <div className='text-white bg-blue-dark grid grid-cols-3 responsive-padding lg:gap-10 md:py-10 items-center'>
        <h2 className='md:text-5xl lg:text-6xl xl:text-7xl tracking-[0.2em] col-span-2 leading-relaxed'>LLEGA A LO MÁS ALTO</h2>
            
            <p className=' md:text-lg lg:text-xl xl:text-2xl '>
            Nuestra Agencia Digital es el aliado perfecto para impulsar tu marca y aumentar tus ventas
            </p>

        </div>
    </div>
  )
}

export default AboutMessage