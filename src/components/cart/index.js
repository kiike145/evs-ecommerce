import "./cart.css";

const Cart = () => {

    const productList = JSON.parse(sessionStorage.getItem("productList"));

    let total = 0;

    if (productList !== null) {

        productList.forEach(product => {
            total += product.precio;
        });
    }

    <h3>Total: {total}€</h3>
    return (
        <>
            <h2>Cart</h2>

            <div className="row">
                {productList === null ?
                    <p className="infoMsg">The cart is empty</p> :

                    <div className="col-9">
                        {productList.map((product) => (
                            <div key={product.id} className="row productRow">
                                <div className="col-3 d-flex justify-content-center">
                                    <img src={product.rutaimagen} className="imagenCarro"></img>
                                </div>

                                <div className="col info">
                                    <h3>{product.nombre}</h3>
                                    <p>{product.descripcion}</p>
                                </div>

                                <div className="col d-flex justify-content-end precio">
                                    <h3>{product.precio}€</h3>
                                </div>

                                <hr />
                            </div>
                        ))}
                    </div>
                }

                {productList === null ? "" :
                    <div className="col-3 d-flex justify-content-start totalPrecio">
                        <h3>Total: {total}€</h3>
                    </div>
                }
            </div>
        </>
    );
};

export default Cart;