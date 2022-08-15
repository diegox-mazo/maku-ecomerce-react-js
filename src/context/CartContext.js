import React, { useState } from "react";

export const CartContext = React.createContext([]);

function CartCustomContext({children}){

    const [cart, setCart] = useState([]);

    const addItem = (item, quantity)=>{
        console.log(`${item.title} x ${quantity} agregado al Cart`);
        const listaActualizada = [...cart, {item, quantity}]
        setCart(listaActualizada);
    }


    return (
        <CartContext.Provider value={{addItem, cartData: cart}}>
            {children}
        </CartContext.Provider>

    );
}

export default CartCustomContext;