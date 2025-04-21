import React, { useState } from 'react';
import menuData from '../../data/menu.json';

interface MenuItem {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  destacado: boolean;
}

interface MenuCategory {
  id: string;
  nombre: string;
  items: MenuItem[];
}

const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(menuData.categorias[0].id);

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  const selectedCategory = menuData.categorias.find(cat => cat.id === activeCategory) || menuData.categorias[0];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Nuestro Menú</h2>
          <p className="text-text-light max-w-2xl mx-auto">
            Descubre nuestra selección de platos elaborados con ingredientes frescos y técnicas tradicionales japonesas.
          </p>
        </div>

        {/* Tabs de categorías */}
        <div className="flex flex-wrap justify-center mb-8 gap-2">
          {menuData.categorias.map((categoria) => (
            <button
              key={categoria.id}
              onClick={() => handleCategoryChange(categoria.id)}
              className={`px-4 py-2 rounded-full transition-all ${
                activeCategory === categoria.id
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-text hover:bg-gray-200'
              }`}
            >
              {categoria.nombre}
            </button>
          ))}
        </div>

        {/* Grid de items del menú */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {selectedCategory.items.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all menu-item-hover ${
                item.destacado ? 'border-2 border-primary' : ''
              }`}
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.imagen})` }}
              >
                {item.destacado && (
                  <div className="bg-primary text-white px-3 py-1 inline-block rounded-br-lg font-medium text-sm">
                    Destacado
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold font-heading">{item.nombre}</h3>
                  <span className="text-lg font-bold text-primary">
                    ${item.precio.toLocaleString()}
                  </span>
                </div>
                <p className="text-text-light mb-4">{item.descripcion}</p>
                <button className="w-full py-2 border border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-colors">
                  Agregar al pedido
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;