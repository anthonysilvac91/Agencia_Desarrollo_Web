import React from "react";
import Button from "../Button";

const IntroMessage = () => {
  return (
    <div className="responsive-padding md:mb-10">
        <p className="md:text-xl lg:text-lg 2xl:text-2xl mb-10 xl:text-xl">
        Puede sonar aburrido, así que queremos hacerlo divertido. Este el punto de partida para que tomes acción. Ya sabes que necesitas. Un sitio web con power, una  marca que se haga notar, y estrategias  que pateen traseros. Déjalo en nuestras manos, y prepárate para conquistar el mundo digital.
        </p>
        <div className="text-center">
        <Button text={'Quiero comenzar con mi página web'} paddingX={'md:px-4 lg:px-3 xl:px-4'} paddingY={'md:py-2 lg:py-1 xl:py-2'} fontSize={'md:text-xl lg:text-lg xl:text-xl'}/>
        </div>
        
    </div>
  );
};

export default IntroMessage;
