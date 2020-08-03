import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct } from '../actions/productActions';

function ProductScreen (props)
{
    const [qty, setQty] = useState(1);  
    const productDetails = useSelector(state => state.productDetails);
    const {product,loading,error} = productDetails;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsProduct(props.match.params.id));
        return () => {
        };
    }, []);

    const handleAddToCart = () => {
        props.history.push("/cart/" + props.match.params.id + "?qty=" + qty)
    }




   return<div>
       <div className="back-to-result">
           <Link to ="/">Regresar</Link>
       </div>
        {loading ? <div>Cargando, por favor espere...</div> :
          error ? <div>{error}</div> : (

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
                       Status : {product.stock > 0 ? "Disponible" : "Sin stock" }
                   </li>
                   <li>
                       Cantidad : <select value={qty} onChange= {(e) => {setQty(e.target.value)}}>
                        
                           {[...Array(product.stock).keys()].map(x=> 
                                <option value = {x+1}> {x+1}</option>
                            
                            )}
                       </select>
                   </li>
                   <li>
                    {product.stock > 0 && <button onClick ={handleAddToCart} className="button">Agregar</button>}
                       
                   </li>
               </ul>
           </div>
       </div>

          )
        
        }
       
   </div> 
}
export default ProductScreen;