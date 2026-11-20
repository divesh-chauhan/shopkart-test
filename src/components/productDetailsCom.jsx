import { bigDescription } from "../utils/descriptionFix.js"

const ProductDetailsCom = ({ product, dispatch }) => {
    return(
        <>
          <div className="product-details-container">
            {
                <div className="product-details" key={product.id}>
                    <section>
                    <p>Category {product.category}</p>
                    <p>Brand {product.brand}</p>
                    </section>
                    <h2>{product.title}</h2>
                    <div className="product-image">
                      < img src={product.thumbnail} alt={product.thumbnail}/>
                    </div>
                    <p>Price : {product.price}</p>
                    <p>Rating : {product.rating}</p>
                    <p>Discount : {product.discountPercentage}%</p>
                    <p>Description : {bigDescription(product.description)}</p>
                    <p>Stock : {product.stock}</p>
                    <p>Availability: {product.availabilityStatus}</p>
                    <p>Shipping Information : {product.shippingInformation}</p>
                    <p>Minimum Order Quantity : {product.minimumOrderQuantity}</p>
                    <p>Return Policy : {product.returnPolicy}</p>
                    <p>Warranty Information : {product.warrantyInformation}</p>
                    <p>Weight : {product.weight}</p>
                </div>
            }
          </div>
        </>
    )
}



export default ProductDetailsCom