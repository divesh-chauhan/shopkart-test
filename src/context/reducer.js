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

        default :
         return state
    }
}



export {
    initState,
    reducerHandler
}