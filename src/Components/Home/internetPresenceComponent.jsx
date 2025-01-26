import React from "react";


const InternetPresenceComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 px-5 bg-gray-50">
      <div className="max-w-4xl w-full shadow-lg border rounded-2xl bg-white">
        <div className="p-6 md:p-10 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">🌐 La fórmula para brillar en internet</h2>
          <p className="text-gray-600 text-lg mb-6">
            Tener presencia online no es solo “estar ahí”, es <span className="font-semibold">destacar donde importa</span>. 💡 Te contamos cómo lograrlo:
          </p>
          <div className="space-y-4 text-left">
            <div className="flex items-start gap-3">
              <span className="text-gray-800 font-bold">1️⃣ Tu página web:</span>
              <p className="text-gray-600">Es el centro de tu universo digital. Un diseño moderno, funcional y rápido es clave para captar y retener a tus clientes.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-gray-800 font-bold">2️⃣ Posicionamiento web (SEO):</span>
              <p className="text-gray-600">Si no te encuentran en Google, estás perdiendo oportunidades. Optimiza tu web para aparecer donde tus clientes buscan soluciones.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-gray-800 font-bold">3️⃣ Estrategia digital:</span>
              <p className="text-gray-600">Tus redes sociales, campañas y contenido deben trabajar juntos. Un plan bien pensado multiplica el impacto de tu presencia online.</p>
            </div>
          </div>
          <div className="mt-8">
            <button className="px-6 py-3 text-lg flex items-center gap-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
               Hablemos de tu proyecto
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternetPresenceComponent;
