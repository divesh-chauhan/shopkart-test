import { useState, useEffect } from "react";

const useFetchProducts = (url) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const controller = new AbortController()
        const fetchAPI = async () => {
            try {
                setLoading(true)
                setError(null)

                const res = await fetch(url, {signal : controller.signal})
                if(!res.ok){
                    throw new Error("server error ⚠")
                }

                const data = await res.json()
                console.log(data)
                setProducts(data.products || data)
            } catch (error) {
                if(error.name !== 'AbortError'){
                    setError(error.message)
                }
                return
            } finally{
                setLoading(false)
            }
        }

        fetchAPI()
        return () => controller.abort()
    }, [url])

    return{
        products,
        loading,
        error
    }
}


export default useFetchProducts