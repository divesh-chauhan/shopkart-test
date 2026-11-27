import { Link } from "react-router-dom"

const ProceedToPaymentBtn = () => {
    return(
        <>
          <Link to='/products/order'>
            <button>Proceed to payment</button>
          </Link>
        </>
    )
}



export {
    ProceedToPaymentBtn
}