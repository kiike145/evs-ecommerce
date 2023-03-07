import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import "./productListItem.css";

const ProductListItem = ({ product = {} }) => {

    return (
        <Card style={{ width: '15rem' }}>
            <Card.Img variant="top" src={product.rutaimagen} alt="Imagen producto" />
            <Card.Body>
                <Card.Title>{product.nombre}</Card.Title>
                <Card.Text>{product.descripcion}</Card.Text>
                <Button variant="primary"><a>Añadir al carrito</a></Button>
            </Card.Body>
        </Card>
    );
}
export default ProductListItem;