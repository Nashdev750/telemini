import { MainButton } from '@vkruglikov/react-telegram-web-app';

import Product from '../components/Product';
import { useShoppingCart } from '../context/useShoppingCart';
import products from '../data/index'
import { Link, useNavigate } from 'react-router-dom';

const Products = ()=>{
    const { cart } = useShoppingCart()
    const navigate = useNavigate()
  return (
    <div class="products flex" style={{width:'100%', maxWidth:'768px', margin:'0 auto',paddingTop:'20px'}}>
    {products.map((data,i)=>(
      <Product key={i} product = {data} />
    ))}
    {cart?.length > 0 && 
      <MainButton text="VIEW ORDER" onClick={()=>{navigate('/cart')}}/>
    }
 </div>
  )
}


export default Products