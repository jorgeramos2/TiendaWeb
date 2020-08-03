import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';
function HomeScreen (props)
{
 
  const productList = useSelector(state => state.productList);
  const {products,loading,error} = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    
      dispatch(listProducts());
     
    return () => {

    };
  },[])
  


   return loading? <div>Cargando...</div> :  
   error? <div>{error}</div>:
   
    
   <ul className="products">
   {
   
     products.map(product =>
       <li key={product._id}>
         <div className="product">
         <Link to={'/product/'+ product._id}>
         <img className= "product-image"src={product.image}></img>
         </Link>
             
             <div className="pname">
                 <Link to={'/product/'+ product._id}>{product.name}</Link>
             </div>
             <div className="brand">{product.brand}</div>
             <div className="precio">{product.price}</div>
             <div className="ratings">{product.rating} Stars({product.reviews} Reviews)</div>
         </div> 
      </li>
       )
   }
      
 
</ul> 
   
}
export default HomeScreen;