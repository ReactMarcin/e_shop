import React, { createContext, useReducer, useEffect } from 'react'
import reducers from '../reducers'

export const CartContext = createContext()

const saveStateToLocalStorage = state => {
    try{
        localStorage.setItem('cart', JSON.stringify(state))
    }catch(err){
        console.log(err)
    }
}

const ContextCart = ({ children }) => {
    const [cart,dispatch] = useReducer(reducers, [], () => {
        const value = localStorage.getItem('cart')
        return value ? JSON.parse(value) : []
    })

    useEffect(() => {
        saveStateToLocalStorage(cart)
    },[cart])

    return(
        <CartContext.Provider value={{ cart, dispatch }}>
            {children}
        </CartContext.Provider>
    );
}
export default ContextCart