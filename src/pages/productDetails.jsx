import { useParams } from "react-router-dom";
import { useProductContext } from "../context/provider.jsx";
import ProductDetailsCom from "../components/productDetailsCom.jsx";

const ProductDetails = () => {
    const {id} = useParams()
    const {state, dispatch} = useProductContext() 
    
    const product = state.allProducts.find(item => 
        Number(item.id) === Number(id)
    )

    if(!product){
        return <p>Product not found ⚠</p>
    }
    
    return(
        <>
          <h1>Product Details.</h1>
          <ProductDetailsCom product={product} dispatch={dispatch}/>
        </>
    )
}



export default ProductDetails