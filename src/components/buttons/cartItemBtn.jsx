const RemoveCartBtn = ({ id, dispatch }) => {
    return(
        <>
          <button onClick={() => dispatch({ type:'REMOVE_FROM_CART', id })}>🗑</button>
        </>
    )
}



export {
    RemoveCartBtn
}