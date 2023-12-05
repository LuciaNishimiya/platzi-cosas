import { createContext, useState } from "react";
import { dateTime } from "../../Utils/dateTime";
export const OrdersContext = createContext()
export const OrdersProvider = ({ children }) => {

    const [orders, setOrder] = useState([])
    const addOrders = (product, totalPrice) => {
        setOrder(prevState => ([
            {
                products: { ...product, },
                dateTime: dateTime(),
                totalPrice: totalPrice
            },
            ...prevState
        ]
        ))
    }

    const removeOrders = (product) => {
        setOrder(prevState => prevState.filter(item => item.id !== product.id))
    }

    return (
        <OrdersContext.Provider value={{
            orders,
            addOrders,
            removeOrders
        }} >
            {children}
        </OrdersContext.Provider >)
}