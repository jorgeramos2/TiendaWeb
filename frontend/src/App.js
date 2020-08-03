import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import CartScreen from './Screens/CartScreen';

function App() {
  const openMenu =() =>
  {
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu =() =>
  {
    document.querySelector(".sidebar").classList.remove("open")
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
            <a href="sesion.html">Signin</a>
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
        <Route path="/" exact={true} component={HomeScreen} />
        <Route path="/product/:id" component={ProductScreen} />
        <Route path="/cart/:id?" component={CartScreen}/>
     
        </div>
       
    </main>
    <footer className="footer">
        All right reserved.
    </footer>
</div>
</BrowserRouter>
  );
}

export default App;
