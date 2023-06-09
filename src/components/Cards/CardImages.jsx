import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardImages = () => {
  const [products, setProducts] = useState([]);

  const getInfo = async () => {
    try {
      const response = await axios.get(
        "https://backend-ecommerce-production-120d.up.railway.app/api/products"
      );
     
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };



  useEffect(() => {
    getInfo();
   }, []);
  

  return products.map((product)=>{

    return(
      <Card style={{ width: "25rem", marginTop:"2rem" }} key={product.id}>
        <Card.Img variant="top" src={product.url_imagen} />
        <Card.Body>
          <Card.Title>{product.nombre}</Card.Title>
  
          <Button variant="primary">Ver</Button>
        </Card.Body>
      </Card>
    );
  })
};

export default CardImages;
