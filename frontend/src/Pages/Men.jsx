import './Men.css';
import Pack from '../Component/Packcard';
import { useState,useEffect } from 'react';
import axios from 'axios';
import Card from '../Component/Card';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../urlConfig'

let value='';
let sizee='';
let pricee='';

function Men(){

    
    const [filter,applyFil]=useState(false)


    const [size,setSize] =useState(""); //for size
    const [val, setVal] = useState(""); //for brand
    const [price,setPrice] = useState(""); //for price
    // console.log(val);
    let getSizeValue=(e)=> {
        sizee = e.target.value;
    }
    let getBrandValue=(e)=> {
        value = e.target.value;
    }
    let getPriceValue=(e)=> {
        pricee = e.target.value;
    }

    console.log(value);
    console.log(sizee);
    const [pro, setPro] = useState()
    
    useEffect(() => {
        axios.get(`${api}/product/getproductbyfil?size=${sizee}&brand=${value}&price[lte]=${pricee}`)
            .then(res => {
                // setVal(val)
                console.log(res.data)
                // res.data.products.forEach((item) => {
                //     console.log(item);
                // })
                setPro(res.data)
                // if(res.data.products.length===0){
                    // navigate('/notavailable');
                // }
            }).catch(error => {
                console.log(error);
            })
    }, [sizee,value,pricee])


    const navigate=useNavigate();
    const ref = useRef([]);
    const Unchecked = () => {
        // for (let i = 0; i < ref.current.length; i++) {
        //     ref.current[i].checked = false;
        // }
        // navigate('/MenCategory');
        window.location.reload();
    }



    return(  
        // <div className='mmain'>
        //     <Filter className='filter'/>
        //     <div className='content'>
        //         <div className='mhead'>Men's  Footwear</div><br/>
        //         <Pack/>
        //     </div>
        // </div>

        <div className='mmain'>
            <div className='filter'>
                <h2>Search & Filter</h2>
                <p>Make sure that you are selecting all three filters</p>
                <div className='fdiv'>
                    {/* Make sure you are selecting all parameters for filtering */}
                    <h3>Filter by Shoe Size</h3>
                    <div className='option'onChange={(e)=>getSizeValue(e)}>
                        
                        <div>
                            <input className='ch' type='checkbox' ref={(element) => { ref.current[0] = element }} value={12} checked={size === '12' } onClick={(e) => setSize(e.target.value)}></input><label>12</label>
                        </div>
                        
                        <div>
                            <input className='ch' type='checkbox' ref={(element) => { ref.current[1] = element }} value={11} checked={size === '11'} onClick={(e) => setSize(e.target.value)}></input><label>11</label>
                        </div>
                        
                        <div>
                            <input className='ch' type='checkbox' ref={(element) => { ref.current[2] = element }} value={10} checked={size === '10'} onClick={(e) => setSize(e.target.value)}></input><label>10</label>
                        </div>
                        
                        <div>
                            <input className='ch' type='checkbox' ref={(element) => { ref.current[3] = element }} value={9} checked={size === '9'} onClick={(e) => setSize(e.target.value)}></input><label>9</label>
                        </div>
                        
                        <div>
                            <input className='ch' type='checkbox' ref={(element) => { ref.current[4] = element }} value={8} checked={size === '8'} onClick={(e) => setSize(e.target.value)}></input><label>8</label>
                        </div>
                        
                        <div>
                            <input className='ch' type='checkbox' ref={(element) => { ref.current[5] = element }} value={7} checked={size === '7'} onClick={(e) => setSize(e.target.value)}></input><label>7</label>
                        </div>
                        
                        <div>
                            <input className='ch' type='checkbox' ref={(element) => { ref.current[6] = element }} value={6} checked={size === '6'} onClick={(e) => setSize(e.target.value)}></input><label>6</label>
                        </div>
                        
                        <div>
                            <input className='ch' type='checkbox' ref={(element) => { ref.current[7] = element }} value={5} checked={size === '5'} onClick={(e) => setSize(e.target.value)}></input><label>5</label>
                        </div>
                    </div><br/>
                </div>
                <div className='fdiv'>
                    <h3>Filter by Brand</h3>
                    <div className='option'
                     onChange={(e)=>getBrandValue(e)}
                     >
                        <div>
                            <input className='ch' type='checkbox' ref={(element) => { ref.current[8] = element }} value={'Adidas'} checked={val === "Adidas"} onClick={(e) => setVal(e.target.value)}></input>
                            <label>Adidas</label>
                        </div>
                        <div>
                            <input className='ch' type='checkbox' ref={(element) => { ref.current[9] = element }} value={'Nike'} checked={val === "Nike"} onClick={(e) => setVal(e.target.value)}></input>
                            <label>Nike</label>
                        </div>
                        <div>
                            <input className='ch' type='checkbox' ref={(element) => { ref.current[10] = element }} value={'Bata'} checked={val === "Bata"} onChange={(e) => setVal(e.target.value)}></input>
                            <label>Bata</label>
                        </div>
                        <div>
                            <input className='ch' type='checkbox' ref={(element) => { ref.current[11] = element }} value={'Paragon'} checked={val === "Paragon"} onChange={(e) => setVal(e.target.value)}></input>
                            <label>Paragon</label>
                        </div>
                        <div>
                            <input className='ch' type='checkbox'ref={(element) => { ref.current[12] = element }} value={'Lakhani'} checked={val === "Lakhani"} onChange={(e) => setVal(e.target.value)}></input>
                            <label>Lakhani</label>
                        </div>
                        <div>
                            <input className='ch' type='checkbox' ref={(element) => { ref.current[13] = element }} value={'Skechers'} checked={val === "Skechers"} onChange={(e) => setVal(e.target.value)}></input>
                            <label>Skechers</label>
                        </div>
                    </div><br/>
                </div>
                <div className='fdiv x'>
                    <h3>Filter by Price</h3>
                    <div className='option'onChange={(e)=>getPriceValue(e)}>
                        <div>
                            <input className='ch' type='checkbox' ref={(element) => { ref.current[14] = element }} value={1000} checked={price === "1000"} onChange={(e) => setPrice(e.target.value)}></input><label>below 1,000 Rs.</label>
                        </div>
                        <div>
                            <input className='ch' type='checkbox' ref={(element) => { ref.current[15] = element }} value={2500} checked={price === "2500"} onChange={(e) => setPrice(e.target.value)}></input><label>below 2,500 Rs.</label>
                        </div>
                        <div>
                            <input className='ch' type='checkbox' ref={(element) => { ref.current[16] = element }} value={5000} checked={price === "5000"} onChange={(e) => setPrice(e.target.value)}></input><label>below 5,000 Rs.</label>
                        </div>
                        <div>
                            <input className='ch' type='checkbox' ref={(element) => { ref.current[17] = element }} value={7500} checked={price === "7500"} onChange={(e) => setPrice(e.target.value)}></input><label>below 7,500 Rs.</label>
                        </div>
                        <div>
                            <input className='ch' type='checkbox' ref={(element) => { ref.current[18] = element }} value={10000} checked={price === "10000"} onChange={(e) => setPrice(e.target.value)}></input><label>below 10,000 Rs.</label>
                        </div>
                        {/* <div>
                            <input className='ch' type='checkbox' ref={(element) => { ref.current[19] = element }} value={7500} checked={price === "7500"} onChange={(e) => setPrice(e.target.value)}></input><label>Above 10,000 Rs.</label>
                        </div> */}
                    </div>
                </div>

                <button className='bu' onClick={()=>applyFil(true)}>Apply Filter</button>
                <button className='bu ex' onClick={Unchecked}>Reset Filter</button>
                
            </div>
            <div className='content'>
                <div className='mhead'>Men's  Footwear</div><br/>
                <div className='maincart'>
                {
                    filter?(
                        pro && pro.map(item => (
                            <Card id={item._id} n={item.name} b={item.brand} p={item.price} cat={item.category}
                            src={item.productPictures} s={item.size}
                            />
                            ))
                        
                    ):(<Pack/>)
                }
                </div>
            </div>
        </div>
    );
}
export default Men;