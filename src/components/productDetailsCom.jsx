import { useProductContext } from "../context/provider.jsx"
import titleFix from "../utils/titleFix.js"

const ProductDetailsCom = ({id}) => {
    const {state} = useProductContext() 
    
    const product = state.allProducts.find(item => 
        Number(item.id) === Number(id)
    )

    if(!product){
        return <p>Product not found ⚠</p>
    }

    return(
        <>
          <div className="product-details-container">
            {
                product.map(item => (
                    <div className="product-details" key={item.id}>
                        <p>Category {item.category}</p>
                        <h2>{titleFix(item.title)}</h2>
                            <div className="product-image">
                            < img src={item.thumbnail} alt={item.thumbnail}/>
                            </div>
                        <p>Price : {item.price}</p>
                        <p>Stock : {item.stock}</p>
                        <p>Description : {item.description}</p>
                    </div>
                ))
            }
          </div>
        </>
    )
}



export default ProductDetailsCom