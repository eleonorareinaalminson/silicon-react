
import React, { useState } from 'react';
import ImageSliderItem from './elements/ImageSliderItem'
import ImageSlider from './elements/ImageSlider'

const Brands = () => {
    const [brands, setBrands] = useState([
        { id: 1, url: "images/brands/brand1.svg", alt: 'brand 1' },
        { id: 2, url: "images/brands/brand2.svg", alt: 'brand 2' },
        { id: 3, url: "images/brands/brand3.svg", alt: 'brand 3' },
        { id: 4, url: "images/brands/brand4.svg", alt: 'brand 4' },
        { id: 5, url: "images/brands/brand5.svg", alt: 'brand 5' },
        { id: 6, url: "images/brands/brand6.svg", alt: 'brand 6' }
    ])

 return (
    <section id="brands">
        <div className="container">
            <ImageSlider images={brands} />
        </div>
    </section>
 )
}

export default Brands