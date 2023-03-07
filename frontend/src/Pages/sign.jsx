import './sign.css';
import {BsFacebook,BsLinkedin,BsGoogle} from 'react-icons/bs'
import { Link } from "react-router-dom";
import { render } from '@testing-library/react';
import axios from 'axios'
import React, { Component } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../urlConfig'

function Sign(){
    const [firstName,setFname]=useState('')
    const [lastName,setLname]=useState('')
    // const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigate = useNavigate()

    async function registerUser(e){
        
        e.preventDefault();
        const res= await fetch(`${api}/signup`,{
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                firstName,
                lastName,
                email,
                password,
            })
        })
        const data = await res.json()
        if(res.status === 200) { 
            alert("Registered Successfully 💫")
        }
        if(password.length<6){
            alert("Password must be minimum six characters 💀")
            navigate('/sign')
        }
        else{
            navigate("/login",{replace:true});
        }
        console.log(data);
    }
    return(
        <div className='mai'>
        <form className='log'>
            <div className='lhead'>Sign-up</div>
            <div className='block'>
                <div className='label'>Firstname</div>
                <input className='input' type='text' value={firstName} onChange={(e)=>setFname(e.target.value)} ></input>
            </div>
            <div className='block'>
                <div className='label'>Lastname</div>
                <input className='input' type='text' value={lastName} onChange={(e)=>setLname(e.target.value)} ></input>
            </div>
            <div className='block'>
                <div className='label'>E-Mail</div>
                <input className='input' type='text' value={email} onChange={(e)=>setEmail(e.target.value)} ></input>
            </div>
            {/* <div className='block'>
                <div className='label'>Username</div>
                <input className='input' type='text' value={name} onChange={(e)=>setName(e.target.value)}  ></input>
            </div> */}
            <div className='block'>
                <div className='label'>Password</div>
                <input className='input' type='password'  value={password} onChange={(e)=>setPassword(e.target.value)} ></input>
            </div>
            <button type='submit'  onClick={registerUser}>Sign-UP</button>
            <div className='or'>OR</div>
            <div className='or'>Continue With</div><br/>
            <div className='sl'>
                <BsGoogle size={30} className='g'/>
                <BsFacebook size={30} className='f'/>
                <BsLinkedin size={30} className='l'/>
            </div>
            <div className='need'>
                Already a user? <Link className='link' to='/login'>Log-in</Link>
            </div>
        </form>
        </div>
    );
    // }
}

export default Sign;