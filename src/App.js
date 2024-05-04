
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Products from './pages/Products';
import Cart from './pages/Cart';
import { useEffect } from 'react';
import Checkout from './pages/Checkout';
import ThankYou from "./pages/ThankYou";

function App() {

useEffect(()=>{
  if (window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.enableClosingConfirmation) {
      window.Telegram.WebApp.enableClosingConfirmation();
  }
},[])

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Products/>,
    },
    {
      path: "/cart",
      element: <Cart/>,
    },
    {
      path: "/checkout",
      element: <Checkout/>
    },
    {
      path: "/thankyou",
      element: <ThankYou/>
    },
  ]);
 
  return (
    <RouterProvider router={router} />
  );
}

export default App;
