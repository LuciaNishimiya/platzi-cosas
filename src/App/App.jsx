
import { useRoutes, BrowserRouter } from 'react-router-dom';
import { CartProvider } from '../Context/Cart';
import Home from '../Pages/Home';
import Category from '../Pages/category';
import MyAccount from '../Pages/MyAccount';
import MyOrders from '../Pages/MyOrders';
import MyCart from '../Pages/MyCart';
import NotFound from '../Pages/NotFound';
import SignIn from '../Pages/SignIn';
function AppRoutes() {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/category/:CategoryName', element: <Category /> },
    { path: '/orders', element: <MyOrders /> },
    { path: '/account', element: <MyAccount /> },
    { path: '/cart', element: <MyCart /> },
    { path: '/singin', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },

  ]);

  return routes;
}
import './App.css'
import Navbar from '../Components/NavBar';
import Layout from '../Components/Layout';
import { ProductDetail } from '../Components/ProductDetail';
import { ProductDetailProvider } from '../Context/productDetail';
import { OrdersProvider } from '../Context/Orders';

function App() {

  return (
    <CartProvider>
      <ProductDetailProvider>
        <OrdersProvider>
      <BrowserRouter>
          <Navbar />
          <ProductDetail />
        <Layout>
          <AppRoutes />
        </Layout> 
    </BrowserRouter>
        </OrdersProvider>
      </ProductDetailProvider>
    </CartProvider>
  )
}

export default App 