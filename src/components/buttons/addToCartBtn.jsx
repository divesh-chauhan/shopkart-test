const AddToCartBtn = ({ product, dispatch }) => {
    return(
        <>
          <button onClick={() => dispatch({ type : 'ADD_TO_CART', product })}>
            Add to cart
          </button>
        </>
    )
}



export default AddToCartBtn