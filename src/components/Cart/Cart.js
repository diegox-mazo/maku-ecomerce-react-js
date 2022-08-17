import { useContext } from 'react';
import {CartContext} from '../../context/CartContext';
import './Cart.css';

function Cart(){

    const {cart} = useContext(CartContext);
    console.log(cart);

    return(
        
        <div>
            <h1 className="m-4">Cart</h1>
            <div className="container text-center mt-5">
                <div className="row">
                    <div className="col-md-9 me-2">
                    {
                        cart && cart.length && cart.map((product)=>{
                            return (

                                <div key={product.id} className="container text-center py-4 border border-2 rounded mb-3">
                                    <div className="row align-items-center">
                                        <div className="col-2"><img className='w-50' src={product.pictureUrl} alt={product.title}></img></div>
                                        <div className="col-1">{product.id}</div>
                                        <div className="col">{product.title}</div>
                                        <div className="col-1">{product.quantity}</div>
                                        <div className="col-3"><button className='btn btn-danger btn-sm'>Eliminar</button></div>
                                    </div>
                                </div>                                                   
                            );                    
                        })
                    }
                    </div>

                    <div className="col-md-2 border border-2 rounded p-3 mb-3">
                        <div className='mb-2'>Level 1: .col-sm-3</div>
                        <button className='btn btn-primary'>Finalizar</button>
                    </div>                    
                </div>
            </div>            
        </div>
    );
}

export default Cart;

/* <div >ID: {product.id} - Nombre: {product.title} - Cantidad: {product.quantity}</div> */