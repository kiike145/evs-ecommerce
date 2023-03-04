import "./productListItem.css";

const ProductListItem = ({product = {} }) => {

    return(
        <div>
            <p>{product.title}</p>
        </div>
    );
}

export default ProductListItem;