import './Contact.css';
import {IoMailOutline} from 'react-icons/io5';
import {SiInstagram} from 'react-icons/si';
import {FiPhoneCall} from 'react-icons/fi';
import { useState } from 'react';
import api from '../urlConfig';

function Contact(){


    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [msg,setMsg]=useState('');

    const sendMsg=async (e)=>{
        e.preventDefault();
        
        alert("Message Sent Successfully💕")
        const result= await fetch(`${api}/contact`,{
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                name,email,msg
            })
        })
        // console.log(result)
    }

    return(
        <div className='cmain'>
            <div className='h'>Keep In Touch</div>
            <div className='back'>
                <form className='frm'>
                    <div className='name'>Your Name</div>
                    <input className='inputt' type="text" name='name' onChange={(e)=>setName(e.target.value)}/><br/><br/>

                    <div className='name'>Your E-Mail</div>
                    <input className='inputt' type="text"  name='email' onChange={(e)=>setEmail(e.target.value)}/><br/><br/>

                    <div className='name'>Message</div>
                    <textarea className='inputt txt' type="textarea"  name='msg' onChange={(e)=>setMsg(e.target.value)}/>

                    <button className='s' onClick={sendMsg}>Submit</button>
                </form>
            </div>
            <div className='front'>
                <div className='contact'>Contact</div><br/>
                <a href="https://www.instagram.com/?hl=en"><SiInstagram size={35}/></a>
                <div class="tt">Classic_Footwears</div><br/>

                <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"><IoMailOutline size={40}/></a>
                <div class="tt">classicfootwears123@gmail.com</div><br/>

                <a href="https://web.whatsapp.com/"><FiPhoneCall size={35}/></a>
                <div class="tt">98******90</div>
                
            </div>
        </div>
    )
}

export default Contact;