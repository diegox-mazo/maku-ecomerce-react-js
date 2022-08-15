import { useContext } from 'react';
import {CartContext} from '../../context/CartContext';
import './Cart.css';

function Cart(){

    const {cartData} = useContext(CartContext);
    console.log(cartData);

    return(
        
        <div>
            <h1>Cart</h1>
            {
                cartData.map((data)=>{
                    return  <div key={data.item.id}>ID: {data.item.id} cantidad: {data.quantity}</div>
                })
            }
            
        </div>
    );
}

export default Cart;