import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import seoData from '../data/seo.json';

interface SEOContextType {
  updateMetaTags: (title?: string, description?: string, image?: string) => void;
}

const SEOContext = createContext<SEOContextType | undefined>(undefined);

export const useSEO = () => {
  const context = useContext(SEOContext);
  if (!context) {
    throw new Error('useSEO must be used within a SEOProvider');
  }
  return context;
};

interface SEOProviderProps {
  children: ReactNode;
}

export const SEOProvider: React.FC<SEOProviderProps> = ({ children }) => {
  const location = useLocation();

  const updateMetaTags = (
    title = seoData.titulo,
    description = seoData.descripcion,
    image = seoData.imagenesOG.urlPrincipal
  ) => {
    // Actualizar título
    document.title = title;

    // Actualizar meta etiquetas
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }

    // Actualizar Open Graph
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    const ogImage = document.querySelector('meta[property="og:image"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');

    if (ogTitle) ogTitle.setAttribute('content', title);
    if (ogDesc) ogDesc.setAttribute('content', description);
    if (ogImage) ogImage.setAttribute('content', image);
    if (ogUrl) ogUrl.setAttribute('content', `${seoData.urlCanonica}${location.pathname}`);
  };

  // Actualizar metadatos cuando cambia la ruta
  useEffect(() => {
    let pageTitle = seoData.titulo;
    let pageDesc = seoData.descripcion;
    let pageImage = seoData.imagenesOG.urlPrincipal;

    // Actualizar metadatos según la página actual
    switch (location.pathname) {
      case '/menu':
        pageTitle = 'Menú | Shiva Sushi - El mejor sushi de Avellaneda';
        pageDesc = 'Descubre nuestro menú de sushi en Avellaneda con rolls especiales, entradas y combos. Delivery disponible en zona sur.';
        pageImage = seoData.imagenesOG.urlMenu;
        break;
      case '/ubicacion':
        pageTitle = 'Ubicación | Shiva Sushi - El mejor sushi de Avellaneda';
        pageDesc = 'Encuéntranos en Avellaneda. Ofrecemos delivery de sushi en Gerli, Lanús, Sarandí y toda la zona sur.';
        break;
      case '/historia':
        pageTitle = 'Nuestra Historia | Shiva Sushi - El mejor sushi de Avellaneda';
        pageDesc = 'Conoce la historia de Shiva Sushi, el restaurante de comida japonesa más auténtico de Avellaneda y la zona sur.';
        break;
      default:
        break;
    }

    updateMetaTags(pageTitle, pageDesc, pageImage);
  }, [location]);

  return (
    <SEOContext.Provider value={{ updateMetaTags }}>
      {children}
    </SEOContext.Provider>
  );
};