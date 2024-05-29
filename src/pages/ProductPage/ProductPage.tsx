
import React from 'react';
import products from '../sampleInventory';
// import { Product } from '../../interfaces/interfaces';
import ImageCarousel from './ImageCarousel';
const ProductPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);
  const imageArray: string[] = [products[0].image,products[1].image,products[2].image,products[3].image,products[4].image,products[1].image];

  const changeImage = (num: number) => {
    console.log('num clicked is', num);
    if(num >= 0 && num < imageArray.length) {
      setCurrentIndex(num);
      console.log('image index highlighted', currentIndex)
    }
  }

  return (
    <div className='product-page'>
      <div className='product-overview'>
        <div className='product-image'>
          <img src={products[currentIndex].image} alt='main product image'/>
          {/* <div className='product-carousel'>

          </div> */}
          <ImageCarousel images={imageArray} changeImage={changeImage} currentIndex={currentIndex}/>
        </div>
        <div className='product-desc'>
          <p>{products[0].description}</p>
        </div>
        {/* <div className='product-purchase'>
          <h1>purchase</h1>
        </div> */}
      </div>

    </div>
  )
}
export default ProductPage;