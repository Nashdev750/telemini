
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Products from './pages/Products';
import Cart from './pages/Cart';
import { useEffect, useState } from 'react';
import Checkout from './pages/Checkout';
import ThankYou from "./pages/ThankYou";

function App() {
  const [initdata, setInitdata] = useState("")

useEffect(()=>{
  if (window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.enableClosingConfirmation) {
      window.Telegram.WebApp.enableClosingConfirmation();
      console.log(window.Telegram.WebApp)
      setInitdata(JSON.stringify(window.Telegram.WebApp))
  }
},[])

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><h5 style={{width:"300px"}}>{initdata}</h5><Products/></>,
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
