import { useEffect, useState } from 'react';
import ProductList from '../productList';
import "./home.css";

const Home = () => {

    const [product , setProduct] = useState([]);

    //const id1 = Math.floor(Math.random() * 10) + 1;
    //const id2 = Math.floor(Math.random() * 10) + 1;

    useEffect(() => {
            fetch("http://localhost:8080/articulos/list")
                .then(response => response.json())
                .then(data => setProduct(data))
        } , []
    );

    return(
        <ProductList products = {product} />
    );
};

export default Home;