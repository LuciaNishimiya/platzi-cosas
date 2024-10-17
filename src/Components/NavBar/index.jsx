import { NavLink } from 'react-router-dom'
import { useContext } from 'react';
import { CartContext } from '../../Context/Cart';
import { OrdersContext } from '../../Context/Orders';
import { AuthContext } from '../../Context/Auth';
import { NavCategoriesContext } from '../../Context/NavCategories';

const Navbar = () => {
    const { cart } = useContext(CartContext);
    const { orders } = useContext(OrdersContext);
    const { Categories } = useContext(NavCategoriesContext);
    const { authData, isAuthenticated } = useContext(AuthContext);
    const activeStyle = 'underline underline-offset-4'
    return (
        <nav className='flex justify-between items-center bg-gray-50 dark:bg-zinc-900 fixed z-10 w-full py-5 px-8 text-sm font-light top-0 '>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg'>
                    <NavLink to='/'>
                        LoliCenter 2
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        All
                    </NavLink>
                </li>
                {
                    Categories?.data?.map(item =>
                    (<li key={item}>
                        <NavLink
                            to={`/category/${item}`}
                            className={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }>
                            {item}
                        </NavLink>
                    </li>))
                }

            </ul>
            <ul className='flex items-center gap-3'>
                <li className='text-black/60'>
                    {authData.username}
                </li>

                {orders.length ? (
                    <li>
                        <NavLink
                            to='/orders'
                            className={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }>
                            My Orders
                        </NavLink>
                    </li>
                ) : undefined}

                <li>
                    <NavLink
                        to='/cart'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        My Cart
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/account'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/signin'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                         {isAuthenticated() ? 'Log Out' : 'Sign In'}
                    </NavLink>
                </li>
                <li className='flex justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 m-0.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                    <span>{cart.length}</span>
                </li>
            </ul>





        </nav>






    )
}

export default Navbar