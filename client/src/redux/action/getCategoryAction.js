import axios from 'axios'
import * as action from '../constants/getCategory';

export const getCategoryAction = ()=> async(dispatch) => {
        try{
            const {data} = await axios.get('https://fakestoreapi.com/products/categories');
            dispatch({
                type: action.GET_CATEGORY,
                payload: data
            })
        }catch(error){
            console.log('Category error');
        }
        

}
