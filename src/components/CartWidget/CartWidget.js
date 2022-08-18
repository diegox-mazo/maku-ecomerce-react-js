
import cartLogo from './shopping-cart.png';
import './CartWidget.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
// import {CartContext} from '../../context/CartContext';


function CartWidget(){
    const {cart} = useContext(CartContext);

    const cantidadCarrito = calcularCantidad();

    function calcularCantidad(){
        let cantidad = 0;
        cart.forEach((product)=>{            
            cantidad += (product.quantity);
        })
        return cantidad;
    }

    if(!cart.length){
        return null;
    }

    return(
        <div className='shopping-cart ms-5 pe-3 d-flex'>
            <img
                src={cartLogo}
                className="d-inline-block align-top cart-logo"
                alt="Shopping Cart"
            />
            <label className='align-self-center'>{cantidadCarrito}</label>
        </div>
    );
}

export default CartWidget;