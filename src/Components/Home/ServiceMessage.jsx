import React, { useState } from 'react'
import WebDesign from '../Service/WebDesign';
import WebPositioning from '../Service/WebPositioning';
import DigitalMarketing from '../Service/DigitalMarketing';
import serviceOptions from '../../Utils/ServiceOptions';


const ServiceMessage = () => {

    const [selectedService, setSelectedService] = useState(null);

    const services = {
        'web-design': <WebDesign />,
        'web-positioning': <WebPositioning />,
        'digital-marketing': <DigitalMarketing />,
      };


    return (
        <div className="responsive-padding mb-10 mt-20">
        <h2 className="2xl:text-2xl font-bold text-center my-10">
          ¿Cómo destacar en internet y brillar donde importa?
        </h2>
        <p className="2xl:text-xl">
          Destacar en el mundo digital no es cuestión de suerte, no basta con solo "estar", es cuestión de estrategia. 💡 Si quieres crecer aquí te contamos cómo lograrlo:
        </p>
        
        <div className="flex justify-between 2xl:my-10">
          {serviceOptions.map(({ id, name, imgSrc }) => (
            <div
              key={id}
              className="flex flex-col items-center cursor-pointer"
              onClick={() => setSelectedService(id)}
            >
              <img src={imgSrc} alt={name} />
              <p
                className={`2xl:text-2xl 2xl:mt-4 2xl:px-4 2xl:py-2 rounded-md ${
                  selectedService === id ? 'bg-blue-800 text-white' : 'bg-blue-light'
                }`}
              >
                {name}
              </p>
            </div>
          ))}
        </div>
  
        {selectedService && (
          <div className="mt-10">
            {services[selectedService]}
          </div>
        )}
      </div>
    );
  };


export default ServiceMessage