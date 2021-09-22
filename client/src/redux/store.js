import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getProductsReducer, getProductDetailReducer } from './reducers/productReducer';
import { addToCartReducer } from './reducers/addToCartReducer';
import { getCategory } from './reducers/getCategory';

const reducers = combineReducers({
    getProducts: getProductsReducer,
    getProductDetail: getProductDetailReducer,
    getCart: addToCartReducer,
    category: getCategory
})

const middleware = [thunk];

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;