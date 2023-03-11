import { useEffect, useState } from 'react';
import ProductList from '../productList';
import "./home.css";

import banner from "../../imgs/Scarpe-1440x610-Sneakers-FindYourOwn.webp"

const Home = () => {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/articulos/list")
            .then(response => response.json())
            .then(data => setProduct(data))
    }, []
    );

    return (
        <>
            <h2>Home</h2>
            <div className="d-flex justify-content-center">
                <img src={banner} className="banner"></img>
            </div>

            <h3>Featured Products</h3>
            <ProductList products={product} />
        </>
    );
};

export default Home;