
import { useState, useEffect } from 'react'
import CardImages from '../src/components/Cards/CardImages'
import { getProducts,filterCategory } from '../src/asyncMock'

const EsteticaPage = () => {
    const [products, setProducts] = useState([]);
    
  useEffect(() => {
    getProducts().then((res) => setProducts(res));
  }, []);

  filterCategory(products,1).then((res) => setProducts(res));
  return (
    <div className='imgContainer'><CardImages products={products} /></div>
  )
}

export default EsteticaPage