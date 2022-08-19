import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import {CartContext} from '../../context/CartContext';
import './Cart.css';

function Cart(){

    const {cart, removeFromCart, removeAll} = useContext(CartContext);
    console.log(cart);

    const total = sumarTotal();

    function sumarTotal(){
        let suma = 0;
        cart.forEach((product)=>{            
           suma += (product.price * product.quantity);
        })
        return suma;
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
                                    <div className="row align-items-center">
                                        <div className="col-2"><img className='w-50' src={product.pictureUrl} alt={product.title}></img></div>
                                        <div className="col">{product.title}</div>
                                        <div className="col-2">${product.price}</div>
                                        <div className="col-1">{product.quantity}</div>
                                        <div className="col-3"><button className='btn btn-danger btn-sm' onClick={()=>removeFromCart(product.id)}>Eliminar</button></div>
                                    </div>
                                </div>                                                   
                            );                    
                        })
                    }
                    </div>

                    <div className="col-md-3 border border-2 rounded p-3 mb-3">
                        <p className='fw-bold'>TOTAL:</p>
                        <p className='mb-3 fw-bold fs-5'>${total.toLocaleString("en",{style:"currency", currency: "COL"})}</p>
                        <button className='btn btn-primary' onClick={()=>removeAll()}>Finalizar</button>
                    </div>                    
                </div>
            </div>            
        </div>
    );
}

export default Cart;