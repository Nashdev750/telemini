import { MainButton } from '@vkruglikov/react-telegram-web-app';

import Product from '../components/Product';
import { useShoppingCart } from '../context/useShoppingCart';

import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import http from '../http';

const Products = ()=>{
    const { cart } = useShoppingCart()
    const navigate = useNavigate()
    const [products, setProducts] = useState([])
    useEffect(()=>{
      http.get('products')
      .then(res=>{
        setProducts(res.data)
      })
    },[])
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