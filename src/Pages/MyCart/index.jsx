import CartList from "../../Components/CartList";
import { CartContext } from "../../Context/Cart"
import { OrdersContext } from "../../Context/Orders"
import { useContext } from "react";
function MyCart() {
  const { cart, totalPrice, clearCart } = useContext(CartContext);
  const { addOrders } = useContext(OrdersContext);
  if (cart.length) {
    return (
      <>
        <div className='grid gap-1 w-full max-w-screen-lg px-2 mb-8'>

          {cart.map(item => (<CartList data key={item?.title} id={item?.id} price={item?.price} title={item?.title} category={item?.category} image={item?.image} quantity={item?.quantity}></CartList>))}

        </div>
        <div className="flex justify-around items-center bg-gray-50 dark:bg-zinc-900 fixed z-10 w-full py-4 text-lg font-medium bottom-0">
          <p> Total: {totalPrice}</p>
          <button className="rounded-lg  border px-1" onClick={() => { addOrders(cart, totalPrice), clearCart() }}>Proceed to checkout</button>
        </div>
      </>

    )

  } else {
    return (
      <div className="flex justify-end items-center h-60 flex-col">
        <p className='font-medium text-lg'> Your Cart is empty.</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
        </svg>

      </div>

    )
  }
}
export default MyCart