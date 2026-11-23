const NavigationBarCom = ({ state, dispatch }) => {
    return(
        <>
          <section className="search-section">
            <input 
              type="search" 
              placeholder="search your product"
              onChange={(e) => dispatch({ type : 'SEARCH', title : e.target.value })}
            />
          </section>
          <section className="filter-section">
            <select onChange={(e) => dispatch({ type : 'FILTER', category : e.target.value })}>
                <option value="All">All</option>
                <option value="beauty">beauty</option>
                <option value="fragrances">fragrances</option>
                <option value="furniture">furniture</option>
                <option value="groceries">groceries</option>
            </select>
          </section>
          <section className="sort-section">
            <select onChange={(e) => {
                if(e.target.value === 'low-price'){
                    dispatch({ type : 'LOW-PRICE' })
                } else if(e.target.value === 'high-price'){
                    dispatch({ type : 'HIGH-PRICE' })
                }else{
                    dispatch({ type : 'SET_PRODUCTS', payload : state.allProducts })
                }
            }}>
                <option value="">Default</option>
                <option value="low-price">Low Price</option>
                <option value="high-price">High Price</option>
            </select>
          </section>
          <section className="cart-count">
            <p>🛒 
              <span>
                {
                  state.cart.length > 0 
                  ? state.cart.length 
                  : 0
                }
              </span>
            </p>
          </section>
        </>
    )
}


export default NavigationBarCom