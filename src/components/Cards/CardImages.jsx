import { Link } from "react-router-dom";
import {Card} from "react-bootstrap";
import "./CardImages.css";

const CardImages = ({products}) => {


  return products.map(({id,url_imagen, nombre,stock,categoria_id})=>{

    return(
      <Link to={`/item/${id}`} className="Link">
      
      <Card style={{ width: "25rem", marginTop:"2rem" }} key={id}>
        <Card.Img variant="top" src={url_imagen} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>Unidades: {stock}</Card.Text>
          
          
        </Card.Body>
      </Card>
      </Link>
    );
  })
};

export default CardImages;
