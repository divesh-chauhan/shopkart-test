import { useEffect } from "react";
import { createContext, useContext, useReducer } from "react";
import useFetchProducts from "../api/api.js";
import { initState, reducerHandler } from "./reducer.js";


const ProductContext = createContext()

const ProductProvider = ({ children }) => {
    const products = useFetchProducts('https://dummyjson.com/products')
    const [state, dispatch] = useReducer(reducerHandler, initState)

    useEffect(() => {
        console.log(products)
        if(products.length > 0){
           dispatch({ type : 'SET_PRODUCTS', payload : products })
        }
    }, [products])

    return(
        <ProductContext.Provider value={{ state, dispatch }}>
            { children }
        </ProductContext.Provider>
    )
}

const useProductContext = () => useContext(ProductContext)



export {
    ProductProvider,
    useProductContext
}


