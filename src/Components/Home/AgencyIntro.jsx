import React from 'react'
import logo from '../../assets/logo_white.png'
import Button from '../Button'

const AgencyIntro = () => {
  return (
    <div className='px-psm xl:px-pxl 2xl:px-p2xl 3xl:px-p3xl flex justify-center items-center'>
        <p>
        Tu negocio necesita más que buenas ideas, necesita una estrategia clara y efectiva. Una que no solo te diga qué hacer, sino cómo y cuándo hacerlo
        </p>
        <div className='flex-col flex items-center justify-center'>
            <img src={logo} alt="logo" />
            <Button text={'Quiero saber más'}/>
        </div>
    </div>
  )
}

export default AgencyIntro