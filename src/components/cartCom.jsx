import { useProductContext } from "../context/provider.jsx";
import { smallDescription } from "../utils/descriptionFix.js";
import { RemoveCartBtn, IncreaseQuantityBtn, DecreaseQuantityBtn } from "./buttons/cartItemBtn.jsx";
import CheckoutBtn from "./buttons/checkoutBtn.jsx";

const CartCom = () => {
    const {state, dispatch} = useProductContext()
    
    if(state.cart.length < 1){
        return <p>No cart items found ⚠ please add to cart first.</p>
    }

    return(
        <>
         {
            state.cart.map(item => (
                <div className="cart-item" key={item.id}>
                    <p>Category {item.category}</p>
                    <p>Brand {item.brand}</p>
                    <div className="img-container">
                        <img src={item.thumbnail} alt={item.thumbnail} />
                    </div>
                    <p>Price {item.price}</p>
                    <p>Quantity {item.quantity}</p>
                    <p>Description : {smallDescription(item.description)}</p>
                    <div className="cart-item-cta">
                        <DecreaseQuantityBtn id={item.id} dispatch={dispatch}/>
                        <IncreaseQuantityBtn id={item.id} dispatch={dispatch}/>
                        <RemoveCartBtn id={item.id} dispatch={dispatch}/>
                    </div>
                </div>
            ))
         }

         <CheckoutBtn />
        </>
    )
}



export default CartCom