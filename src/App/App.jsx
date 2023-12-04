
import { useRoutes, BrowserRouter } from 'react-router-dom';
import { CartProvider } from '../Context/Cart';
import Home from '../Pages/Home';
import Category from '../Pages/category';
import MyAccount from '../Pages/MyAccount';
import MyOrder from '../Pages/MyOrder';
import MyCart from '../Pages/MyCart';
import NotFound from '../Pages/NotFound';
import SignIn from '../Pages/SignIn';
function AppRoutes() {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/category/:CategoryName', element: <Category /> },
    { path: '/order', element: <MyOrder /> },
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

function App() {

  return (
    <CartProvider>
      <ProductDetailProvider>
      <BrowserRouter>
          <Navbar />
          <ProductDetail />
        <Layout>
          <AppRoutes />
        </Layout> 
    </BrowserRouter>
      </ProductDetailProvider>
    </CartProvider>
  )
}

export default App 