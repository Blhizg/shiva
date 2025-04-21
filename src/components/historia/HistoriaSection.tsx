import React from 'react';
import historiaData from '../../data/historia.json';

const HistoriaSection: React.FC = () => {
  const aniosOperacion = new Date().getFullYear() - historiaData.fundacion;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">{historiaData.titulo}</h2>
          <p className="text-text-light max-w-2xl mx-auto">
            {aniosOperacion} años de excelencia y tradición en la gastronomía japonesa en Avellaneda
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://images.pexels.com/photos/2323391/pexels-photo-2323391.jpeg"
                  alt="Historia de Shiva Sushi"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-white py-3 px-6 rounded-lg shadow-md">
                <p className="text-xl font-bold font-heading">Desde {historiaData.fundacion}</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-lg leading-relaxed mb-6">
              {historiaData.descripcion}
            </p>

            {historiaData.parrafos.map((parrafo, index) => (
              <p key={index} className="mb-4 last:mb-0 text-text-light">
                {parrafo}
              </p>
            ))}

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4 font-heading">Nuestros Valores</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {historiaData.valores.map((valor, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    <span>{valor}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 p-8 bg-gray-50 rounded-xl shadow-md">
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-6 md:mb-0 md:mr-6 flex-shrink-0">
              <div className="w-32 h-32 rounded-full overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg"
                  alt={historiaData.equipo.chef}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2 font-heading">{historiaData.equipo.chef}</h3>
              <p className="text-text-light">
                {historiaData.equipo.biografia}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistoriaSection;