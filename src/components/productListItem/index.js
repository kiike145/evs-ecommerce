import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import "./productListItem.css";

const ProductListItem = ({ product = {} }) => {

    return (
        <div className="producto">
            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={product.rutaimagen} alt="Imagen producto" />
                <Card.Body>
                    <Card.Title>{product.nombre}</Card.Title>
                    <Card.Text>{product.descripcion}</Card.Text>
                    <Button variant="primary"><a>Añadir al carrito</a></Button>
                </Card.Body>
            </Card>
        </div>
    );
}
export default ProductListItem;