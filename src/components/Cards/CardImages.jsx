import { Link } from "react-router-dom";
import {Button, Card} from "react-bootstrap";
import "./CardImages.css";

const CardImages = ({products}) => {


  return products.map(({id,url_imagen, nombre,stock,categoria_id})=>{

    return(
      <Card style={{ width: "25rem", marginTop:"2rem" }} key={id}>
        <Card.Img variant="top" src={url_imagen} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>Unidades: {stock}</Card.Text>
          
          <Link to={`/item/${id}`} variant="primary" className="Link btn btn-primary">Ver</Link>
        </Card.Body>
      </Card>
    );
  })
};

export default CardImages;
