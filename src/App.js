import { MainButton } from '@vkruglikov/react-telegram-web-app';
import './App.css';
import Product from './components/Product';
import { useShoppingCart } from './context/useShoppingCart';
import products from './data/index'
function App() {
  const { cart } = useShoppingCart()
  return (
    <div class="products flex" style={{width:'100%', maxWidth:'768px', margin:'0 auto',paddingTop:'20px'}}>
       {products.map((data,i)=>(
         <Product key={i} product = {data} />
       ))}
       {cart?.length > 0 && 
         <MainButton text="VIEW ORDER" onClick={()=>{alert("order page")}}/>
       }
    </div>
  );
}

export default App;
