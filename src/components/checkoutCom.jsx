import { useEffect } from "react"

const CheckoutCom = ({ state, dispatch }) => {
    let cart = state.cart || []

    let subTotal = cart.reduce((acc, item) => 
        acc+= item.price * item.quantity, 
    0)

    let shipping = subTotal > 2000 ? 0 : 100
    let totalPrice = subTotal + shipping

    useEffect(() => {
        console.log(cart)
        console.log(totalPrice)
    }, [cart])
}



export default CheckoutCom