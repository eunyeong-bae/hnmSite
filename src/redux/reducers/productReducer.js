let initialState = {
    productList:[],
    productDetailList: {},
}

function productReducer(state=initialState, action){
    const { type, payload} = action;

    switch(type){
        case "GET_PRODUCT_SUCCESS":
            return {
                ...state,
                productList: payload.data
            }
        case "GET_PRODUCT_DETAIL":
            return {
                ...state,
                productDetailList: payload.data
            }
        default:
            return {...state};
    }
}

export default productReducer;