import { CartContext } from "../../Context/Cart"
import { useContext } from "react";

function Card({ price, title, category, image, id }) {
    const { addToCart, removeFromCart, checkProductInCart } = useContext(CartContext);
    const isProductInCart = checkProductInCart({ id })
    return (
        <article className=' cursor-pointer w-56 h-60 rounded-lg p-4'>

            <figure className='relative mb-2 w-full h-4/5'>
                <figcaption className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{category}</figcaption>
                <img className='w-full h-full object-cover rounded-lg' src={image} alt={title} />
                <button className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1 text-black'
                    onClick={() =>
                        isProductInCart ?
                            removeFromCart({ id }) :
                            addToCart({ price, title, category, image, id })}  >
                    {isProductInCart ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                        : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                    }
                </button>
            </figure><p className='flex justify-between'>
                <span className='text-sm font-light'>{title}</span>
                <span className='text-lg font-medium'>{price}</span></p>



        </article>
    )
}

export default Card