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
        </>
    )
}



export default CheckoutCom