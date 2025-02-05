import React, { useState } from 'react'
import WebDesign from '../Service/WebDesign';
import WebPositioning from '../Service/WebPositioning';
import DigitalMarketing from '../Service/DigitalMarketing';
import serviceOptions from '../../Utils/ServiceOptions';


const ServiceMessage = () => {

    const [selectedService, setSelectedService] = useState('web-design');

    const services = {
        'web-design': <WebDesign />,
        'web-positioning': <WebPositioning />,
        'digital-marketing': <DigitalMarketing />,
      };


    return (
        <div className="responsive-padding mb-10 xl:mt-20">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl font-bold text-center my-4 sm:my-5 md:my-10">
          ¿Cómo destacar en internet y brillar donde importa?
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl">
          Destacar en el mundo digital no es cuestión de suerte, no basta con solo "estar", es cuestión de estrategia. 💡 Si quieres crecer aquí te contamos cómo lograrlo:
        </p>
        
        <div className="flex justify-around sm:justify-between my-4 sm:my-5 md:my-8 xl:my-10">
          {serviceOptions.map(({ id, name, imgSrc }) => (
            <div
              key={id}
              className="flex flex-col items-center cursor-pointer"
              onClick={() => setSelectedService(id)}
            ><div className='max-sm:w-16'>
                <img src={imgSrc} alt={name} />
            </div>
              
              <p
                className={`text-sm max-sm:mx-2 text-center sm:text-lg md:text-xl lg:text-lg xl:text-xl mt-4 lg:mt-3 xl:mt-4 px-2 sm:px-2 md:px-4 lg:px-3 xl:px-4 py-1 sm:py-1 md:py-2 lg:py-1 xl:py-2 rounded-md ${
                  selectedService === id ? 'bg-blue-800 text-white' : 'bg-blue-light'
                }`}
              >
                {name}
              </p>
            </div>
          ))}
        </div>
        <div className=' border-2 border-blue-dark shadow-xl '></div>
  
        {selectedService && (
          <div className="mt-10">
            {services[selectedService]}
          </div>
        )}
      </div>
    );
  };


export default ServiceMessage