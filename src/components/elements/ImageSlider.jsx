import ImageSliderItem from "./ImageSliderItem"

const ImageSlider = ({ images }) => {
    return (
        <div className="imageslider">
        {
           images.map(image => (<ImageSliderItem key={image.id} item={image} />))
        }
    </div>
   )
  }
  
  export default ImageSlider