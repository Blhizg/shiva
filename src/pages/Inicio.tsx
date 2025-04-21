import React, { useEffect } from 'react';
import HeroSlider from '../components/inicio/HeroSlider';
import FeaturedItems from '../components/inicio/FeaturedItems';
import Promociones from '../components/inicio/Promociones';
import { useSEO } from '../context/SEOContext';
import seoData from '../data/seo.json';

const Inicio: React.FC = () => {
  const { updateMetaTags } = useSEO();

  useEffect(() => {
    updateMetaTags(
      seoData.titulo,
      seoData.descripcion,
      seoData.imagenesOG.urlPrincipal
    );
  }, [updateMetaTags]);

  return (
    <div>
      <HeroSlider />
      <FeaturedItems />
      <Promociones />
    </div>
  );
};

export default Inicio;