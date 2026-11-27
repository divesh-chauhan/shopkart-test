const CheckoutCom = ({ state, dispatch }) => {
    let cart = state.cart || []

    let subTotal = cart.reduce((acc, item) => acc+= item.price * item.quantity,0)

    let discount = cart.reduce((acc, item) => {
        let itemTotal = item.price * item.quantity
        let itemDiscount = itemTotal * ((item.discountPercentage || 0) / 100)
        return acc + itemDiscount
    }, 0)

    let shipping = subTotal === 0 || subTotal > 2000 ? 0 : 100
    let totalPrice = subTotal - discount + shipping


    return(
        <>
          <h1>Checkout</h1>
          <div className="cart-details">
            <h2>Cart Details</h2>
            {
                state.cart.map(item => (
                    <div className="cart-item" key={item.id}>
                        <p>Category {item.category}</p>
                        <p>Brand {item.brand}</p>
                        <div className="img-container">
                            < img src={item.thumbnail} alt={item.thumbnail}/>
                        </div>
                        <p>Price {item.price}</p>
                        <p>Quantity {item.quantity}</p>
                    </div>
                ))
            }
          </div>

          <div className="user-details">
            <section>
                <h2>User Details</h2>
                <div className="details">
                    <p>Name : User</p>
                    <p>Phone : 934515****</p>
                    <p>Email : user@gmail.com</p>
                </div>
            </section>
            <section>
                <h2>Address</h2>
                <div className="address">
                    <p>Village/City : Tilaipali</p>
                    <p>Street : Bajrang Chowk</p>
                    <p>District : Raigarh</p>
                    <p>Block : Kharsia</p>
                    <p>State : Chhattisgarh (C.G)</p>
                </div>
            </section>
          </div>

          <div className="calculation">
            <h2>Calculation</h2>
            <section className="calculate-price">
            <p>Sub-Total {subTotal}</p>
            <p>Discount {discount}</p>
            <p>Shipping {shipping}</p>
            <p>Total Price {totalPrice}</p>
            </section>
          </div>
        </>
    )
}



export default CheckoutCom