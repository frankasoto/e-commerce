import React from 'react'

import Inventory from './pages/Inventory/Inventory';
import { ProductProvider } from './contexts/productContext';
import ProductPage from './pages/ProductPage/ProductPage';

import './App.css'

const App: React.FC = () => {

  return (
    <>
    <ProductProvider>
      <ProductPage />
      {/* <Inventory /> */}
    </ProductProvider>
    </>
  )
}

export default App
