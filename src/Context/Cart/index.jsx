import { createContext, useState } from "react";
export const CartContext = createContext()
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const addToCart = (product) => {

        const productInCart = cart.findIndex(item => item.id === product.id)
        if (productInCart >= 0) {
            const newCart = structuredClone(cart)
            newCart[productInCart].quantity += 1
            setCart(newCart)
        } else {
            setCart(prevState => ([
                ...prevState,
                {
                    ...product,
                    quantity: 1
                }
            ]
            ))
        }

    }
    const checkProductInCart = (product) => {
        return cart.some(item => item.id === product.id)
    }
    const removeFromCart = (product) => {
        setCart(prevState => prevState.filter(item => item.id !== product.id))
    }


    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            checkProductInCart,
            clearCart
        }} >
            {children}
        </CartContext.Provider >)
}