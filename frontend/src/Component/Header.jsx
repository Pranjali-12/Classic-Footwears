import './Header.css';
import logo from './running.png';
import men from './menlogo.avif';
import women from './womenlogo.jpeg';
import kid from './kidlogo.jpg';
import { BsPersonCircle } from 'react-icons/bs';
import { TiShoppingCart } from 'react-icons/ti';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

function Header() {

    function refresh() {
        setTimeout(() => {
            window.location.reload(false);
        }, 500);
    }

    const [isLoggedin, setIsLoggedin] = useState(false);

    const token = localStorage.getItem('token')

    
    // if(token){
    //     const t = JSON.parse(atob(localStorage.getItem('token').split('.')[1]));
    //     console.log(t)
    // }
    
    useEffect(() => {
        if (token) {
            setIsLoggedin(true)
        }
    }, [])
    // const [show, setShow] = useState(true)
    // const navigate = useNavigate()
    const Logout = () => {
        localStorage.clear();
        window.location.reload();
        setIsLoggedin(false);
    }
    return (
        <div className='head'>
            <div className='left'>
                <img src={logo} className='logo' ></img>
            </div>
            <div className='mid'>
                <ul>
                    <li >
                        <Link className='link' to='/'>Home</Link>
                    </li>
                    <li className='m'>
                        <Link className='link' to='/MenCategory'>Men
                            <div className='sub a'>
                                <div className='f1'>
                                    <img src={men} className='img'></img>
                                </div>
                                <div className='f2'>
                                    <ul>
                                        <li><Link className='link' to='/MenCategory/639b906065cc2e79164bb92d' onClick={refresh}><a>Formal Shoes</a></Link></li>
                                        <li><Link className='link' to='/MenCategory/639b907965cc2e79164bb92f' onClick={refresh}><a>Party Shoes</a></Link></li>
                                        <li><Link className='link' to='/MenCategory/639b908465cc2e79164bb931' onClick={refresh}><a>Sports Shoes</a></Link></li>
                                        <li><Link className='link' to='/MenCategory/639b909665cc2e79164bb933' onClick={refresh}><a>Sandals</a></Link></li>
                                        <li><Link className='link' to='/MenCategory/639b90ab65cc2e79164bb935' onClick={refresh}><a>Sneakers</a></Link></li>
                                        <li><Link className='link' to='/MenCategory/639b90b365cc2e79164bb937' onClick={refresh}><a>Mojaris</a></Link></li>
                                    </ul></div>
                            </div></Link>
                    </li>
                    <li><Link className='link' to='/Women'>Women
                        <div className='sub a'>
                            <div className='f1'>
                                <img src={women} className='img'></img>
                            </div>
                            <div className='f2'>
                                <ul>
                                    <li id='formal'><a>Formal Shoes</a></li>
                                    <li><a>Party Shoes</a></li>
                                    <li><a>Sports Shoes</a></li>
                                    <li><a>Sandals</a></li>
                                    <li><a>Sneakers</a></li>
                                    <li><a>Heels</a></li>
                                </ul></div>
                        </div></Link>
                    </li>
                    <li><Link className='link' to='/Kids'>Kids
                        <div className='sub a'>
                            <div className='f1'>
                                <img src={kid} className='img'></img>
                            </div>
                            <div className='f2'>
                                <ul>
                                    <li><a>Formal Shoes</a></li>
                                    <li><a>School Shoes</a></li>
                                    <li><a>Sports Shoes</a></li>
                                    <li><a>Sneakers</a></li>
                                    <li><a>Sandals</a></li>
                                </ul></div>
                        </div></Link>
                    </li>
                    <li >
                        <Link className='link' to='/About'>About Us</Link>
                    </li>
                    <li >
                        <Link className='link' to='/Contact'>Contact</Link>
                    </li>
                </ul>
            </div>
            <div className='right'>
                <span className='ic'><BsPersonCircle size={28} /></span>
                <div className='profile'>
                {/* <span  className='pf' > */}
                    <Link className='link pf' to='/login'>Log-in&nbsp;|</Link>
                {/* </span> */}
                {/* <span className='pf'> */}
                    <Link className='link pf' to='/sign'>&nbsp;Sign-up</Link>
                {/* </span> */}
                </div>
                <div className='cx'>
                    <Link to='/Cart'><span className='c'><TiShoppingCart size={35} /></span></Link>
                </div>
                <div>
                <Link to={isLoggedin ? "/" : "/login"} >
                    <button  className='logbut' onClick={isLoggedin ? Logout : null}>{isLoggedin ? "Logout" : "Login"}</button></Link>
            </div>
            </div>
            
        </div>
    );
}

export default Header;