import React, { useState } from "react";

export const CartContext = React.createContext([]);

function CartCustomContext({children}){

    const [cart, setCart] = useState([]);

    //{item, quantity} = product
    function addToCart(product){
        const inCart = isInCart(product.id);
        if(inCart){
            const updatedCart = cart.map((itemEnCarrito)=>{
                if(itemEnCarrito.id === product.id){
                    return {...itemEnCarrito, quantiy: (itemEnCarrito.quantiy + product.quantiy)}
                }else{
                    return itemEnCarrito;  
                }                               
            });
            setCart(updatedCart);
        }
        else{
            setCart([...cart, product]);
        }
        console.log("Cart: ",cart);            
        alert(`Se añadio ${product.quantity} unidades de ${product.title} al carrito`);
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