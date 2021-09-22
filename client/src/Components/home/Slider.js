import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {bannerData} from '../constants/data';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
    image:{
        width: '100%',
        height: 280
    },
    carousal:{
        marginTop: 8
    }
})

 const Slider = ()=>{
     const classes = useStyle();
    return(
        <>

        <Carousel className={classes.carousal}
        autoplay={true}
        animation="slide" 
        indicators={false}
        navButtonsAlwaysVisible={true}
        cycleNavigation={true}
        navButtonsProps={{ 
            style:{
                background: '#ffffff',
                color: 'grey',
                borderRadius: 0,
                margin: 0,

            }
         }}
        
        
        >
            
            {
                bannerData.map( image => (
                    <img src={image} className={classes.image} />
                ))
            }
        </Carousel>

        </>
                
           
            
    )
}

export default Slider;