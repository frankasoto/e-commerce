import React from 'react';
import products from '../sampleInventory';
import { Product } from '../../interfaces/interfaces';

const IndividualComponent: React.FC<Product> = ({product}) => {
  // console.log('product in component', product);
  return (
    <div className='component'>
      <div className='image-box'>
        <img src={product.image} />
      </div>
      <div className='product-info'>
          <h1 className='product-name'>{product.productName}</h1>
          <p className='product-description'>{product.description}</p>
      </div>
      <div className='product-price'>
        <p>
          {product.price}
          <p>{product.rating} out of 5</p>
        </p>
      </div>
    </div>
  )

}

export default IndividualComponent;