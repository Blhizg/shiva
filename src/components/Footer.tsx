import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, MapPin, Phone, Mail, Clock } from 'lucide-react';
import ubicacionData from '../data/ubicacion.json';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="md:col-span-2 lg:col-span-1">
            <h2 className="text-2xl font-bold font-heading mb-4">
              <span className="text-primary">SHIVA</span>
              <span className="text-secondary">SUSHI</span>
            </h2>
            <p className="mb-4 text-gray-400">
              El auténtico sabor japonés en Avellaneda. Disfruta de la mejor experiencia gastronómica con nuestros rolls especiales y platos tradicionales.
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href={ubicacionData.redesSociales.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href={ubicacionData.redesSociales.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-bold mb-4 pb-2 border-b border-gray-700">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary transition-colors">Inicio</Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-400 hover:text-primary transition-colors">Menú</Link>
              </li>
              <li>
                <Link to="/ubicacion" className="text-gray-400 hover:text-primary transition-colors">Ubicación</Link>
              </li>
              <li>
                <Link to="/historia" className="text-gray-400 hover:text-primary transition-colors">Nuestra Historia</Link>
              </li>
            </ul>
          </div>

          {/* Horarios */}
          <div>
            <h3 className="text-lg font-bold mb-4 pb-2 border-b border-gray-700">Horarios</h3>
            <ul className="space-y-2">
              {ubicacionData.horarios.map((horario, index) => (
                <li key={index} className="flex items-start">
                  <Clock size={16} className="mt-1 mr-2 text-primary" />
                  <div>
                    <span className="block text-gray-400">{horario.dias}</span>
                    <span className="block text-white">{horario.horario}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-bold mb-4 pb-2 border-b border-gray-700">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={16} className="mt-1 mr-2 text-primary" />
                <span className="text-gray-400">{ubicacionData.direccion}</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-primary" />
                <a href={`tel:${ubicacionData.telefono}`} className="text-gray-400 hover:text-primary transition-colors">
                  {ubicacionData.telefono}
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-primary" />
                <a href={`mailto:${ubicacionData.email}`} className="text-gray-400 hover:text-primary transition-colors">
                  {ubicacionData.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Shiva Sushi. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;