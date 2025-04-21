import React from 'react';
import inicioData from '../../data/inicio.json';

const Promociones: React.FC = () => {
  const { promociones } = inicioData;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Promociones Especiales</h2>
          <p className="text-text-light max-w-2xl mx-auto">
            Aprovecha nuestras ofertas especiales y disfruta de lo mejor de Shiva Sushi a precios únicos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {promociones.map((promo) => (
            <div
              key={promo.id}
              className="bg-gray-50 border-l-4 border-primary rounded-r-lg p-6 shadow-md hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-bold mb-2 text-primary font-heading">{promo.titulo}</h3>
              <p className="text-lg mb-3">{promo.descripcion}</p>
              <p className="text-sm text-text-light">{promo.condiciones}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-primary bg-opacity-10 rounded-xl p-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-6">
              <h3 className="text-2xl font-bold mb-2 font-heading">¿Listo para disfrutar?</h3>
              <p className="text-text-light">
                Haz tu pedido ahora y recibe tu sushi favorito en la comodidad de tu hogar.
              </p>
            </div>
            <a
              href="tel:+5411123456789"
              className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-colors whitespace-nowrap"
            >
              Ordenar Ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promociones;