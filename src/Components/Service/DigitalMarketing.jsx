import React from 'react'
import Button from '../Button'

const DigitalMarketing = () => {
  return (
    <div className='' >
      
      <h2 className='2xl:my-10 2xl:text-2xl '>
      Tus redes sociales, campañas y contenido deben trabajar juntos. Un plan bien pensado multiplica el impacto de tu presencia online.
      </h2>
      <div className='grid grid-cols-2 items-center justify-around'>

      <div >
          <p className='2xl:text-2xl font-semibold 2xl:mb-10'>📣 Que hablen de tu negocio donde importa. Conectamos tu marca con las personas correctas, en el momento perfecto. 🚀 Hazte notar.</p>
          <Button text={'Quiero llegar más lejos'} fontSize={'2xl:text-2xl'} paddingX={'2xl:px-4'} paddingY={'2xl:py-2'} />
        </div>

        
        
        <div className='text-center'>
          <h1 className=' 2xl:text-xl 2xl:px-4 2xl:py-2 rounded-lg -rotate-3 bg-blue-light inline-block' >¡Tu negocio necesita</h1>
          <br />
          <h2 className='text-white 2xl:text-xl 2xl:px-4 2xl:py-2 rounded-lg z bg-blue-dark inline-block rotate-0 -mt-0 '>presencia!</h2>
          <div className='max-w-[500px]'>
            <img className='' src='https://res.cloudinary.com/djwxwsnel/image/upload/v1737921869/marketing-removebg-preview_q0v1oc.png' alt="" />
          </div>


      

        </div>

        
      </div>
    </div>
  )
}

export default DigitalMarketing