import React from 'react'
import Button from '../Button'

const WebPositioning = () => {
  return (
    <div className='' >
      
      <h2 className='2xl:my-10 2xl:text-2xl '>
      Si no te encuentran, estás perdiendo oportunidades. Optimiza tu web para aparecer donde tus clientes buscan soluciones.
      </h2>
      <div className='grid grid-cols-2 items-center justify-around'>

        
        
        <div className='text-center'>
          <h1 className=' 2xl:text-xl 2xl:px-4 2xl:py-2 rounded-lg -rotate-3 bg-blue-light inline-block' >¡Tu negocio necesita</h1>
          <br />
          <h2 className='text-white 2xl:text-xl 2xl:px-4 2xl:py-2 rounded-lg z bg-blue-dark inline-block rotate-0 -mt-0 '>posicionarse!</h2>
          <div className='max-w-[500px]'>
            <img className='' src='https://res.cloudinary.com/djwxwsnel/image/upload/v1737919421/seo-removebg-preview_q7vsdq.png' alt="" />
          </div>


      

        </div>

        <div >
          <p className='2xl:text-2xl font-semibold 2xl:mb-10'>🌐 Si no estás en la cima de Google, no existes. Te ayudamos a llegar donde tus clientes te buscan. 🚀 Haremos que te encuentren.</p>
          <Button text={'Quiero estar en la cima'} fontSize={'2xl:text-2xl'} paddingX={'2xl:px-4'} paddingY={'2xl:py-2'} />
        </div>
      </div>
    </div>
  )
}

export default WebPositioning