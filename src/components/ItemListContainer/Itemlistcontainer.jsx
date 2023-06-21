import CardImages from "../Cards/CardImages";

import { useEffect, useState } from "react";
//import { useParams } from "react-router-dom";
import { getProducts,filterCategory } from "../../asyncMock";

const ItemListContainer = () => {

  const [products, setProducts] = useState([]);

  


  useEffect(() => {
    getProducts().then((res) => setProducts(res));
  }, []);
  
  
  



  return (
    <div className="imgContainer">
      <CardImages products={products} />
    </div>
  );
};

export default ItemListContainer;
