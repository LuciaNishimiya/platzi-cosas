import { createContext, useState } from "react";
export const SearchProductContext = createContext()
export const SearchProductProvider = ({ children }) => {
    const [search, setSearch] = useState(false)

    return (
        <SearchProductContext.Provider value={{
            search,
            setSearch
        }} >
            {children}
        </SearchProductContext.Provider >)
}