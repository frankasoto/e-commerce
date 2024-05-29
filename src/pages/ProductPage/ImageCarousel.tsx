import React from 'react';

interface CarouselProps {
  images: string[],
  changeImage: React.Dispatch<React.SetStateAction<number>>,
  currentIndex: number,
}

const ImageCarousel = (props: CarouselProps) => {
  // const [currentIndex, setCurrentIndex] = React.useState<number>(0);
  const {images, changeImage, currentIndex} = props;
  const [num, setNum] = React.useState<number>(0);

  return (
    <div className='product-carousel'>
      {images.length > 0  && images.map((image: string, index: number) => (
        <img key={index} src={image} alt='main product image' onClick={() => changeImage(index)}/>
      ))}
    </div>
  )
}

export default ImageCarousel;