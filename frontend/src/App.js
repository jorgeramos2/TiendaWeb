import React from 'react';
import logo from './logo.svg';
import './App.css';

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
    <div className="grid-container">
    <header className="header">
        <div className="logo">
            <button onClick={openMenu}>
                &#9776;
            </button>
            <a href="index.html">Star Jeans</a>
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
            <ul className="products">
                 <li>
                    <div className="product">
                        <img className= "product-image"src="/image/1.jpg"></img>
                        <div className="pname">
                            <a href="product.html">Jeans</a>
                        </div>
                        <div className="brand">StarJeans</div>
                        <div className="precio">$200</div>
                        <div className="ratings">5 Stars(10 reviews)</div>
                    </div> 
                 </li>
            
           </ul> 
        </div>
       
    </main>
    <footer className="footer">
        All right reserved.
    </footer>
</div>
  );
}

export default App;
