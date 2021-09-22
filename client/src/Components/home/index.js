
import {Box, makeStyles} from '@material-ui/core';
import Navbar from "./Navbar";
import Sliderr from './Slider';
import { useEffect } from 'react';
import HomeProduct from './HomeProduct';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts as listProducts } from '../../redux/action/productAction';
// import {products} from '../constants/data';

const useStyle = makeStyles({
    component:{
        padding: 10,
        background: '#f2f2f2f2'
    }
})

const Home =()=>{
    const classes = useStyle();
    const { products } = useSelector(state => state.getProducts);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(listProducts())
    },[dispatch])
    
    return(
        <>
            <Navbar />
            <Box className={classes.component}>
                <Sliderr />
                <HomeProduct timer={true} title={'Deal of the Day'}  products={products} />
                <HomeProduct timer={false} title={'Electroics'} products={products}  />
                <HomeProduct timer={false}  title={'Clothes'} products={products}   />
                <HomeProduct timer={false} title={'Grocery'} products={products}   />
                <HomeProduct timer={false} title={'Home Appliance'} products={products}  />
            </Box>
        </>
    )
}

export default Home;