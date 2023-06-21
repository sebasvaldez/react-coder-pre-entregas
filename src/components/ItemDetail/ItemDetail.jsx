import "./ItemDetail.css";
const ItemDetail = ({
  id,
  nombre,
  descripcion,
  url_imagen,
  stock,
  precio,
  categoria_id,
}) => {
  return (
    <div className="ItemDetail">
      <figure>
        <img src={url_imagen} alt="" />
      </figure>

      <div className="ItemDetail-info">
        <h2>{nombre}</h2>
        <p>{descripcion}</p>
        <p>${precio}</p>
        <p>Unidades: {stock}</p>
      </div>
    </div>
  );
};

export default ItemDetail;
