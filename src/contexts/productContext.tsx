import React, { createContext } from 'react';
import { Product } from '../interfaces/interfaces';

interface ProductInterface {
  productList: Product[],
  setProductList: React.Dispatch<React.SetStateAction<Product[]>>

}

export const ProductContext = createContext<ProductInterface | undefined>(undefined);
interface ProviderInterface {
  children: React.ReactNode
}
export const ProductProvider =({children} : ProviderInterface) => {

  const [productList, setProductList] = React.useState<Product[]>([]);
  const value = {
    productList,
    setProductList,
  }
  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>

  )
}