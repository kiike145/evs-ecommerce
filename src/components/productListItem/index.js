import Card from 'react-bootstrap/Card';
import ProductListItemDetail from "../productListItemDetails";

import "./productListItem.css";

const ProductListItem = ({ product = {} }) => {

    return (
        <div className="producto">
            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={product.rutaimagen} alt="Imagen producto" />
                <Card.Body>
                    <Card.Title>{product.nombre}</Card.Title>
                    <ProductListItemDetail product={product} />
                </Card.Body>
            </Card>
        </div>
    );
}
export default ProductListItem;