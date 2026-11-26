import { Link } from "react-router-dom"

const CheckoutBtn = () => {
    return(
        <>
          <Link to='/products/checkout'>
             <button>Checkout</button>
          </Link>
        </>
    )
}



export default CheckoutBtn