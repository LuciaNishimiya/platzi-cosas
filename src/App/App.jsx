
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
import { ProductDetailModal } from '../Components/ProductDetailModal';
import { ProductDetailProvider } from '../Context/productDetail';
import { OrdersProvider } from '../Context/Orders';
import { SearchProductProvider } from '../Context/search';
import { ProductsProvider } from '../Context/Products';
import { NavCategoriesProvider } from '../Context/NavCategories';
import { ProductsByCategoryProvider } from '../Context/ProductsByCategory';
function App() {

  return (
    <ProductsProvider>
      <ProductsByCategoryProvider>
    <CartProvider>
      <ProductDetailProvider>
        <OrdersProvider>
              <NavCategoriesProvider>
                <BrowserRouter>
                  <Navbar />
            <ProductDetailModal />

                  <SearchProductProvider>
                    <Layout>
                      <AppRoutes />
                    </Layout>
                  </SearchProductProvider>

                </BrowserRouter>
              </NavCategoriesProvider>
        </OrdersProvider>
      </ProductDetailProvider>
    </CartProvider>
      </ProductsByCategoryProvider>
    </ProductsProvider>
  )
}

export default App 