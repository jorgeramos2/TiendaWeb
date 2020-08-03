import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct } from '../actions/productActions';
function ProductScreen (props)
{
   
    const productDetails = useSelector(state => state.productDetails);
    const {product, loading , error} = productDetails; 
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsProduct(props.match.params.id));
        return()=> {
            
        };
    },[])
    


   return<div>
       <div className="back-to-result">
           <Link to ="/">Regresar</Link>
       </div>
       {loading? <div>Loading... </div>:
        error?<div>{error}</div>:
        (
            <div className="details">
           <div className="details-info">
               <img src={product.image}></img>
           </div>
           <div className="details-info">
               <ul>
                   <li>
                       <h4>{product.name}</h4>
                   </li>
                   <li>
                       {product.rating} Stars ({product.reviews} Reviews)
                   </li>
                   <li>
                       Precio:  <b>${product.price}</b>
                   </li>
                   <li>
                       Descripcion: 
                       <div>
                           {product.description}
                       </div>
                   </li>
               </ul>
           </div>
           <div className="details-action">
               <ul>
                   <li>
                      Precio: {product.price} 
                   </li>
                   <li>
                       Status : {product.status}
                   </li>
                   <li>
                       Cantidad : <select>
                           <option>1</option>
                           <option>2</option>
                           <option>3</option>
                           <option>4</option>
                       </select>
                   </li>
                   <li>
                       <button className="button">Agregar </button>
                   </li>
               </ul>
           </div>
       </div>
        )
       }
       
       
   </div> 
}
export default ProductScreen;