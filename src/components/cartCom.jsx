import { useProductContext } from "../context/provider.jsx";
import { smallDescription } from "../utils/descriptionFix.js";

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
                    <p>Description : {smallDescription(item.description)}</p>
                </div>
            ))
         }
        </>
    )
}



export default CartCom