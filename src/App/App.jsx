
import { useRoutes, BrowserRouter } from 'react-router-dom';
import { CartProvider } from '../Context/Cart';
import Home from '../Pages/Home';
import Category from '../Pages/category';
import MyAccount from '../Pages/MyAccount';
import MyOrder from '../Pages/MyOrder';
import MyOrders from '../Pages/MyOrders';
import NotFound from '../Pages/NotFound';
import SignIn from '../Pages/SignIn';

function AppRoutes() {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/category/:CategoryName', element: <Category /> },
    { path: '/order', element: <MyOrder /> },
    { path: '/account', element: <MyAccount /> },
    { path: '/orders', element: <MyOrders /> },
    { path: '/singin', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },

  ]);

  return routes;
}
import './App.css'
import Navbar from '../Components/NavBar';
import Layout from '../Components/Layout';

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Layout>
          <AppRoutes />
        </Layout> 
    </BrowserRouter>
    </CartProvider>
  )
}

export default App 