import React, { useState } from "react";

export const CartContext = React.createContext([]);

function CartCustomContext({children}){

    const [cart, setCart] = useState([]);


    function addToCart(product){

        if(isInCart(product.id)===false){
            console.log(`ID: ${product.id}. ${product.title} x ${product.quantity} agregado al Cart`);
            setCart([...cart, product]);
            console.log(cart);
            
            alert(`Se añadio ${product.quantity} unidades de ${product.title} al carrito`);
        }
        else{
            alert('El producto ya se encuentra en el carrito')
        }           
  
    }

    function isInCart(id){
        const productInCart = cart.find((productInCart)=>productInCart.id === id);
        if (productInCart) return true;
        return false;
    }

    function removeFromCart(id){
        const newCart = cart.filter((product)=> product.id !== id);
        setCart(newCart);
    }

    function removeAll(){
        setCart([]);
    }

    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart, removeAll}}>
            {children}
        </CartContext.Provider>

    );
}

export default CartCustomContext;