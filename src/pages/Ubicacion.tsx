import React, { useEffect } from 'react';
import UbicacionInfo from '../components/ubicacion/UbicacionInfo';
import { useSEO } from '../context/SEOContext';

const Ubicacion: React.FC = () => {
  const { updateMetaTags } = useSEO();

  useEffect(() => {
    updateMetaTags(
      'Ubicación | Shiva Sushi - El mejor sushi de Avellaneda',
      'Encuéntranos en Avellaneda. Ofrecemos delivery de sushi en Gerli, Lanús, Sarandí y toda la zona sur.'
    );
  }, [updateMetaTags]);

  return (
    <div>
      <div className="bg-primary py-28 px-4 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Ubicación</h1>
          <p className="text-xl max-w-lg mx-auto">
            Visítanos en Avellaneda o solicita delivery a domicilio en toda la zona sur
          </p>
        </div>
      </div>
      <UbicacionInfo />
    </div>
  );
};

export default Ubicacion;