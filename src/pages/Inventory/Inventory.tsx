import React from 'react';
import products from '../sampleInventory';
import IndividualComponent from './IndividualComponent';
import { Product } from '../../interfaces/interfaces';
import { ProductContext } from '../../contexts/productContext';




const Inventory: React.FC = () => {
  const [list, setList] = React.useState<Product[]>(products);
  const { productList, setProductList } = React.useContext(ProductContext);
  const [search, setSearch] = React.useState<string>('');
  React.useEffect(() => {
    setProductList(products)
  });

  const searchResults = React.useCallback(() => {
    const searchList = productList.filter((item: Product) => item.productName.toLowerCase().includes(search.toLowerCase()));
    setList(searchList);
    if(search.length === 0) {
      setList(productList);
    }
  }, [productList, search])

  React.useEffect(() => {
    searchResults();
  }, [search, searchResults])

  const sortByPrice = (lowerEnd: string) => {
    if(lowerEnd ==='low') {
      const itemCopy:Product[] = productList.slice().sort((a: Product, b: Product) => a.price - b.price);
      setList(itemCopy);
    } else {
      const itemCopy:Product[] = productList.slice().sort((a: Product, b: Product) => b.price - a.price);
      setList(itemCopy);
    }
  }

  const sortByRating = () => {
    console.log('function ran');
    const itemCopy: Product[] = productList.slice().sort((a: Product, b: Product) => b.rating - a.rating);
    setList(itemCopy);
  }

  return (
    <div className='page'>
      <div className='search-bar'>
        <input type='text' name='search' onChange={(e) => setSearch(e.target.value)}/>
        <button onClick={() => sortByPrice('low')}>sort low to hi</button>
        <button onClick={() => sortByPrice('high')}>sort hi to low</button>
        <button onClick={sortByRating}>Filter by rating</button>
      </div>
      <div className='itemList'>
        {list.length > 0 && list.map((product, index) => index < 10 ? <IndividualComponent product={product} key={index}/> : null)}
      </div>
    </div>
  )
}

export default Inventory;