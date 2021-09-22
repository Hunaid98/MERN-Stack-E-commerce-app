import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Login from '../login/Login';
import {LoginContext} from '../../context/ContextProvider';
import { Typography } from '@material-ui/core';
import Profile from './Profile';
import { useSelector } from 'react-redux';

const Buttons =( props )=>{
    const [open, setOpen] = React.useState(false);
    const {loginAccount, setLoginAccount} = useContext(LoginContext);
    const { cartItem } = useSelector(state=> state.getCart);

    const handleClickOpen = () => {
        setOpen(true);
      };

    return(
        <>
        {
            loginAccount  ? <Typography> <Profile loginAccount={loginAccount} setLoginAccount={setLoginAccount} /> </Typography>
            : <button type="button" class="btn btn-primary mx-5" onClick={()=> handleClickOpen()}>Login</button>
        }
        
        <Link to='/cart' className="container cart mx-5">
            
            <span class=" position-relative shopping-cart">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cartItem.length}
                </span>
            </span>
            <span className='mx-3 shopping-cart'>Cart</span>
            
        </Link>
        <Login  open={open} setOpen={setOpen} setLoginAccount= { setLoginAccount } />
        </>
    )
}

export default Buttons;