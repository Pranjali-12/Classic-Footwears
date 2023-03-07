// import { NineKPlus } from '@mui/icons-material';
import { useEffect } from 'react';
import { useState } from 'react';
import './Filter.css';
import axios from 'axios';
import api from '../urlConfig'

let value='';

function Filter(){
    
    const [val, setVal] = useState("");
    // console.log(val);
    let getCheckboxValue=(e)=> {
        value = e.target.value;
    }

    // const [value, setValue] = useState()
    // console.log(value);
    useEffect(() => {
        axios.get(`${api}/product/getproductbyfil?brand=${value}`)
            .then(res => {
                // setVal(val)
                console.log(res.data.products);
                // setValue(res.data.products)
            }).catch(error => {
                console.log(error);
            })
    }, [value])

    return(
            <div className='filter'>
                <h2>Search & Filter</h2>
                <div className='fdiv'>
                    <h3>Filter by Shoe Size</h3>
                    <div className='option'>
                        <div>
                            <input className='ch' type='checkbox'></input><label>12.5</label>
                        </div>
                        <div>
                            <input className='ch' type='checkbox'></input><label>12</label>
                        </div>
                        <div>
                            <input className='ch' type='checkbox'></input><label>11.5</label>
                        </div>
                        <div>
                            <input className='ch' type='checkbox'></input><label>11</label>
                        </div>
                        <div>
                            <input className='ch' type='checkbox'></input><label>10.5</label>
                        </div>
                        <div>
                            <input className='ch' type='checkbox'></input><label>10</label>
                        </div>
                        <div>
                            <input className='ch' type='checkbox'></input><label>9.5</label>
                        </div>
                        <div>
                            <input className='ch' type='checkbox'></input><label>9</label>
                        </div>
                        <div>
                            <input className='ch' type='checkbox'></input><label>8.5</label>
                        </div>
                        <div>
                            <input className='ch' type='checkbox'></input><label>8</label>
                        </div>
                        <div>
                            <input className='ch' type='checkbox'></input><label>7.5</label>
                        </div>
                        <div>
                            <input className='ch' type='checkbox'></input><label>7</label>
                        </div>
                        <div>
                            <input className='ch' type='checkbox'></input><label>6.5</label>
                        </div>
                        <div>
                            <input className='ch' type='checkbox'></input><label>6</label>
                        </div>
                        <div>
                            <input className='ch' type='checkbox'></input><label>5.5</label>
                        </div>
                        <div>
                            <input className='ch' type='checkbox'></input><label>5</label>
                        </div>
                    </div><br/>
                </div>
                <div className='fdiv'>
                    <h3>Filter by Brand</h3>
                    <div className='option'
                     onChange={(e)=>getCheckboxValue(e)}
                     >
                        <div>
                            <input className='ch' type='checkbox' value={'Adidas'} checked={val === "Adidas"} onClick={(e) => setVal(e.target.value)}></input>
                            <label>Adidas</label>
                        </div>
                        <div>
                            <input className='ch' type='checkbox' value={'Nike'} checked={val === "Nike"}onClick={(e) => setVal(e.target.value)}></input>
                            <label>Nike</label>
                        </div>
                        <div>
                            <input className='ch' type='checkbox' value={'Bata'} checked={val === "Bata"}onChange={() => setVal("Bata")}></input>
                            <label>Bata</label>
                        </div>
                        <div>
                            <input className='ch' type='checkbox' value={'Paragon'} checked={val === "Paragon"}onChange={() => setVal("Paragon")}></input>
                            <label>Paragon</label>
                        </div>
                        <div>
                            <input className='ch' type='checkbox' value={'Lakhani'} checked={val === "Lakhani"}onChange={() => setVal("Lakhani")}></input>
                            <label>Lakhani</label>
                        </div>
                        <div>
                            <input className='ch' type='checkbox' value={'Skechers'} checked={val === "Skechers"}onChange={() => setVal("Skechers")}></input>
                            <label>Skechers</label>
                        </div>
                    </div><br/>
                </div>
                <div className='fdiv x'>
                    <h3>Filter by Price</h3>
                    <div className='option'>
                        <div>
                            <input className='ch' type='checkbox'></input><label>below 1,000 Rs.</label>
                        </div>
                        <div>
                            <input className='ch' type='checkbox'></input><label>1,000-2,500 Rs.</label>
                        </div>
                        <div>
                            <input className='ch' type='checkbox'></input><label>1,000-2,500 Rs.</label>
                        </div>
                        <div>
                            <input className='ch' type='checkbox'></input><label>2,500-5,000 Rs.</label>
                        </div>
                        <div>
                            <input className='ch' type='checkbox'></input><label>5,000-7,500 Rs.</label>
                        </div>
                        <div>
                            <input className='ch' type='checkbox'></input><label>7,500-10,000 Rs.</label>
                        </div>
                        <div>
                            <input className='ch' type='checkbox'></input><label>Above 10,000 Rs.</label>
                        </div>
                    </div>
                </div>

                <button className='bu'>Apply Filter</button>
                <button className='bu ex'>Reset Filter</button>
                
            </div>
    );
}
export default Filter;