import React from 'react'
import Button from '../Button'

const WebPositioning = () => {
  return (
    <div className='' >
      
      <h2 className='text-base sm:text-xl md:text-2xl my-5 sm:my-10 lg:text-xl xl:text-2xl'>
      Si no te encuentran, estás perdiendo oportunidades. Optimiza tu web para aparecer donde tus clientes buscan soluciones.
      </h2>
      <div className='flex flex-col-reverse lg:grid md:gap-10 lg:grid-cols-2 items-center justify-around'>

        
        
        <div className='text-center'>
          <h1 className=' text-lg sm:text-xl lg:text-lg xl:text-xl px-4 py-2 rounded-lg -rotate-3 bg-blue-light inline-block' >¡Tu negocio necesita</h1>
          <br />
          <h2 className='text-white text-lg sm:text-xl lg:text-lg xl:text-xl px-4 py-2 rounded-lg z bg-blue-dark inline-block rotate-0 mt-0 '>posicionarse!</h2>
          <div className='lg:max-w-[500px] md:flex md:justify-center md:mx-0'>
            <img className='' src='https://res.cloudinary.com/djwxwsnel/image/upload/v1737919421/seo-removebg-preview_q7vsdq.png' alt="" />
          </div>


      

        </div>

        <div >
          <p className='text-base sm:text-xl md:text-2xl lg:text-xl xl:text-2xl font-semibold mb-5 sm:mb-10'>🌐 Si no estás en la cima de Google, no existes. Te ayudamos a llegar donde tus clientes te buscan. 🚀 Haremos que te encuentren.</p>
          <div className='flex justify-center lg:block mb-8 sm:mb-10 md:mb-0'>
          <Button text={'Quiero estar en la cima'} fontSize={'text-lg md:text-xl lg:text-lg xl:text-xl'} paddingX={'px-3 md:px-4 lg:px-3 xl:px-4'} paddingY={'py-1 md:py-2 lg:py-1 xl:py-2'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WebPositioning