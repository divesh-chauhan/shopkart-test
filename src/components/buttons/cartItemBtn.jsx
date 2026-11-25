const RemoveCartBtn = ({ id, dispatch }) => {
    return(
        <>
          <button onClick={() => dispatch({ type:'REMOVE_FROM_CART', id })}>🗑</button>
        </>
    )
}

const IncreaseQuantityBtn = ({ id, dispatch }) => {
    return(
        <>
          <button onClick={() => dispatch({ type : 'INCREASE_QUANTITY', id })} >+</button>
        </>
    )
}


export {
    RemoveCartBtn,
    IncreaseQuantityBtn
}