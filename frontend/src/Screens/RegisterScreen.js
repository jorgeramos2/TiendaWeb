import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signin } from '../actions/userActions';

function RegisterScreen (props)
{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const userRegister = useSelector(state => state.userRegister);
    const {loading, userInfo, error} = userRegister;
    const dispatch = useDispatch();

    useEffect(() => {
        if (userInfo) {
            props.history.push('/');
        }
        return () => {
        };
    }, [userInfo]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(name, email, password));
    }

   return <div className = 'form'>
       <form onSubmit={submitHandler}>
            <ul className="form-container">
                <li>
                    <h2>Regístro de usuario</h2>
                </li>

                <li>
                    {loading && <div>Cargando, espere ... </div>}
                    {error && <div>Error! {error} </div>}
                </li>
                <li>
                    <label htmlFor="name">
                        Nombre 
                    </label>
                    <input type = 'name' name = 'name' id = 'name' onChange = {(e) => setName(e.target.value)}>
                    </input>
                </li>
                <li>
                    <label htmlFor="email">
                        Correo Electrónico
                    </label>
                    <input type = 'email' name = 'email' id = 'email' onChange = {(e) => setEmail(e.target.value)}>
                    </input>
                </li>

                <li>
                    <label htmlFor="password">
                        Contraseña
                        </label>
                        <input type = "password" id = "password" name = "password" onChange={(e) => setPassword(e.target.value)}>
                        </input>
                </li>

                <li>
                    <label htmlFor="rePassword">
                        Reingresar contraseña
                        </label>
                        <input type = "password" id = "rePassword" name = "rePassword" onChange={(e) => setRePassword(e.target.value)}>
                        </input>
                </li>



                <li>
                    <button type="submit" className = "button primary">Crea tu cuenta!</button>
                </li>

                <li>
                    ¿Ya tienes una cuenta?
                </li>

                <li>
                    <Link to='/signin' className="button secondary text-center">Inicia sesión</Link>
                </li>

            </ul>
       </form>

   </div>
       
}
export default RegisterScreen;