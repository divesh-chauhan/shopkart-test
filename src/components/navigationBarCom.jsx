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
        </>
    )
}


export default NavigationBarCom