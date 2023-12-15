import { createContext, useState } from "react";
import { categories } from "../../Services/products";
export const NavCategoriesContext = createContext()
export const NavCategoriesProvider = ({ children }) => {
    const [Categories, setCategories] = useState({ isLoading: true, error: false, data: [] });

    categories(setCategories)
    return (
        <NavCategoriesContext.Provider value={{
            Categories,
            setCategories
        }} >
            {children}
        </NavCategoriesContext.Provider >)
}