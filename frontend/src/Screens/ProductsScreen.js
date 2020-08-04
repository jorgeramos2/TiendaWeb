import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signin } from '../actions/userActions';

function ProductsScreen (props)
{
    const [modalVisible, setModalVisible] = useState(false);
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [stock, setStock] = useState('');
    const [description, setDescription] = useState('');
    const productList = useSelector(state => state.productList);
    const { loading, products, error } = productList;
        

    const productSave = useSelector(state => state.productSave);
    const { loading: loadingSave, success: successSave, error: errorSave } = productSave;

    const productDelete = useSelector(state => state.productDelete);
    const { loading: loadingDelete, success: successDelete, error: errorDelete } = productDelete;
    const dispatch = useDispatch();
  

    useEffect(() => {
        if (successSave) {
            setModalVisible(false);
        }
        dispatch(listProducts());
        return () => {
        };
    }, [successSave, successDelete]);

    const openModal = (product) => {
        setModalVisible(true);
        setId(product._id);
        setName(product.name);
        setPrice(product.price);
        setDescription(product.description);
        setImage(product.image);
        setBrand(product.brand);
        setCategory(product.category);
        setStock(product.stock);
      }
      const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveProduct({
          _id: id,
          name, price, image, brand, category,
          stock, description
        }));
      }
      const deleteHandler = (product) => {
        dispatch(deleteProduct(product._id));
      }

      return <div className="content content-margined">

      <div className="product-header">
        <h3>Mis productos</h3>
        <button className="button primary" onClick={() => openModal({})}>Crear producto</button>
      </div>
      {modalVisible &&
        <div className="form">
          <form onSubmit={submitHandler} >
            <ul className="form-container">
              <li>
                <h2>Registrar producto</h2>
              </li>
              <li>
                {loadingSave && <div>Cargando...</div>}
                {errorSave && <div>{errorSave}</div>}
              </li>
  
              <li>
                <label htmlFor="name">
                  Nombre 
            </label>
                <input type="text" name="name" value={name} id="name" onChange={(e) => setName(e.target.value)}>
                </input>
              </li>
              <li>
                <label htmlFor="price">
                  Precio
            </label>
                <input type="text" name="price" value={price} id="price" onChange={(e) => setPrice(e.target.value)}>
                </input>
              </li>
              <li>
                <label htmlFor="image">
                  Imagen
            </label>
                <input type="text" name="image" value={image} id="image" onChange={(e) => setImage(e.target.value)}>
                </input>
              </li>
              <li>
                <label htmlFor="brand">
                  Marca
            </label>
                <input type="text" name="brand" value={brand} id="brand" onChange={(e) => setBrand(e.target.value)}>
                </input>
              </li>
              <li>
                <label htmlFor="stock">
                  Stock disponible: 
            </label>
                <input type="text" name="stock" value={stock} id="stock" onChange={(e) => setStock(e.target.value)}>
                </input>
              </li>
              <li>
                <label htmlFor="name">
                  Categoría
            </label>
                <input type="text" name="category" value={category} id="category" onChange={(e) => setCategory(e.target.value)}>
                </input>
              </li>
              <li>
                <label htmlFor="description">
                  Descripción
            </label>
                <textarea name="description" value={description} id="description" onChange={(e) => setDescription(e.target.value)}></textarea>
              </li>
              <li>
                <button type="submit" className="button primary">{id ? "Update" : "Create"}</button>
              </li>
              <li>
                <button type="button" onClick={() => setModalVisible(false)} className="button secondary">Back</button>
              </li>
            </ul>
          </form>
        </div>
      }
  
  
      <div className="product-list">
  
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Categoría</th>
              <th>Marca</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (<tr key={product._id}>
              <td>{product._id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.category}</td>
              <td>{product.brand}</td>
              <td>
                <button className="button" onClick={() => openModal(product)} >Editar</button>
                {' '}
                <button className="button" onClick={() => deleteHandler(product)} >Borrar</button>
              </td>
            </tr>))}
          </tbody>
        </table>
  
      </div>
    </div>
       
}
export default ProductsScreen;