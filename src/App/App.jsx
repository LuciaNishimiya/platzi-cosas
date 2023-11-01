
import { useRoutes, BrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home';
import NotFound from '../Pages/NotFound';

function AppRoutes() {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/*', element: <NotFound /> },
  ]);

  return routes;
}

import './App.css'
import Navbar from '../Components/NavBar';
import Layout from '../Components/Layout';

function App() {

  return (
    <BrowserRouter>
      <Navbar />

      <Layout>

        <AppRoutes />
      </Layout>
    </BrowserRouter>
  )
}

export default App