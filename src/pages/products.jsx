import { useEffect } from "react";
import { useProductContext } from "../context/provider.jsx";
import ProductsCom from "../components/productsCom.jsx";
import NavigationBarCom from "../components/navigationBarCom.jsx";

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
          <NavigationBarCom state={state} dispatch={dispatch} />
          <ProductsCom/>
        </>
    )
}

export default Products