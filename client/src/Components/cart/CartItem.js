import { Card,makeStyles, Box,Typography,Button } from "@material-ui/core";
import clsx from 'clsx';
import GroupButton from "./GroupButton";

const useStyle = makeStyles({
    component:{
        display: 'flex',
        borderRadius: 0
    },
    leftComponent:{
        margin: 20,
        display: 'flex',
        flexDirection: 'column'
    },
    rightComponent:{
        marginTop: 20
    },
    smallText:{
        fontSize: 14
    },
    greyTextColor:{
        color: '#878787'
    },
    price:{
        fontSize: 18,
        fontWeight: 600
        
    },
    image:{
        width: '110px',
        marginLeft: '25px',
        marginBottom: '15px',
        height: '130px'
    },
    remove:{
        marginTop: 20,
        fontSize: 16
    }
})


const CartItem = ({ item, removeItem })=>{

    const classes = useStyle();

    return(
        <Card className={ classes.component }>
            <Box className={classes.leftComponent}>
                <img src={item.image} className={classes.image} />
                <GroupButton />
            </Box>
            <Box className={ classes.rightComponent } >
                <Typography style={{ fontSize: 18, fontWeight: 600 }}> {item.title}</Typography>
                <Typography className={clsx(classes.smallText,classes.greyTextColor)}>Category:  {item.category}</Typography>
                <Typography className={classes.price}>Rs:  {item.price}</Typography>
                <Button className={classes.remove} onClick={()=> removeItem(item.id)} >Remove</Button>
            </Box>
        </Card>
    )
}

export default CartItem;