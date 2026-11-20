const ProductDetailsCom = ({ product, dispatch }) => {
    return(
        <>
          <div className="product-details-container">
            {
                <div className="product-details" key={product.id}>
                    <p>Category {product.category}</p>
                    <h2>{product.title}</h2>
                    <div className="product-image">
                      < img src={product.thumbnail} alt={product.thumbnail}/>
                    </div>
                    <p>Price : {product.price}</p>
                    <p>Stock : {product.stock}</p>
                    <p>Description : {product.description}</p>
                </div>
            }
          </div>
        </>
    )
}



export default ProductDetailsCom