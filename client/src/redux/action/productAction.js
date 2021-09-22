import axios from 'axios';
import * as action from '../constants/ProductsConstant';


// const url = 'http://locallhost:8000';

export const getProducts = ()=> async(dispatch)=>{
    try{
        const {data} = await axios.get(`https://fakestoreapi.com/products`);
        dispatch({ 
            type: action.GET_PRODUCT_SUCCESS,
            payload: data
        })
        
    }catch(error){
        dispatch({ 
            type: action.GET_PRODUCT_FALIURE,
            payload: error.response
        })
    }
}

export const getProductDetail = (id)=> async(dispatch)=>{
    try{
        const {data} = await axios.get(`https://fakestoreapi.com/products/${id}`);
        dispatch({ 
            type: action.GET_PRODUCT_DETAIL_SUCCESS,
            payload: data
        })
        
    }catch(error){
        dispatch({ 
            type: action.GET_PRODUCT_DETAIL_FALIURE,
            payload: error.response
        })
    }
}