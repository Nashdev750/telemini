import { useEffect, useState } from "react"
import { useShoppingCart } from "../context/useShoppingCart"
import { Link, useNavigate } from "react-router-dom"
import { MainButton } from "@vkruglikov/react-telegram-web-app";

function truncateString(str, maxLength) {
    if (str.length > maxLength) {
        return str.substring(0, maxLength - 3) + '...';
    }
    return str;
}


const Cart = ()=>{
    const {cart} = useShoppingCart()
    const navigate  = useNavigate()
    const [total, setTotal] = useState(0)
    useEffect(()=>{
      if(!cart?.length > 0) navigate('/')
      let cost = 0
      cart.forEach(item => {
        cost += item.price*item.count
      });
      setTotal(cost)
    },[cart])
    return (
        <div class="products flex" style={{width:'100%', maxWidth:'768px', margin:'0 auto',paddingTop:'20px'}}>
        <div className="header">
            <span>YOUR ORDER</span>
            <Link to={'/'}>Edit</Link>
        </div>
        <div className="cart">
          {cart &&
            cart.map((item,i)=>(
                <div className="item">
                    <img src={item.image} alt="" />
                    <div className="info">
                        <span>{truncateString(item.title,30)} <small style={{color:'rgb(228, 205, 0)'}}> x{ item.count}</small></span>
                        <span>{truncateString(item.description, 30)}</span>
                    </div>
                    <div>
                        <span>${item.price}</span>
                    </div>
                </div>
            ))
        }
        </div>
         <MainButton text={`PAY $${total.toFixed(2)}`} onClick={()=>{}} />
        </div>
    )
}

export default Cart