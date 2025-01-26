import React from "react";
import Button from "../Button";

const IntroMessage = () => {
  return (
    <div className="responsive-padding 2xl:mb-10">
        {/* <p className='px-psm xl:px-pxl 2xl:px-p2xl 3xl:px-p3xl lg:pb-20 lg:pt-20 xl:text-2xl lg:text-xl mt-10 mb-10 md:mt-14 md:mb-14'><span className="font-bold">Esto no es Wikipedia,</span> tampoco es un curso aburrido. Es el punto de partida para que tomes acción. ¿Qué necesitas? Un <span className="text-blue-dark">sitio web</span> con power, una <span className="text-blue-dark"> marca</span>  que se haga notar, y <span className="text-blue-dark">estrategias</span>  que pateen traseros. <span className="text-blue-dark font-bold">Déjalo en nuestras manos</span> , y prepárate para conquistar el <span className="font-bold">mundo digital.</span ></p> */}
        <p className="2xl:text-2xl mb-10">
        Puede sonar aburrido, así que queremos hacerlo divertido. Este el punto de partida para que tomes acción. Ya sabes que necesitas. Un sitio web con power, una  marca que se haga notar, y estrategias  que pateen traseros. Déjalo en nuestras manos, y prepárate para conquistar el mundo digital.
        </p>
        <div className="text-center">
        <Button text={'Quiero comenzar con mi página web'} paddingX={'2xl:px-4'} paddingY={'2xl:py-2'} fontSize={'text-2xl'}/>
        </div>
        
    </div>
  );
};

export default IntroMessage;
