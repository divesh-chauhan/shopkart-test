import { useParams } from "react-router-dom";
import ProductDetailsCom from "../components/productDetailsCom.jsx";

const ProductDetails = () => {
    const {id} = useParams()
    
    return(
        <>
          <ProductDetailsCom id={id}/>
        </>
    )
}



export default ProductDetails