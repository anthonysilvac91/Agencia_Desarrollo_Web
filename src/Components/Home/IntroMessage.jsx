import React from "react";
import Button from "../Button";

const IntroMessage = () => {
  return (
    <div className="responsive-padding mb-4 sm:mb-5 md:mb-10 mt-4">
        <p className="text-sm sm:text-xl lg:text-lg 2xl:text-2xl mb-5 sm:mb-10 xl:text-xl">
        Puede sonar aburrido, así que queremos hacerlo divertido. Este el punto de partida para que tomes acción. Ya sabes que necesitas. Un sitio web con power, una  marca que se haga notar, y estrategias  que pateen traseros. Déjalo en nuestras manos, y prepárate para conquistar el mundo digital.
        </p>
        <div className="text-center">
        <Button text={'Quiero comenzar con mi página web'} paddingX={'px-1 sm:px-3 md:px-4 lg:px-3 xl:px-4'} paddingY={'py-1 sm:py-1 md:py-2 lg:py-1 xl:py-2'} fontSize={'text-sm sm:text-lg md:text-xl lg:text-lg xl:text-xl'}/>
        </div>
        
    </div>
  );
};

export default IntroMessage;
