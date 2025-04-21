import React from 'react';
import { MapPin, Clock, PhoneCall, Mail, Truck } from 'lucide-react';
import ubicacionData from '../../data/ubicacion.json';

const UbicacionInfo: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Nuestra Ubicación</h2>
          <p className="text-text-light max-w-2xl mx-auto">
            Encuéntranos en el corazón de Avellaneda o pide delivery a domicilio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Mapa */}
          <div className="rounded-xl overflow-hidden shadow-md h-[400px]">
            <iframe
              title="Ubicación de Shiva Sushi"
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.2082366568315!2d${ubicacionData.coordenadas.lng}!3d${ubicacionData.coordenadas.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDQwJzEwLjkiUyA1OMKwMjEnMzIuNSJX!5e0!3m2!1ses!2sar!4v1620000000000!5m2!1ses!2sar`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Información de contacto */}
          <div className="bg-gray-50 p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold mb-6 font-heading">Información de Contacto</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary bg-opacity-10 p-3 rounded-full mr-4">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Dirección</h4>
                  <p className="text-text-light">{ubicacionData.direccion}</p>
                  <p className="text-text-light">{ubicacionData.barrio}, CP: {ubicacionData.codigoPostal}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary bg-opacity-10 p-3 rounded-full mr-4">
                  <Clock className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Horario de Atención</h4>
                  {ubicacionData.horarios.map((horario, index) => (
                    <div key={index} className="mb-1 last:mb-0">
                      <p className="text-text-light">
                        <span className="font-medium">{horario.dias}:</span> {horario.horario}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary bg-opacity-10 p-3 rounded-full mr-4">
                  <PhoneCall className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Teléfonos</h4>
                  <p className="text-text-light">
                    <a href={`tel:${ubicacionData.telefono}`} className="hover:text-primary transition-colors">
                      {ubicacionData.telefono}
                    </a>
                  </p>
                  <p className="text-text-light">
                    <a href={`https://wa.me/${ubicacionData.whatsapp.replace(/\+/g, '').replace(/\s/g, '')}`} className="hover:text-primary transition-colors">
                      WhatsApp: {ubicacionData.whatsapp}
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary bg-opacity-10 p-3 rounded-full mr-4">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Email</h4>
                  <p className="text-text-light">
                    <a href={`mailto:${ubicacionData.email}`} className="hover:text-primary transition-colors">
                      {ubicacionData.email}
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary bg-opacity-10 p-3 rounded-full mr-4">
                  <Truck className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Zona de Delivery</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {ubicacionData.zonaDelivery.map((zona, index) => (
                      <span key={index} className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                        {zona}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href={`https://wa.me/${ubicacionData.whatsapp.replace(/\+/g, '').replace(/\s/g, '')}?text=Hola,%20quiero%20hacer%20un%20pedido`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 bg-primary text-white text-center rounded-full font-medium hover:bg-primary-dark transition-colors"
              >
                Pedir por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UbicacionInfo;