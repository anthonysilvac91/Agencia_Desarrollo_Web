import React from 'react'
import Button from '../Button'


const WebDesign = () => {
  return (
    <div className='' >
      {/* <div className='size=[33%]'>
        <img src="https://res.cloudinary.com/djwxwsnel/image/upload/v1737904255/flecha_mtldd6.png" alt="" />
      </div> */}
      <h2 className='2xl:my-10 2xl:text-2xl '>
      Es el centro de tu universo digital. Un diseño moderno es clave para captar y retener a tus clientes.
      </h2>
      <div className='flex items-center justify-around'>
        <div className='size-[50%]'>
          <p className='2xl:text-2xl font-semibold 2xl:mb-10'>💻 Tu negocio merece un sitio web increíble. Moderno, rápido y diseñado para impresionar en cualquier pantalla. 🚀 Nosotros haremos que destaque</p>
          <Button text={'Quiero un sitio increible'} fontSize={'2xl:text-2xl'} paddingX={'2xl:px-4'} paddingY={'2xl:py-2'} />
        </div>
        
        <div className='text-center'>
          <h1 className=' 2xl:text-xl 2xl:px-4 2xl:py-2 rounded-lg -rotate-3 bg-blue-light inline-block' >¡Tu negocio necesita</h1>
          <br />
          <h2 className='text-white 2xl:text-xl 2xl:px-4 2xl:py-2 rounded-lg z bg-blue-dark inline-block rotate-0 -mt-0 '>Un sitio web!</h2>
          <div className='max-w-[500px]'>
            <img className='' src='https://res.cloudinary.com/djwxwsnel/image/upload/v1737854810/web-removebg-preview_wgyc7r.png' alt="" />
          </div>
      

        </div>
      </div>
    </div>
  )
}

export default WebDesign