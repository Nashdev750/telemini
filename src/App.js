import { MainButton } from '@vkruglikov/react-telegram-web-app';
import './App.css';
import Product from './components/Product';
import { useShoppingCart } from './context/useShoppingCart';
import products from './data/index'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Products from './pages/Products';
import Cart from './pages/Cart';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Products/>,
    },
    {
      path: "cart",
      element: <Cart/>,
    },
  ]);
 
  return (
    <RouterProvider router={router} />
  );
}

export default App;
