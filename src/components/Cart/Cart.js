import { useContext } from 'react';
import {CartContext} from '../../context/CartContext';
import './Cart.css';

function Cart(){

    const {cart} = useContext(CartContext);
    console.log(cart);

    return(
        
        <div>
            <h1>Cart</h1>
            {
                cart.map((product)=>{
                    return  <div key={product.id}>ID: {product.id} - Nombre: {product.title} - Cantidad: {product.quantity}</div>
                })
            }
            
        </div>
    );
}

export default Cart;