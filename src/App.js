import './App.css';
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
