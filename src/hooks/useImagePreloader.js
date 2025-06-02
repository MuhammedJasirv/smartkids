import { useState, useEffect } from 'react';

const useImagePreloader = (imageSrc) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!imageSrc) {
      setIsLoaded(true);
      return;
    }

    const img = new Image();
    img.src = imageSrc;
    
    const handleLoad = () => {
      setIsLoaded(true);
    };

    const handleError = () => {
      console.error(`Failed to load image: ${imageSrc}`);
      setIsLoaded(true); // Continue even if image fails to load
    };

    img.addEventListener('load', handleLoad);
    img.addEventListener('error', handleError);
    
    // If image is already cached
    if (img.complete) {
      setIsLoaded(true);
    }

    return () => {
      img.removeEventListener('load', handleLoad);
      img.removeEventListener('error', handleError);
    };
  }, [imageSrc]);

  return isLoaded;
};

export default useImagePreloader;