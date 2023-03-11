import "./productListItemDetail.css"

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ProductListItemDetail = ({ product }) => {

    const isLogged = sessionStorage.getItem("isLogged");

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const productList = sessionStorage.getItem("productList");

    const onAddToProductsUser = () => {

        // Obtenemos el valor de la variable "productList", en caso de que sea null -> se inicializa como un array vacio
        const productList = JSON.parse(sessionStorage.getItem("productList")) || [];
        productList.push(product);
        sessionStorage.setItem("productList", JSON.stringify(productList));
        handleClose();
    };

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Details
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{product.nombre}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={product.rutaimagen} className="imagenProducto"></img>
                    <p>{product.descripcion}</p>
                    <p>Price: {product.precio}€</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                    {isLogged === "true" ?
                        // <Button variant="primary" onClick={handleClose}>
                        <Button variant="primary" onClick={onAddToProductsUser}>
                            Add to the cart
                        </Button>
                        :
                        <p>Have to be logged</p>
                    }
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ProductListItemDetail;