import React, { useEffect } from 'react'
import { useState } from "react";
import slides from '../../Utils/slides';
import Button from '../Button';



const SliderSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false); 

  const handleNext = () => {
    setFade(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };
  
  const handlePrev = () => {
    setFade(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(handleNext, 2000)

    return() => clearInterval(intervalId)
  },[])

  useEffect(() => {
    if (fade) {
      const timer = setTimeout(() => setFade(false), 500); 
      return () => clearTimeout(timer);
    }
  }, [fade]);

  return (
    <>
    <div className="flex justify-between items-center px-psm xl:px-pxl 2xl:px-p2xl 3xl:px-p3xl">

    {/* <div className={`text-center ${fade ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}> */}
      <div className='text-center'>
        <h1 className='3xl:text-3xl 2xl:text-3xl 2xl:px-4 2xl:py-2 3xl:px-5 3xl:py-2 rounded-lg z-0 relative -rotate-3 bg-blue-light inline-block' >¡Tu negocio necesita</h1>
        <br />
        <h2 className='text-white 3xl:text-3xl 2xl:text-3xl 2xl:px-4 3xl:px-5 2xl:py-2 rounded-lg z-10 bg-blue-dark inline-block rotate-0 -mt-0'>{slides[currentIndex].title}</h2>
        <p className='3xl:text-5xl 2xl:text-5xl 2xl:mt-7 2xl:mb-10'>{slides[currentIndex].subtitle}</p>
        <Button  text={slides[currentIndex].buttonText}/>
      </div>
      {/* <div className={`${fade ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}> */}
      <div>
      <img className='max-h-80'  src={slides[currentIndex].image} alt="Slide visual" />
      </div>
    

    
  </div>
  <div className='flex justify-center'>
      <button onClick={handlePrev}>◀</button>
      <button onClick={handleNext}>▶</button>
  </div>

  </>
  )
}

export default SliderSection