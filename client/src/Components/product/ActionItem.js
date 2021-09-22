import { Box, Button, makeStyles } from "@material-ui/core";
import clsx from'clsx';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { addToCartAction } from "../../redux/action/addToCartAction";

const useStyle = makeStyles({
    lefContainer:{
        padding : '40px ,0,0 , 80px'
    },
    image:{
        padding: '15px, 20px',
        width: '50%',
        marginLeft: '130px',
        marginTop: '46px'
    },
    btn:{
        height: 50,
        width: '46%',
        marginLeft: 10
    },
    addTocart:{
        background: '#ff9f00',
        color: 'white',
        fontWeight: 600
    },
    buybtn:{
        background: '#fb641b',
        color: '#ffffff'
    }
})

const ActionItem = ({product})=>{
    const classes = useStyle();
    const dispatch = useDispatch();
    const history = useHistory();

    const addToItem = ()=>{
        dispatch(addToCartAction(product.id));
        history.push('/cart');
    }

    return(
        <>
        <Box className={ classes.leftContainer }>
            <img src={ product.image } alt={'product image'} className={ classes.image } />
            
        </Box>
        <Box style={{ marginLeft: '20%', marginTop: 25 }}>
            <Button onClick={ ()=> addToItem() } variant='contained' className= { clsx(classes.btn, classes.buybtn) }>Add to Cart</Button>
            <Button variant='contained' className= { clsx(classes.btn, classes.addTocart) }>Buy Now</Button>
        </Box>
        </>
    )
}

export default ActionItem;