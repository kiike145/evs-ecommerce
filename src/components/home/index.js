import { useEffect, useState } from 'react';
import ProductList from '../productList';
import "./home.css";

const Home = () => {

    const [photos , setPhotos] = useState([]);

    useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/photos?id=1&id=2&id=3&id=4&id=5&id=6')
                .then(response => response.json())
                .then(data => setPhotos(data))
        } , []
    );

    return(
        <ProductList products = {photos} />
    );
};

export default Home;