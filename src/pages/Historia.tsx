import React, { useEffect } from 'react';
import HistoriaSection from '../components/historia/HistoriaSection';
import { useSEO } from '../context/SEOContext';

const Historia: React.FC = () => {
  const { updateMetaTags } = useSEO();

  useEffect(() => {
    updateMetaTags(
      'Nuestra Historia | Shiva Sushi - El mejor sushi de Avellaneda',
      'Conoce la historia de Shiva Sushi, el restaurante de comida japonesa más auténtico de Avellaneda y la zona sur.'
    );
  }, [updateMetaTags]);

  return (
    <div>
      <div className="bg-primary py-28 px-4 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Nuestra Historia</h1>
          <p className="text-xl max-w-lg mx-auto">
            Conoce cómo comenzó Shiva Sushi y nuestra filosofía de excelencia
          </p>
        </div>
      </div>
      <HistoriaSection />
    </div>
  );
};

export default Historia;