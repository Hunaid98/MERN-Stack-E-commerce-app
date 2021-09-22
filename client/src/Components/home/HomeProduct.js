import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { makeStyles, Box, Typography, Button } from '@material-ui/core';
import Countdown from 'react-countdown';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyle = makeStyles({
    image:{
        height: 150
    },
    component:{
        marginTop: 12,
        background: '#ffffff'
    },
    deal:{
        padding: '15px 20px',
        display: 'flex',
        borderBottom: '1.2px solid #c7c7c75e'
    },
    dealText:{
        fontSize: 24,
        fontWeight: 600,
        marginRight: 20
    },
    timer:{
        color: '#7f7f7f',
        display: 'flex',
        alignItems: 'center',
        marginLeft: 10
    },
    view:{
        marginLeft: 'auto',
        background: '#2874f0',
        fontSize: 13,
        borderRadius: 2
    },
    text:{
        fontSize: 14,
        marginTop: 5,

    },
    wrapper:{
        padding: '35px 15px'
    }
})

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


const HomeProduct = ({ timer , title, products })=>{

    const classes = useStyle();
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
 
   
    const renderer = ({ hours, minutes, seconds }) => {
        return (< span  className={classes.timer}>{hours}: {minutes}: {seconds} Left</span>)
    };

    return(
        <>
        <Box className={classes.component}>
            <Box className={classes.deal}>
                <Typography className={classes.dealText} >{title}</Typography>
                {
                    timer &&
                    <React.Fragment>
                        <img src={timerURL} style={{ width: 24 }} />
                        <Countdown date={Date.now() + 5.04e+7} renderer={renderer}  />
                    </React.Fragment>
                
                }
                <Button variant="contained" color="primary" className={classes.view}>View All</Button>
            </Box>
            <Carousel 
                responsive={responsive}
                infinite={true}
                draggable={false}
                swipeable={false}
                centerMode={true}
                autoPlay={true}
                autoPlaySpeed={10000}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {
                    products.map(product =>(
                        <Link  to= {`product/${product.id}`}>
                            <Box textAlign='center' className={classes.wrapper}>
                                <img src={product.image} className={classes.image} />
                                <Typography   className={classes.text} style={{ fontWeight: 600, color: '#212121' }} >{product.title}</Typography>
                                <Typography className={classes.text} style={{ color: 'green' }} >{product.price}</Typography>
                                <Typography className={classes.text}  style={{ color: '#212121', opacity:'.6'}}>{product.category}</Typography>
                            </Box>
                        </Link>
                    ))
                }
            </Carousel>
        </Box>
        </>
    )
}

export default HomeProduct;