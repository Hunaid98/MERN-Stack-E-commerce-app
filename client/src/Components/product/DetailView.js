import { getProductDetail } from '../../redux/action/productAction';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { Box, makeStyles,Typography } from '@material-ui/core';
import {LocalOffer as Badge} from '@material-ui/icons';
import clsx from 'clsx';
import ActionItem from './ActionItem';


const useStyle = makeStyles({
    component:{
        background: '#f2f2f2'
    },
    container:{
        background: '#ffffff',
        margin: '0 80px',
        display: 'flex'
    },
    rightContainer:{
        marginTop: 70,
        '& > * ':{
            marginTop: 10
        }
    },
    smallText:{
        fontSize: 14
    },
    greyTextColor:{
        color: '#878787'
    },
    price:{
        fontSize: 28
    },
    description:{
        fontSize: 20,
        fontWeight: 600
    },
    badge:{
        fontSize: 14,
        color: 'green',
        marginRight: 4
    }

})


const DetailView = ({match})=>{
    const { product } = useSelector(state=> state.getProductDetail);
    const dispatch = useDispatch();
    
    console.log(product);

    useEffect(()=>{
        dispatch(getProductDetail(match.params.id))
    },[dispatch])

    const classes = useStyle();
    return (
        <Box className={classes.component}>
            { product && Object.keys(product).length &&
                <Box className={classes.container}>
                    <Box style={{ minWidth: '40%' }}>
                        <ActionItem product={product} />
                    </Box>
                    <Box className={ classes.rightContainer }>
                    <Typography style={{ fontWeight: 600, fontSize: 18 }}>{ product.title }</Typography>
                    <Typography className={clsx(classes.smallText, classes.greyTextColor)}>{ product.rating.rate } ratings & { product.rating.count } review</Typography>
                    <Typography className={classes.price}>Rs:  { product.price }</Typography>
                    <Typography className={ classes.description }>Product details:  </Typography>
                    <Typography>{ product.description }</Typography>
                    <Typography className={clsx(classes.smallText, classes.greyTextColor)}><span style={{ fontWeight: 600, color: 'black' }}> <Badge className={classes.badge} /> Category:</span> { product.category }</Typography>
                    </Box>
                </Box>
            }
            
        </Box>
    )
}

export default DetailView;