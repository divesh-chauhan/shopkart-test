import { useEffect } from "react";
import { useProductContext } from "../context/provider.jsx";
import ProductsCom from "../components/productsCom.jsx";

const Products = () => {
    const {state, dispatch, loading, error} = useProductContext()

    useEffect(() => {
        console.log(state.allProducts)
    }, [])

    if(loading){
        return <p>loading products...</p>
    }

    if(error){
        return <p>{error}</p>
    }

    return(
        <>
          <ProductsCom state={state} dispatch={dispatch}/>
        </>
    )
}

export default Products