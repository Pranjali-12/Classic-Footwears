import './Packcard.css'
import Card from './Card'
import { ReactDOM, useState,useEffect } from 'react';
import axios from 'axios';
import api from '../urlConfig'

function Pack(prop){

    const [product,setProduct]=useState('');
    useEffect(() => {
        axios.get(`${api}/product/getproduct`)
            .then(res => {
                console.log(res.data.products);
                setProduct(res.data.products);

            }).catch(error => {
                console.log(error);
            })
    }, [])

    console.log(product);
    return(
        <div className='maincart'>
            {
                product && product.map(item=>(
                    <Card id={item._id} n={item.name} b={item.brand} p={item.price} cat={item.category}
                    src={item.productPictures} s={item.size}
                    />
                ))
            }
        </div>
    );
} 

export default Pack;