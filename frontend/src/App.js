import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';

function App() {

    
    const userSignin = useSelector(state => state.userSignin);
    const {userInfo} = userSignin; 


  const openMenu =() =>
  {
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu =() =>
  {
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="header">
        <div className="logo">
            <button onClick={openMenu}>
                &#9776;
            </button>
            <Link to="/">StarJeans</Link>
        </div>
        <div className="links">
            <a href="cart.html">Cart</a>
            {
                userInfo? <Link to ='/profile'>{userInfo.name}</Link> : 
                <Link to="/signin">Iniciar sesión</Link>
            }
        </div>
    </header>
    <aside className="sidebar">
        <h3>Categorias</h3>
        <button className="sidebar-close"onClick={closeMenu}>x</button>
        <ul>
            <li>
                <a href="index.html">Jeans</a>
            </li>
            <li>
                <a href="index.html">Camisas</a>
            </li>
        </ul>
    </aside>
    <main className="main">
        <div className="content">
        <Route path ='/products' component= {ProductScreen}/>
        <Route path = "/signin" component = {SigninScreen} />  
        <Route path = "/register" component = {RegisterScreen} />  
        <Route path="/product/:id" component={ProductScreen} />
        <Route path="/cart/:id?" component={CartScreen}/>
        <Route path="/" exact={true} component={HomeScreen} />
        </div>
       
    </main>
    <footer className="footer">
        Proyecto final Diseño de Aplicaciones Web 
    </footer>
</div>
</BrowserRouter>
  );
}

export default App;
