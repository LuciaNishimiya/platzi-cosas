import { createContext, useState } from "react";
export const SearchProductContext = createContext()
export const SearchProductProvider = ({ children }) => {
    const [searchState, setSearchState] = useState('')
    const Search = (event) => {
        setSearchState(event.target.value)
    }
    function filteredProducts(Products) {
        return Products?.filter(item => item.title.toLowerCase().includes(searchState.toLowerCase()))
    }

    return (
        <SearchProductContext.Provider value={{
            searchState,
            setSearchState,
            Search,
            filteredProducts,
        }} >
            {children}
        </SearchProductContext.Provider >)
}