const ProductsCom = (state, dispatch) => {
    return(
        <>
           {
                state.filtered.length > 0 
                ? (
                    state.filtered.map(product => (
                        <div className="product" key={product.id}>
                            <p>Category {product.category}</p>
                            <h2>{product.title}</h2>
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
        </>
    )
}


export default ProductsCom