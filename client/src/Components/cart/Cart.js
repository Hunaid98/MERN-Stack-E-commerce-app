import { makeStyles, Box, Typography, Button } from "@material-ui/core";
import { useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector, useDispatch } from "react-redux";
import Cartitem from './CartItem';
import { removeCartItem } from '../../redux/action/addToCartAction';
import EmptyCart from "./EmptyCart";
import TotalView from './TotalView';

const useStyle = makeStyles({
    component:{
        marginTop: 20,
        padding: '30px 135px',
        display: 'flex'
    },
    leftComponent:{
        width: '67%'
    },
    header:{
        padding: '15px 24px',
        background: '#ffffff'
    },
    bottom: {
        padding: '16px 22px',
        background: '#fff',
        boxShadow: '0 -2px 10px 0 rgb(0 0 0 / 10%)',
        borderTop: '1px solid #f0f0f0'
    },
    placeOrder: {
        display: 'flex',
        marginLeft: 'auto',
        background: '#fb641b',
        color: '#fff',
        borderRadius: 2,
        width: 250,
        height: 51
    }
    
})

const Cart =()=>{
    const { cartItem } = useSelector( state=> state.getCart);
    const dispatch  = useDispatch();
    const history = useHistory();

    useEffect(()=>{
        console.log(cartItem)
    },[])

    const removeItem =(id)=>{
        dispatch(removeCartItem(id))
    }

    const classes = useStyle();

    const handleClick=()=>{
        history.push('/checkout');
    }

    return(
        <>
            {
                cartItem.length ? 
                <Box className= {classes.component}>
                    <Box className={classes.leftComponent}>
                        <Box className={ classes.header }>
                            <Typography style={{ fontWeight: 600, fontSize: 18 }}>My Cart({ cartItem.length })</Typography>
                        </Box>
                        {
                            cartItem.map( item=>(
                                <Cartitem item={item} removeItem={removeItem} />
                             ) )
                        }
                        <Box className={classes.bottom}>
                            <Button variant="contained" onClick={ handleClick } className={classes.placeOrder}>Place Order</Button>
                        </Box>
                    </Box>
                    <TotalView cartItem={cartItem} />
                </Box> 
                : <EmptyCart />
            }
        </>
    )


}

export default Cart;