import { CartContext } from "../../Context/Cart"
import { useContext } from "react";

function CartList({ price, title, category, image, id, quantity }) {
    const { addToCart, removeOneFromCart, removeFromCart } = useContext(CartContext);
    return (
        <article className=' flex flex-col md:flex-row h-60 p-4 justify-between'>
            <figure className='flex flex-row'>
                <img className='w-56 h-48 object-cover rounded-lg' src={image} alt={title} />
                <figcaption className='top-28 left-56 m-2 p-1'>
                    <p className='m-2'>
                        {title}
                    </p>
                    <p>
                        Quantity: {quantity}
                    </p>
                    <p>
                        Category: {category}
                    </p>
                </figcaption>

            </figure>

            <div className='flex flex-col justify-between'>
                <div className='flex justify-between w-40'>
                    <button className='m-2'
                    onClick={() => addToCart({ price, title, category, image, id })} >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>

                </button>
                    <button className=' m-2'
                        onClick={() => removeOneFromCart({ id })} >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                        </svg>

                </button>
                    <button className='m-2'
                    onClick={() => removeFromCart({ id })} >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>

                    </button>


                </div>
                <p className='flex justify-center mb-8 text-lg font-medium'>
                    {price}
                </p>
            </div>



        </article>
    )
}
export default CartList
