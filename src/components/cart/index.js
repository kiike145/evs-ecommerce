import "./cart.css";

const Cart = () => {

    const productList = JSON.parse(sessionStorage.getItem("productList"));

    return (
        <>
            <h2>Cart</h2>

            {productList === null ?
                <p className="infoMsg">The cart is empty</p> :

                productList.map((product) => (
                    <div key={product.id} className="row">
                        <div className="col-3 d-flex justify-content-center">
                            <img src={product.rutaimagen} className="imagenCarro"></img>
                        </div>

                        <div className="col info">
                            <h3>{product.nombre}</h3>
                            <p>{product.descripcion}</p>
                        </div>

                        <div className="col d-flex flex-col precio">
                            <h3>{product.precio}€</h3>
                        </div>

                        <hr />
                    </div>
                ))}
        </>
    );
};

export default Cart;