import ProductListItem from "../productListItem";
import "./productList.css";

const ProductList = ({ products = [] }) => {

    return (
        <>
            <div className="lista">
                {products.map(product =>
                    (<ProductListItem key={`product-${product.id}`} product={product} />)
                )}
            </div>
        </>
    );
}

export default ProductList;