import Cart from '../Pages/Cart'; import './Card.css';
import { useNavigate } from 'react-router-dom';
import api from '../urlConfig'
import { useState, useEffect } from 'react';
import axios from 'axios';
// import {FcLike} from 'react-icons/fc';

function Card(props) {
    const navigate = useNavigate();

    const token = JSON.parse(atob(localStorage.getItem('token').split('.')[1]));
    // console.log(token);

    function navigateToLogin() {
        navigate('/login');
    }

    console.log(props);
    const product = props.id;
    const name=props.n;
    const brand=props.b;
    const price = props.p;
    const quantity = 1;
    console.log(props)
    console.log(product);
    // console.log(cartItems)
    // alert(token._id,product);
    console.log(token._id,product)
    async function addToCart(){
        try {
            const result = await fetch(`${api}/cart/addtocart`, {
                method: 'POST',
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({
                    id:token._id,
                    productId:product
                })

            }).then((res) => res.json())
            console.log(token._id,product)
            console.log(result);
            navigate('/Cart');
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className='cart'>
            <img className='cimg' src={props.src}></img>
            {/* <div className='like'><FcLike size={25}/></div> */}
            <div className='pri'>
                Brand Name : {props.b}<br />
                Price : {props.p} Rs.
            </div>
            <div className='but'><button className='buy' onClick={
                token ? addToCart : navigateToLogin
            }>Add to Cart</button></div>

        </div>
    );
}
export default Card;