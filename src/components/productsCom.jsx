import { useProductContext } from "../context/provider.jsx"
import titleFix from "../utils/titleFix.js"

const ProductsCom = () => {
    const {state, dispatch} = useProductContext()
    
    return(
        <div className="product-container">
           {
                state.filtered.length > 0 
                ? (
                    state.filtered.map(product => (
                        <div className="product" key={product.id}>
                            <p>Category {product.category}</p>
                            <h2>{titleFix(product.title)}</h2>
                            <div className="product-image">
                            < img src={product.thumbnail} alt={product.thumbnail}/>
                            </div>
                            <p>Price : {product.price}</p>
                        </div>
                    ))
                ) : 
                (
                <p>No products found ⚠</p>
                )
            }
        </div>
    )
}


export default ProductsCom