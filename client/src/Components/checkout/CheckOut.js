import React,{useEffect} from 'react';
import clsx from 'clsx';
import { useSelector, useDispatch} from "react-redux";
import { useState } from 'react';
import axios from 'axios';
import TotalView from '../cart/TotalView';
import { Link, useHistory } from 'react-router-dom';

const CheckOut = () => {
    const [price, setPrice] = useState(0);
    const { cartItem } = useSelector( state=> state.getCart);
    const history = useHistory

    const orderinInitial ={
        username: '',
        address: '',
        phoneNumber: ''
    }
    
    const [ input, setInput ] = useState(orderinInitial);

    useEffect(() => {
        totalAmount();
    }, [cartItem]);
    
    const totalAmount = () => {
        let price = 0;
        console.log(cartItem);
        cartItem.map(item => {
            price += item.price
        })
        setPrice(price);
    }

    const fun =()=>{
        setInput(orderinInitial);
        history.push('/')
    }

    const placeorder= async (e)=>{
        try{
            e.preventDefault();
            setInput(orderinInitial);
            const data = {
                username: input.username,
                itemId: cartItem[0].id,
                userId: window.localStorage.getItem("_id"),
                address: input.address,
                phoneNumber: input.phoneNumber,
                totalPrice: price
            }
        
        
            await axios.post(`http://localhost:8004/api/v1/item/:getSpId/order`, data);
            alert('Success Place Order');
            fun();   
        }catch(error){
            console.log('Error from Order', error);
        }
    }

    const inputChange =(e)=>{
        setInput({ ...input, [e.target.name]: e.target.value } )
    }

    

    return (
        <>
        <div style={{ display: 'flex' }}>
            <form className={clsx('container', 'mt-5')} style={{ maxWidth: '50%' }}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Full Name</label>
                    <input type="name" name='username' class="form-control" onChange={(e)=> inputChange(e)}  id="exampleInputEmail1" aria-describedby="emailHelp" />
                    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Full Address</label>
                    <input type="text" name='address' class="form-control" onChange={(e)=> inputChange(e)}   id="exampleInputPassword1" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Phone Number</label>
                    <input type="number" name='phoneNumber' onChange={(e)=> inputChange(e)}   class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
               <button type="submit" class="btn btn-primary"  onClick={placeorder}>Place Order</button>
            </form>
            <TotalView cartItem={cartItem} />
            </div>


        </>
    )
}


export default CheckOut;