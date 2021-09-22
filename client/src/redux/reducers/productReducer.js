import * as actionType from '../constants/ProductsConstant';


export const getProductsReducer = (state = { products: [] }, action)=>{
    switch(action.type){
        case actionType.GET_PRODUCT_SUCCESS:
            return { products: action.payload }
        case actionType.GET_PRODUCT_FALIURE:
            return { error: action.payload }
        default:
            return state
    }

}

export const getProductDetailReducer = (state = { product: {} }, action)=>{
    switch (action.type) {
        case actionType.GET_PRODUCT_DETAIL_SUCCESS:
            return { product: action.payload }
            case actionType.GET_PRODUCT_DETAIL_FALIURE:
                return { error : action.payload }
        default:
            return state;
    }
}