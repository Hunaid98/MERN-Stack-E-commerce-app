import { List, ListItem, makeStyles} from '@material-ui/core';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts as listProducts } from '../../redux/action/productAction';



const useStyle = makeStyles({
    list:{
        position: 'aboslute',
        zIndex: '100',
        background: '#ffffff',
        color: '#000',
        marginTop: '46px'
    }

})




const SearchForm =()=>{
    const [ text, setText ] = useState('');
    const [ open, setOpen ] = useState(true);
    const { products } = useSelector(state => state.getProducts);
    const dispatch = useDispatch();

    const classes = useStyle();

    useEffect(()=>{
        dispatch(listProducts())
    },[dispatch])


    const getText = (text)=>{
        setText(text);
        setOpen(false)
    }

    // const searchBtn = ()=>{
    //         <>
    //         {
                
    //             text &&
    //                 <Box>
    //                     {
    //                         products.filter(item=> item.title.toLowerCase().includes(text.toLowerCase())).map(product=>(
    //                                 <SearchProduct product={product} />
    //                         ))
    //                     }
    //                 </Box>
    //         }
    //         </>
    // }

    return(
        <>
        <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search for products, brands and more" aria-label="Search"
                onChange={(e)=> getText(e.target.value)}
                value={text} />
                {
                    text &&
                    <List className={classes.list} hidden={open}>
                        {
                            products.filter(product=> product.title.toLowerCase().includes(text.toLowerCase())).map(product=>(
                                
                                <ListItem>
                                    <Link to = {`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }} onClick={ ()=> setOpen(true) }>
                                        { product.title }
                                    </Link>
                                </ListItem>
                               
                            ))
                        }
                    </List>
                }
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>

        
        
        </>
    )
}

export default SearchForm;