import './login.css';
import {BsFacebook,BsLinkedin,BsGoogle} from 'react-icons/bs'
import { Link,useNavigate } from "react-router-dom";
import { useState } from 'react';
import React from 'react'
import api from '../urlConfig'

function Login(){

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate = useNavigate()
    // const [error,setError]=useState('');
    // const auth=useSelector(state=>state.auth);

    // const dispatch=useDispatch();

    // useEffect(()=>{
    //     if(!auth.authenticate){
    //         dispatch(isUserLoggedIn());
    //     }
        
    // },[])

    async function userLogin(e){
        e.preventDefault();
        try {
            const result = await fetch(`${api}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': "application/json",
                },
                body: JSON.stringify({
                    email, password
                })

            }).then((res) => res.json())
            // console.log(result.token)
            localStorage.setItem('token', result.token)
            
            // console.log(result.user)
            if(result.status === 200) { 
                alert("Login Successfully 💫")
                navigate('/')}
            else if(password.length<6){
                alert("Password must be minimum six characters 💀")
            }
            else if(result.status === 400){
                alert("Invalid Email or Password 🥺")
            }
            else {
                alert("Invalid Email or Password 🥺")
            }

        }
        catch (err) {
            console.log(err)
        }
        window.location.reload();
    }

    return(
        <div className='mai'>
        <form className='log1'>
            <div className='lhead'>Log-in</div>
            <div className='block'>
                <div className='label'>Email</div>
                <input className='input' type='email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
            </div>
            <div className='block'>
                <div className='label'>Password</div>
                <input className='input' type='password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
            </div>
            <div className='cb'>
                <input className='check' type='checkbox'></input>
                <div className='p'>Remember Me?</div>
            </div>
            <button onClick={userLogin}>LOGIN</button>
            <div className='f'>Forgot Password?</div>
            <div className='or'>OR</div>
            <div className='or'>Continue With</div><br/>
            <div className='sl'>
                <BsGoogle size={30} className='g'/>
                <BsFacebook size={30} className='f'/>
                <BsLinkedin size={30} className='l'/>
            </div>
            <div className='need'>
                Need an account? <Link className='link' to='/Sign'>Sign-Up</Link>
                <div></div>
            </div>
        </form>
        </div>
    );
}

export default Login;