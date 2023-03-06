import "./productListItem.css";

const ProductListItem = ({product = {} }) => {

    return(
        <div>
            <p>{product.nombre}</p>
            <p>{product.precio}</p>
            <p>{product.rutaimagen}</p>
        </div>
    );
}

export default ProductListItem;