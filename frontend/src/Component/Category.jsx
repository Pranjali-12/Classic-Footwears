import '../Pages/Men.css';
import Filter from '../Component/Filter';
import Pack from '../Component/Packcard';
import data from '../Data/men.json';
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../Component/Card';
import api from '../urlConfig'
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

let value='';
let sizee='';
let pricee='';
function Category() {
    const { category } = useParams();
    const [product, setProduct] = useState([])
    useEffect(() => {
        axios.get(`${api}/product/getproduct/${category}`)
            .then(res => {
                console.log(res.data.products)
                setProduct(res.data.products)
            }).catch(error => {
                console.log(error);
            })
    }, [])

    
    
    // const [filter,applyFil]=useState(false)


    // const [size,setSize] =useState(""); //for size
    // const [val, setVal] = useState(""); //for brand
    // const [price,setPrice] = useState(""); //for price
    // // console.log(val);
    // let getSizeValue=(e)=> {
    //     sizee = e.target.value;
    // }
    // let getBrandValue=(e)=> {
    //     value = e.target.value;
    // }
    // let getPriceValue=(e)=> {
    //     pricee = e.target.value;
    // }

    // console.log(value);
    // console.log(sizee);
    // const [pro, setPro] = useState()
    
    // useEffect(() => {
    //     axios.get(`http://localhost:2000/api/product/getproductbyfil?size=${sizee}&brand=${value}&price[lte]=${pricee}`)
    //         .then(res => {
    //             // setVal(val)
    //             // console.log(res.data.products);
    //             setPro(res.data.products)
    //             // if(res.data.products.length===0){
    //                 // navigate('/notavailable');
    //             // }
    //         }).catch(error => {
    //             console.log(error);
    //         })
    // }, [sizee,value,pricee])



    return (
        <div className='mmain'>
            
            <div className='content'>
                <div className='mhead'>Men's  Footwear</div><br />
                <div className='maincart'>
                    {/* {
                        product && product.map(item => (
                            <Card id={item._id} n={item.name} b={item.brand} p={item.price} cat={item.category}
                    src={item.productPictures} s={item.size}
                    />
                        ))
                    } */}
                    {
                    
                        product && product.map(item => (
                        <Card id={item._id} n={item.name} b={item.brand} p={item.price} cat={item.category}
                src={item.productPictures} s={item.size}
                />
                    ))
                }
                </div>
            </div>
        </div>
    );
}
export default Category;