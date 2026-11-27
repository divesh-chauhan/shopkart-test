import { useProductContext } from "../context/provider.jsx"
import CheckoutCom from "../components/checkoutCom.jsx"

const Checkout = () => {
    const {state, dispatch} = useProductContext()

    return(
        <>
          <CheckoutCom state={state} dispatch={dispatch}/>
        </>
    )
}



export default Checkout