import './App.css';
import Header from './Component/Header.jsx';
import Home from './Pages/Home.jsx';
import Login from './Pages/login';
import Sign from './Pages/sign';
import Men from './Pages/Men';
import Women from './Pages/Women';
import Kids from './Pages/Kids';
import About from './Pages/About';
import Contact from './Pages/Contact';
import {BrowserRouter as Router,Routes,Route, Navigate} from "react-router-dom";
import Category from './Component/Category';
import Cart from './Pages/Cart';

function App() {

  const token = localStorage.getItem('token');
  console.log(token)
  return (
    <div className="App">
      <link
      href="https://fonts.googleapis.com/css2?family=Acme&family=Alex+Brush&family=Berkshire+Swash&family=Exo+2&family=Great+Vibes&family=Kaushan+Script&family=Mate&family=Montserrat&family=Orbitron&family=Oxygen&family=Poiret+One&family=Rancho&family=Saira:wght@100&family=Ubuntu&display=swap&family=Titillium+Web&family=Ubuntu&display=swap"
      rel="stylesheet"
    />
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/sign' element={<Sign/>}></Route>
        <Route path='/MenCategory' element={token ? <Men />: <Navigate to='/login'/>}></Route>
        <Route path='/Women' element={<Women/>}></Route>
        <Route path='/Kids' element={<Kids/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/MenCategory/:category' element={token ? <Category />: <Navigate to='/login'/>}></Route>
        <Route path='/cart' element={token ? <Cart />: <Navigate to='/login'/>}  />
      </Routes>
    </div>
  );
}

export default App;
// import './App.css';
// import React, { Component } from 'react'
// import Header from './Component/Header.jsx';
// import Routes from './Layouts/routes';

// class App extends Component {
//   state = { 
//     cart:[]
//    } 

//    handleAddCart=(newProduct)=>{
//     const productExist = this.state.cart.find((item)=>item._id==newProduct._id)
//     if(productExist){
//       alert('Already in Cart')
//     }
//     else if(newProduct.stock<=0){
//       alert('Currently not in stock')
//       return
//     }
//     else{
//       newProduct.inCart = newProduct.inCart+1
//       let products = this.state.cart
//       products.push(newProduct)
//       this.setState({cart:products})
//     }
//    }

//    handleIncrement=(product)=>{
//     if(product.inCart>=product.stock){
//       alert('currently not in stock')
//     }
//     else{
//       let found = this.state.cart.find(item => item._id==product._id)
//       found.inCart = found.inCart+1
//       this.setState({cart:this.state.cart})
//     }
//    }

//    handleDecrement=(product)=>{
//       let found = this.state.cart.find(item => item._id==product._id)
//       found.inCart = found.inCart-1
//       this.setState({cart:this.state.cart})
//    }

//    handleDelete=(product)=>{
//     const newCart = this.state.cart.filter((item)=>item._id!=product._id)
//     this.setState({cart:newCart})
//    }

//   render() { 
//     return (
//       <div className='vh-10 d-flex flex-column'>
//       <Header />

//       <Routes cart={this.state.cart} handleAddCart={this.handleAddCart} handleDelete={this.handleDelete} handleIncrement={this.handleIncrement} handleDecrement={this.handleDecrement}></Routes>
      
//     </div>
//     );
//   }
// }
 
// export default App;