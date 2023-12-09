import { useContext } from "react";
import { CartContext } from "../../Context/Cart"
import { ProductDetailContext } from "../../Context/productDetail";

export const ProductDetailModal = () => {
    const { addToCart, removeFromCart, checkProductInCart } = useContext(CartContext);
    const { productDetails, setProductDetails } = useContext(ProductDetailContext);

    if (productDetails) {
        const { price, title, category, image, id, description } = productDetails
        const isProductInCart = checkProductInCart({ id })
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
                <div className='flex flex-col mx-3 overflow-y-auto'>
                    <figure className='relative mb-2 w-full h-64'>
                        <figcaption className='font-medium'>
                            {title}
                        </figcaption>
                        <img className='w-full h-full object-cover rounded-lg' src={image} alt={title} />
                        <figcaption className='font-medium text-xl'>
                            {price}
                        </figcaption>
                    </figure>

                    <p className="my-16">
                        {description}
                    </p>

                </div>
                <div className='flex justify-center'><button className='flex justify-center rounded-lg border-black border p-1' onClick={() =>
                    isProductInCart ?
                        removeFromCart({ id }) :
                        addToCart({ price, title, category, image, id })}  >
                    {isProductInCart ? <><span>Remove from cart</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mx-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg></>
                        : <><span>Add to cart</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mx-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg></>
                    }</button></div>

            </aside>
        );
    }
};
