import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import inicioData from '../../data/inicio.json';

const FeaturedItems: React.FC = () => {
  const navigate = useNavigate();
  const { destacados } = inicioData;

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Nuestros Destacados</h2>
          <p className="text-text-light max-w-2xl mx-auto">
            Descubre nuestras creaciones más populares, elaboradas con los ingredientes más frescos y la técnica más refinada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destacados.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all menu-item-hover"
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.imagen})` }}
              ></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 font-heading">{item.titulo}</h3>
                <p className="text-text-light mb-4">{item.descripcion}</p>
                <button
                  onClick={() => navigate('/menu')}
                  className="text-primary font-medium flex items-center hover:text-primary-dark transition-colors"
                >
                  Ver más <ChevronRight size={16} className="ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => navigate('/menu')}
            className="px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-colors inline-flex items-center"
          >
            Ver Menú Completo <ChevronRight size={16} className="ml-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedItems;