import { render } from '@testing-library/react';
import { serverTimestamp } from 'firebase/firestore';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import {CartContext} from '../../context/CartContext';
import {createOrderInFirestore, actualizarCarrito} from '../API/APIFirebase.js';
import UserForm from '../UserForm/UserForm';
import './Cart.css';

function Cart(){

    const {cart, removeFromCart, removeAll} = useContext(CartContext);
    console.log(cart);

    const total = sumarTotal();
    //Preparar el objeto para la base de datos con solo los campos necesarios.
    const itemsForDB = cart.map((item)=>(//solo es una linea de codigo en esencia entonces van parentesis y no llaves.
        {
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: item.quantity
        }
    ));

    function sumarTotal(){
        let suma = 0;
        cart.forEach((product)=>{            
           suma += (product.price * product.quantity);
        })
        return suma;
    }

    const crearOrder = (datos)=>{
        let order = {
            buyer:{
                name: datos.name,
                phone: datos.phone,
                email: datos.email,
                address: datos.address,
            },
            items: itemsForDB,
            total: total,
            date: serverTimestamp()
        }
        console.log(order);
        createOrderInFirestore(order)
        .then((result)=>{
            alert('Your order has been created with ID'+ result.id);
            actualizarCarrito(cart)
            removeAll();
        })
        .catch((err)=>{console.log(err)});        
    }

    function registrarUsuario(){
        render(
            <UserForm onAction = {crearOrder}></UserForm>
        )
    }

    
    if(!cart.length){
        return(
            <div className='m-5 p-3 border rounded'>
                <h3 className='m-4'>- Carrito Vacio -</h3>
                <NavLink to={'/'}>
                    <button className='btn btn-sm btn-primary'>Inicio</button>
                </NavLink>                
            </div>
        );
    }

    return(
        
        <div>
            <h1 className="m-4">Cart</h1>
            <div className="container text-center mt-5">
                <div className="row">
                    <div className="col-md-8 me-2">
                        {
                            cart && cart.length && cart.map((product)=>{
                                return (

                                    <div key={product.id} className="container text-center py-4 border border-2 rounded mb-3">
                                        <div className="row row-cols-1 row-cols-md-6 align-items-center">
                                            <div className="col col-lg-2"><img className='w-50' src={product.pictureUrl} alt={product.title}></img></div>
                                            <div className="col">
                                                <div>{product.title}</div>
                                            </div>
                                            <div className="col col-lg-2">
                                                <div>Price:</div>
                                                <div>${product.price}</div>
                                            </div>
                                            <div className="col col-lg-1">x {product.quantity}</div>
                                            <div className="col col-lg-2">
                                                <div>Subtotal:</div>
                                                <div>${(parseFloat(product.price) * parseFloat(product.quantity))}</div>
                                            </div>
                                            <div className="col col-lg-3"><button className='btn btn-danger btn-sm' onClick={()=>removeFromCart(product.id)}>Eliminar</button></div>
                                        </div>
                                    </div>                                                   
                                );                    
                            })
                        }
                        <div className='d-flex'>
                            <button className='btn btn-secondary btn-sm mb-2 me-auto' onClick={()=>removeAll()}>Vaciar Cart</button>
                        </div>
                    </div>

                    <div className="col-md-3 border border-2 rounded p-3 mb-3">
                        <p className='fw-bold mb-4'>TOTAL ORDER:</p>
                        <p className='mb-4 fw-bold fs-5'>${total.toLocaleString("en",{style:"currency", currency: "COL"})}</p>
                        {/* <button className='btn btn-primary mb-2' onClick={()=>crearOrder()}>Finalizar Compra</button> */}
                        <button className='btn btn-primary mb-2' onClick={()=>registrarUsuario()}>Finalizar Compra</button>
                    </div>                    
                </div>
            </div>            
        </div>
    );
}

export default Cart;