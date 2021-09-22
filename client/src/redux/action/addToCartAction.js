import axios from "axios";
import * as action from '../constants/addtoCartType';



export const addToCartAction =(id)=> async(dispatch) =>{
    try{
        const {data} = await axios.get(`https://fakestoreapi.com/products/${id}`);
        dispatch({
            type: action.ADD_TO_CART,
            payload: data
        })

    }catch(error){
        console.log('Error Add to Cart', error);
    }
}

export const removeCartItem = (id) => (dispatch)=>{
    try{
        dispatch({ type: action.REMOVE_TO_CART, payload: id })
    }catch(error){
        console.log('Remove Cart')
    }
}