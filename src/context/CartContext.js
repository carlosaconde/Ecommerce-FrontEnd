import { createContext, useState } from "react";
import React from "react";


export const CartContext= createContext();

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([])

    console.log(cart);


    const addItem = (item,quantity) => {
        if(!isInCart(item.id)){
            setCart(prev => [...prev,{...item, quantity}])

        }else {
            console.log('el producto ya fue agregado');
        }
    }

    const removeItem = (itemId)=>{
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const cartTotal =()=>{
        return cart.reduce((acum,item) => acum+= item.quantity,0)
    }

    const sumTotal=() => {
       return cart.reduce((acum,item)=> acum+= (item.quantity * item.precio),0).toFixed(2); 
    
    }

    const clearCart= () =>{
        setCart([])
    }

    const isInCart =(itemId)=>{
        return cart.some(prod=> prod.id === itemId)
    }


    return(
        <CartContext.Provider value={{cart,addItem,removeItem,clearCart,cartTotal,sumTotal}}>
            {children}
        </CartContext.Provider>
    )
}