import { useEffect, useState } from 'react';
import ProductList from '../productList';

import "./products.css";

const Products = () => {

    const [product , setProduct] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/articulos/list")
            .then(response => response.json())
            .then(data => setProduct(data))
    }, []
    );
    
    return (
        <ProductList products = {product} />
    );
};

export default Products;