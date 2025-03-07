import ImageSliderItem from "./ImageSliderItem"
import { useState, useEffect } from 'react'

const ImageSlider = ({ images }) => {
    const [displayCount, setDisplayCount] = useState(images.length);
    
    useEffect(() => {
        // Funktion för att uppdatera antal visade varumärken baserat på skärmbredd
        const updateDisplayCount = () => {
            if (window.innerWidth >= 1200) {
                // Desktop - visa alla
                setDisplayCount(images.length);
            } else if (window.innerWidth >= 768) {
                // Tablet - visa de 4 första
                setDisplayCount(4);
            } else {
                // Mobil - skulle vara dold via CSS, men sätt till 0 för säkerhets skull
                setDisplayCount(0);
            }
        };
        
        // Kör vid första rendering
        updateDisplayCount();
        
        // Lägg till event listener för window resize
        window.addEventListener('resize', updateDisplayCount);
        
        // Cleanup
        return () => window.removeEventListener('resize', updateDisplayCount);
    }, [images.length]);
    
    return (
        <div className="imageslider">
        {
           images.slice(0, displayCount).map(image => (
               <ImageSliderItem key={image.id} item={image} />
           ))
        }
    </div>
   )
  }
  
  export default ImageSlider