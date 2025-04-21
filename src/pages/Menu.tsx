import React, { useEffect } from 'react';
import MenuSection from '../components/menu/MenuSection';
import { useSEO } from '../context/SEOContext';

const Menu: React.FC = () => {
  const { updateMetaTags } = useSEO();

  useEffect(() => {
    updateMetaTags(
      'Menú | Shiva Sushi - El mejor sushi de Avellaneda',
      'Descubre nuestro menú de sushi en Avellaneda con rolls especiales, entradas y combos. Delivery disponible en zona sur.',
      'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg'
    );
  }, [updateMetaTags]);

  return (
    <div>
      <div className="bg-primary py-28 px-4 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Nuestro Menú</h1>
          <p className="text-xl max-w-lg mx-auto">
            Descubre nuestros deliciosos platos preparados con ingredientes frescos y técnicas tradicionales japonesas
          </p>
        </div>
      </div>
      <MenuSection />
    </div>
  );
};

export default Menu;