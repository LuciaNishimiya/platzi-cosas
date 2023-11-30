import { CartContext } from "../../Context/Cart"
import { useContext } from "react";

function CartList({ price, title, category, image, id, quantity }) {
    const { addToCart, removeFromCart } = useContext(CartContext);
    return (
        <article className=' flex w-600 h-60  p-4'>
            <figure className='relative mb-2 w-full h-4/5'>

                <img className=' w-56 h-48 object-cover rounded-lg' src={image} alt={title} />
                <button className='absolute top-0 right-0 flex justify-center items-center bg-white w-16 h-6 rounded-full m-2 p-1'
                    onClick={() => addToCart({ price, title, category, image, id })} >
                    ➕
                </button>
                <button className='absolute top-0 right-20 flex justify-center items-center bg-white w-16 h-6 rounded-full m-2 p-1'
                >
                    ➖
                </button>
                <button className='absolute top-0 right-40 flex justify-center items-center bg-white w-16 h-6 rounded-full m-2 p-1'
                    onClick={() => removeFromCart({ id })} >
                    🗑️
                </button>
                <p className='absolute  top-9 left-56 m-2 p-1'>Quantity: {quantity}</p>

                <figcaption className='absolute  top-28 left-56 m-2 p-1'>Category: {category}</figcaption>

                <p className='absolute top-0 left-56 m-2 p-1'>
                    {title}</p>
                <p className='absolute flex right-10 justify-between bottom-1'>
                    <span className='text-lg font-medium'>{price}</span></p>

            </figure>
        </article>
    )
}
export default CartList
