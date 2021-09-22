import * as actionType from '../constants/getCategory';


export const getCategory = (state = { categoryItem: [] }, action)=>{
    switch(action.type){
        case actionType.GET_CATEGORY:
            return { categoryItem: action.payload }
        default:
            return state;
    }

}