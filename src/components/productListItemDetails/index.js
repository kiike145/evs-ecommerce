import "./productListItemDetail.css"

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ProductListItemDetail = ({ product }) => {

    const [show, setShow] = useState(false);
    // const [productosUser, setProductosUser] = useState([]);
    const isLogged = sessionStorage.getItem("isLogged");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                        <Button variant="primary" onClick={handleClose}>
                            Add to de cart
                        </Button> : <p>Have to be logged</p>
                    }

                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ProductListItemDetail;