import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';
function HomeScreen (props)
{
  const [products,setProduct] = useState ([]);
  useEffect(() => {
    
      const fetchData = async () => 
      {
        const {data} = await axios.get("/api/products");
        setProduct(data);
      }
      fetchData();
     
    return () => {

    };
  },[])
  


   return        <ul className="products">
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