import { NavLink } from 'react-router-dom'
import { categories } from '../../Services/products'
const Navbar = () => {
    const { data } = categories()
    const activeStyle = 'underline underline-offset-4'
    return (
        <nav className='flex justify-between items-center bg-white dark:bg-zinc-900 fixed z-10 w-full py-5 px-8 text-sm font-light top-0'>
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
                    data.map(item =>
                    (<li key={item}>
                        <NavLink
                            to={`/${item}`}
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
                    Loli@example.com
                </li>
                <li>
                    <NavLink
                        to='/orders'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        My Orders
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
                        to='/singin'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Sign In
                    </NavLink>
                </li>
                <li>
                    🛒 0
                </li>
            </ul>





        </nav>






    )
}

export default Navbar