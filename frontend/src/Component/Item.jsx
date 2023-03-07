import {AiTwotoneDelete} from 'react-icons/ai';
import {HiMinus,HiPlus} from 'react-icons/hi';
import api from '../urlConfig'


function Item(props){

    const token = JSON.parse(atob(localStorage.getItem('token').split('.')[1]));
    console.log(token);

    // console.log(props);
    const product = props.id;
    const name=props.n;
    const brand=props.b;
    const price = props.pri;
    const quantity = 1;
    // console.log(props)
    // console.log(product);
    const cartItems = {
        product,name,brand, quantity, price
    }
    console.log(cartItems)
    async function removeItem(){
        try {
            const result = await fetch(`${api}/cart/removeitem`, {
                method: 'POST',
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({
                    id:token._id,
                    productId:product
                })

            }).then((res) => res.json())
            console.log(result)
            window.location.reload();
            // console.log(result.cart.cartItems);
        } catch (error) {
            console.log(error);
        }
        console.log("remove")
    }

    function increment(quantity){
        quantity=parseInt(quantity)
        // quantity=quantity+1
        console.log(quantity)
        // alert(quantity)
    }

    function decrement(quantity){
        quantity--
        alert(quantity)
    }

    return(
        <tr className='itemblock'>
            <td className='tp'>{props.n}</td>
            <td className='tp'>{props.b}</td>
            <td className='tp'>
                {/* <HiMinus size={18} className='icon' onClick={decrement}/> */}
                &nbsp;&nbsp;{quantity}&nbsp;&nbsp;
                {/* <HiPlus size={18} className='icon'onClick={() => quantity+1}/> */}
                </td>
            <td className='tp'>{props.pri} Rs.</td>
            <td className='tp'><AiTwotoneDelete className='icon' onClick={removeItem}/></td>
        </tr>
    )
}

export default Item;