import React from 'react'
import Hero from '../Components/Home/Hero'
import ServiceMessage from '../Components/Home/ServiceMessage'
import AboutMessage from '../Components/Home/AboutMessage'
import Intromessage from '../Components/Home/IntroMessage'

const Home = () => {



  return (
    <>
   
    
    <Hero/>
    <div className='mx-5 sm:mx-14 md:mx-20 border-2 border-blue-dark shadow-xl'></div>
    <ServiceMessage/>
    <div className='mx-5 sm:mx-14 md:mx-20 border-2 border-blue-dark shadow-xl'></div>
    <AboutMessage/>
    <Intromessage/>
    
   
    
    
  
 
    </>
  )
}

export default Home