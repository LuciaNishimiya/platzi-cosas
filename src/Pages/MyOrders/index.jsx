import CartList from "../../Components/CartList";
import { CartContext } from "../../Context/Cart"
import { useContext } from "react";
function MyOrders() {
  const { cart, totalPrice } = useContext(CartContext);
  console.table(cart)
  return (
    <>
      <div className='grid gap-1 w-full max-w-screen-lg px-2 mb-8'>

        {cart.map(item => (<CartList data key={item?.title} id={item?.id} price={item?.price} title={item?.title} category={item?.category} image={item?.image} quantity={item?.quantity}></CartList>))}

    </div>
      <div className="flex justify-around items-center bg-gray-50 dark:bg-zinc-900 fixed z-10 w-full py-4 text-lg font-medium bottom-0">
        <p> Total: {totalPrice}</p>
        <button className="rounded-lg  border px-1">Proceed to checkout</button>
      </div>
    </>

  )
}

export default MyOrders