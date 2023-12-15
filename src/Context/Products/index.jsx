import { createContext, useState } from "react";
import { products } from "../../Services/products";
export const ProductsContext = createContext()
export const ProductsProvider = ({ children }) => {
    const [Products, setProducts] = useState({ isLoading: true, error: false, data: [] })
    products(setProducts)
    return (
        <ProductsContext.Provider value={{
            Products,
            setProducts
        }} >
            {children}
        </ProductsContext.Provider >)
}