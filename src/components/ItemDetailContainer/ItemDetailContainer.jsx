import { useEffect, useState } from "react";
import { getProductById } from "../../asyncMock.js";
import ItemDetail from "../ItemDetail/ItemDetail.jsx";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getProductById(id).then((res) => setProduct(res));
  }, []);

  

  return (
    <div className="ItemDetalContainer">
      <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer;