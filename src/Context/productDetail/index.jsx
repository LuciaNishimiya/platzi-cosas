import { createContext, useState } from "react";
export const ProductDetailContext = createContext()
export const ProductDetailProvider = ({ children }) => {
    const [productDetails, setProductDetails] = useState(false)

    return (
        <ProductDetailContext.Provider value={{
            productDetails,
            setProductDetails
        }} >
            {children}
        </ProductDetailContext.Provider >)
}