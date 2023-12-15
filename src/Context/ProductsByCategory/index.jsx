import { createContext, useState } from "react";
import { category } from "../../Services/products";
export const ProductsByCategoryContext = createContext()
export const ProductsByCategoryProvider = ({ children }) => {
    const [Products, setProducts] = useState({ isLoading: true, error: false, data: [] })
    function getCategory(CategoryName) {
        category(setProducts, CategoryName)
    }
    return (
        <ProductsByCategoryContext.Provider value={{
            Products,
            setProducts,
            getCategory
        }} >
            {children}
        </ProductsByCategoryContext.Provider >)
}