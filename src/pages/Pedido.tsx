import React, { useEffect } from 'react';
import PedidoCalculator from '../components/pedido/PedidoCalculator';
import { useSEO } from '../context/SEOContext';

const Pedido: React.FC = () => {
  const { updateMetaTags } = useSEO();

  useEffect(() => {
    updateMetaTags(
      'Armá tu Pedido | Shiva Sushi - El mejor sushi de Avellaneda',
      'Armá tu pedido personalizado de sushi en Shiva Sushi. Delivery en Avellaneda y zona sur.'
    );
  }, [updateMetaTags]);

  return (
    <div>
      <div className="bg-primary py-28 px-4 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Armá tu Pedido</h1>
          <p className="text-xl max-w-lg mx-auto">
            Elegí tus piezas favoritas y armá tu pedido personalizado
          </p>
        </div>
      </div>
      <PedidoCalculator />
    </div>
  );
};

export default Pedido;