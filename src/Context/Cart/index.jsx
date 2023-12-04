import { createContext, useState } from "react";
export const CartContext = createContext()
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const addToCart = (product) => {

        const productInCart = cart.findIndex(item => item.id === product.id)
        if (productInCart >= 0) {
            const newCart = structuredClone(cart)
            newCart[productInCart].quantity += 1
            newCart[productInCart].totalQuantityPrice = newCart[productInCart].price * newCart[productInCart].quantity

            setCart(newCart)
        } else {
            setCart(prevState => ([
                ...prevState,
                {
                    ...product,
                    quantity: 1,
                    totalQuantityPrice: product.price
                }
            ]
            ))
        }

    }
    const checkProductInCart = (product) => {
        return cart.some(item => item.id === product.id)
    }
    const removeOneFromCart = (product) => {
        const productInCart = cart.findIndex(item => item.id === product.id)
        if (productInCart >= 0) {
            const newCart = structuredClone(cart)
            if (newCart[productInCart].quantity !== 1) {
                newCart[productInCart].quantity -= 1
                newCart[productInCart].totalQuantityPrice = newCart[productInCart].price * newCart[productInCart].quantity
                setCart(newCart)
            }

        }
    }
    const removeFromCart = (product) => {
        setCart(prevState => prevState.filter(item => item.id !== product.id))
    }


    const clearCart = () => {
        setCart([])
    }
    const totalPrice = cart.reduce((sum, product) => sum + product.totalQuantityPrice, 0);

    return (
        <CartContext.Provider value={{
            cart,
            totalPrice,
            addToCart,
            removeOneFromCart,
            removeFromCart,
            checkProductInCart,
            clearCart
        }} >
            {children}
        </CartContext.Provider >)
}