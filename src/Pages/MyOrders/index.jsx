import CartList from "../../Components/CartList";
import { CartContext } from "../../Context/Cart"
import { useContext } from "react";
function MyOrders() {
  const { cart } = useContext(CartContext);
  console.table(cart)
  return (
    <div className='grid gap-1 w-full max-w-screen-lg px-2'>
      {
        cart.map(item =>

          (<CartList data key={item?.title} id={item?.id} price={item?.price} title={item?.title} category={item?.category} image={item?.image} quantity={item?.quantity}></CartList>))
      }
    </div>
  )
}

export default MyOrders