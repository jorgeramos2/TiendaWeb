import React from 'react'
import {Link} from 'react-router-dom'
import data from '../data'
function HomeScreen (props)
{
   return        <ul className="products">
   {
     data.products.map(product =>
       <li>
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