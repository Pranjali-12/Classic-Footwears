import './Cart.css'
import Item from '../Component/Item';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {GiReceiveMoney,GiCash} from 'react-icons/gi'
import {RiSecurePaymentLine} from 'react-icons/ri'
import { Navigate } from 'react-router-dom';
import api from '../urlConfig';



function Cart() {

    // const location  = useLocation();
    // const product=location.state.data;

    // const token = localStorage.getItem('token');


    const navigate=useNavigate();

    const token = JSON.parse(atob(localStorage.getItem('token').split('.')[1]));
    console.log(token._id);

    const [product, setProduct] = useState([]);
    const [total, setTotal] = useState(0);
    useEffect(() => {
        axios.post(`${api}/cart/getcart`, { id: token._id })
            .then(res => {
                console.log(res.data.user.cart)
                // console.log(res.data.products);
                // setProduct(res.data.products);
                setProduct(res.data.user.cart)


                res.data.user.cart.forEach((item) => {
                    console.log(total, item.price);
                    setTotal((prevValue) => prevValue + parseInt(item.price));
                })

                // setItems(data.data[0].cart);
                // data.data[0].cart.forEach((item) => {
                // 	console.log(total, item.price);
                // 	setTotal((prevValue) => prevValue + parseInt(item.price));
                // });
            }).catch(error => {
                console.log(error);
            })
    }, [])
    console.log(product.length)

    const initPayment = (data) => {
		const options = {
			key: 'rzp_test_ewIwnwTqsn3qIZ',
			amount: total,
			currency: data.currency,
			description: 'Test Transaction',
			order_id: data.id,
			handler: async (response) => {
				try {
					const verifyUrl =`${api}/payment/paymentVerify`;
					const { data } = await axios.post(verifyUrl, response);
					console.log(data);
					alert(data.message);
				} catch (error) {
					console.log(error);
				}
			},
			theme: {
				color: '#10676a',
			},
		};
		const rzp1 = new window.Razorpay(options);
		rzp1.on('payment.failed', function (response) {
			alert(response.error.code);
			alert(response.error.description);
			alert(response.error.source);
			alert(response.error.step);
			alert(response.error.reason);
			alert(response.error.metadata.order_id);
			alert(response.error.metadata.payment_id);
		});
		rzp1.open();
	};
	const handlePayment = async (e) => {
		e.preventDefault();
		try {
			const orderURL = `${api}/payment/order`;
			const { data } = await axios.post(orderURL, { amount: total });
			const itemIds = product.map((item) => item._id);
			console.log(itemIds);
			// const createOrder = await axios.post(
			// 	`${import.meta.env.VITE_PROXY}/api/user/orders/add`,
			// 	{ id: token._id, productIds: itemIds, address:address }
			// );
			console.log(data);
			initPayment(data.data);
		} catch (error) {
			console.log(error);
		}
	};

    return (
        <div className='maincart'>
            <div className='mtable'>
                <table className='mcart'>
                    <tr className='itemblock'>
                        <th className='th'>Product</th>
                        <th className='th'>Brand</th>
                        <th className='th'>Quantity</th>
                        <th className='th'>Price</th>
                        <th className='th'>Delete</th>
                    </tr>
                    {/* {
                location?(product && product.map(item=>(
                    <Item 
                    key={item._id} n={item.name} b={item.brand} pro={item.product} q={item.quantity} pri={item.price}
                    /> 
                )))
                :
                (item&&item.map(it=>(
                    <Item key={it._id} n={it.name} b={it.brand} pro={it.product} q={it.quantity} pri={it.price}/>
                )))
            } */}
                    {
                        (product.length !== 0) ? (product && product.map(item => (
                            <Item
                                id={item._id} n={item.name} b={item.brand} pro={item.product} q='1' pri={item.price}
                            />
                        ))) : (<div className='no'>No Items In Cart</div>)
                    }
                    {/* {
                product && product.map(item=>(
                    <Item 
                    id={item._id} n={item.name} b={item.brand} pro={item.product} q='1' pri={item.price}
                    /> 
                ))
            } */}
                </table></div>
            <div className='total'>Total : {total} Rs.</div>
            <div class='wrap'>
                {/* <a href="#" class='button button1'>Make Payment</a>
                <a href="#" class='button button2'>Make Payment</a> */}
                <a href="#" className='button button3' onClick={handlePayment}>Make Payment &nbsp; <GiReceiveMoney size={30}/></a>
                {/* <a href="#" class='button button4'>Make Payment</a> */}
            </div>
            
        </div>
    )
}

export default Cart;