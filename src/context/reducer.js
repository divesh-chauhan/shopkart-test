const initState = {
    allProducts : [],
    filtered : [],
    cart : [],
    search : '',
    category : 'All'
}

const reducerHandler = (state, action) => {
    switch(action.type){
        case 'SET_PRODUCTS':
            return{
                ...state,
                allProducts : action.payload,
                filtered : action.payload
            }
        case 'SEARCH':
           return applyFilter({...state, search : action.title})
        case 'FILTER':
            return applyFilter({...state, category : action.category})
        case 'LOW-PRICE':
            return{
                ...state,
                filtered : [...state.filtered].sort((a, b) => a.price - b.price)
            }
        case 'HIGH-PRICE':
            return{
                ...state,
                filtered : [...state.filtered].sort((a, b) => b.price - a.price)
            }
        case 'ADD_TO_CART':
            const existing = state.cart.find(item => 
                Number(item.id) === Number(action.product.id)
            )

            if(existing){
                return {
                    ...state,
                    cart : state.cart.map(item => 
                        Number(item.id) === Number(action.product.id)
                        ? {...item, quantity : item.quantity + 1}
                        : item
                    )
                }
            }else{
                return{
                    ...state,
                    cart : [{...action.product, quantity : 1}, ...state.cart]
                }
            }
        default :
         return state
    }
}

const applyFilter = (state) => {
    let result = [...state.allProducts]

    if(state.search){
        result = result.filter(
            item => item.title.toLowerCase()
            .includes(state.search.toLowerCase())
        )
    }

    if(state.category !== 'All'){
        result = result.filter(
            item => item.category.toLowerCase() === 
            state.category.toLowerCase()
        )
    }

    return {
        ...state,
        filtered : result
    }
}


export {
    initState,
    reducerHandler
}