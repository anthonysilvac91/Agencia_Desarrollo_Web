import React from 'react'
import logo_blue from '../assets/logo_blue.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className='bg-blue-light px-psm xl:px-pxl 2xl:px-p2xl py-3 flex flex-col lg:flex-row lg:justify-between lg:items-center'>
        <div className='grid grid-cols-3'>

            <div className='h-20 2xl:h-24 lg:justify-start col-span-3 flex justify-center items-center'>
                <img className='h-full' src={logo_blue} alt="logo_digilab" />
            </div>

            <div className='col-span-3 text-black text-sm md:text-center md:my-3 2xl:text-[20px] xl:text-[18px] lg:text-[16px] '>
                <p className='my-2 xl:my-4'>
                ¡Hey! Somos la agencia creativa y digital que necesitas
                </p>
                <p className='font-semibold text-blue-dark mb-2 xl:mb-3'>
                Síguenos y llevemos tu negocio al siguiente nivel
                </p>
            </div>

            <div className='col-span-3 flex justify-around items-center my-2 md:justify-evenly md:mb-4 lg:justify-start lg:gap-6 xl:gap-8 2xl:gap-10'>
                <div className='bg-blue-dark h-14 w-14 rounded-full flex justify-center items-center text-white text-2xl'>
                    <FontAwesomeIcon icon={faFacebookF} />
                </div>
                <div className='bg-blue-dark h-14 w-14  rounded-full flex justify-center items-center text-white text-3xl'>
                    <FontAwesomeIcon icon={faTwitter} />
                </div>
                <div className='bg-blue-dark h-14 w-14  rounded-full flex justify-center items-center text-white text-3xl'>
                    <FontAwesomeIcon icon={faWhatsapp} />
                </div>
            </div>
            
        </div>

        <div className='grid grid-cols-2 my-2 text-sm 2xl:gap-6 lg:gap-4 xl:items-center md:text-center md:gap-4 '>
            <div className=' col-span-1'>
                <h3 className='text-blue-dark font-semibold lg:text-[16px] xl:text-[18px] 2xl:text-[20px] 2xl:mb-2 lg:mb-2 '>Desarrollo Web</h3>
                <li className='text-[10px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] '>Diseño web</li>
                <li className='text-[10px] lg:text-[14px] xl:text-[16px]  2xl:text-[18px]'>Tienda virtual</li>
             
            </div>
            <div className=' col-span-1'>
                <h3 className='text-blue-dark font-semibold lg:text-[16px] xl:text-[18px] 2xl:text-[20px] 2xl:mb-2 lg:mb-2'>Marketing Digital</h3>
               
                <li className='text-[10px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px]'>Posicionamiento SEO</li>
                <li className='text-[10px] lg:text-[14px] xl:text-[16px]  2xl:text-[18px]'>Redes Sociales</li>
                
            
                
            </div>
            <div className='col-span-1'>
                <h3 className='text-blue-dark font-semibold lg:text-[16px] xl:text-[18px] 2xl:text-[20px] 2xl:mb-2 lg:mb-2 2xl:mt-'>DigiLab</h3>
                <li className='text-[10px] lg:text-[14px] xl:text-[16px]  2xl:text-[18px]'>Sobre nosotros</li>
                <li className='text-[10px] lg:text-[14px] xl:text-[16px]  2xl:text-[18px]'>Contáctanos</li>

            </div>
            <div className=' col-span-1 2xl:text-[20px]'>
                <h3 className='text-blue-dark font-semibold lg:text-[16px] xl:text-[18px] 2xl:mb-2 lg:mb-2'>Blog</h3>
                <li className='text-[10px] lg:text-[14px] xl:text-[16px]  2xl:text-[18px]'>Última entrada</li>
                <li className='text-[10px] lg:text-[14px] xl:text-[16px]  2xl:text-[18px]'>Peúltima entrada</li>
                
            </div>
        </div>
    </footer>
  )
}

export default Footer