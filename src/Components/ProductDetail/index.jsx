import { useContext } from "react";
import { ProductDetailContext } from "../../Context/productDetail"
export const ProductDetail = () => {
    const { productDetails, setProductDetails } = useContext(ProductDetailContext);
    if (productDetails) {
    return (
        <aside className='flex flex-col fixed right-0 border bg-gray-50 dark:bg-zinc-900 border-black rounded-lg w-[360px] h-[calc(100vh-80px)] top-[68px] z-10'>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Details</h2>
                <button onClick={() => { setProductDetails(false) }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                </button>
            </div>
            <div className='flex flex-col m-5'>
                <h3>{productDetails.title}</h3>
                <img src={productDetails.image} alt={productDetails.title} />
                <p>{productDetails.description}</p></div>
        </aside>
    )
    }
} 
