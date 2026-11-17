import { useEffect } from "react";
import { useProductContext } from "../context/provider.jsx";

const Products = () => {
    const {state, dispatch} = useProductContext()

    useEffect(() => {
        console.log(state.allProducts)
    }, [])
}

export default Products