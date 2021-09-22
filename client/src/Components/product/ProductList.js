import { Box } from '@material-ui/core';
import React, { useEffect } from 'react'
import Product from './Product';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts as listProducts } from '../../redux/action/productAction';

const ProductList = () => {
 
    const { products } = useSelector(state => state.getProducts);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(listProducts())
    },[dispatch])

    return (
        <Box style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
            <Product  products={products} />

        </Box>
    )
}

export default ProductList;
