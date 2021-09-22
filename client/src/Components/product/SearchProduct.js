import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { Box, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: '100%',
    width: 300,
    height: 350,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    // width: '40%',
  },
  component:{
      padding: '25px 20px'
  },
  btn:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image:{
    width: '40%',
    marginLeft: '30%'
  },
  text:{
    fontSize: 12
  }
}));

const SearchProduct = ({product}) => {
    const classes = useStyles();
    return (
        <>
            {
                product.map(item=>(
                <>
                    <Box className={ classes.component }>
                    <Card className={classes.root}>
                        <Box style={{height: '100%', paddingTop: '20%'}}>
                        <img src={item.image} className={classes.image} />
                        </Box>
                            <Typography className={classes.text} variant="body2" color="textSecondary">
                            {item.title}
                            </Typography>
                        <Box style={{ padding: '10px 10px' }} className={classes.btn}>
                            <Button variant='contained' color="primary">Add To Cart</Button>
                        </Box>
                    </Card>
                    </Box>
                </>
                ))
            }
      </>
    )
}


export default SearchProduct;
