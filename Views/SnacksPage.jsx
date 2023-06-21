import { useState, useEffect } from 'react'
import CardImages from '../src/components/Cards/CardImages'
import { getProducts,filterCategory } from '../src/asyncMock'

const SnacksPage = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
      getProducts().then((res) => setProducts(res));
    }, []);
  
    filterCategory(products,3).then((res) => setProducts(res));
  return (
    <div className='imgContainer'><CardImages products={products} /></div>
  )
}

export default SnacksPage