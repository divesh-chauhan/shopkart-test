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
        </>
    )
}


export default NavigationBarCom