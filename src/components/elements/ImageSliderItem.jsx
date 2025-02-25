import React from 'react'

const ImageSliderItem = ({ item }) => {
  return (
    <div className="imageslider-item">

        <img src={item.url} alt={item.alt} />

    </div>
  )
}

export default ImageSliderItem