import { useEffect, useState } from "react"
import { useShoppingCart } from "../context/useShoppingCart"
import { Link, useNavigate } from "react-router-dom"
import { MainButton } from "@vkruglikov/react-telegram-web-app";
import baseUrl from "../http/public";

function truncateString(str, maxLength) {
    if (str?.length > maxLength) {
        return str.substring(0, maxLength - 3) + '...';
    }
    return str;
}


const Cart = ()=>{
    const {cart,details} = useShoppingCart()
    const navigate  = useNavigate()
    const [total, setTotal] = useState(0)
    useEffect(()=>{
      if(!cart?.length > 0) navigate('/')
      let cost = 0
      cart.forEach(item => {
        cost += item.price*item.count
      });
      setTotal(cost)
    },[cart,navigate])
    
    const handleCheckout = ()=>{
        if(details){
            // save order and go to thank you age
            navigate('/thankyou')
        }else{
            navigate('/checkout')
        }
    }

    return (
        <div class="products flex" style={{gap:'10px',width:'100%', maxWidth:'768px', margin:'0 auto',paddingTop:'20px'}}>
        <div className="header">
            <span>YOUR ORDER</span>
            <Link to={'/'}>Edit</Link>
        </div>
        <div className="cart">
          {cart &&
            cart.map((item,i)=>(
                <div className="item" key={i}>
                    <img src={`${baseUrl}${item.image}`} alt="" />
                    <div className="info">
                        <span>{truncateString(item.name,30)} <span style={{color:'rgb(228, 205, 0)'}}> x{ item.count}</span></span>
                        <span>{truncateString(item.description, 30)}</span>
                    </div>
                    <div>
                        <span>${item.price}</span>
                    </div>
                </div>
            ))
        }
        </div>
        {details &&
        <>
            <div className="cart shipping" role="button" onClick={e=>navigate('/checkout')}>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                        </svg>
                    </div>
                    <div className="info">
                        <span>{details.address1} {details.address2}, {details.city}, {details.state}, {details.postcode}</span>
                        <span style={{fontSize:'12px'}}>Shipping address</span>
                    </div>
            </div>
            <div className="cart shipping" role="button" onClick={e=>navigate('/checkout')}>
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                    </svg>
                    </div>
                    <div className="info">
                        <span>{details.fullname}</span>
                        <span style={{fontSize:'12px'}}>Name</span>
                    </div>
            </div>
            <div className="cart shipping" role="button" onClick={e=>navigate('/checkout')}>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                        </svg>
                    </div>
                    <div className="info">
                        <span>{details.phone}</span>
                        <span style={{fontSize:'12px'}}>Phone number</span>
                    </div>
            </div>
            <div className="cart shipping" role="button" onClick={e=>navigate('/checkout')}>
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-text" viewBox="0 0 16 16">
                    <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
                    <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8m0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5"/>
                    </svg>
                    </div>
                    <div className="info">
                        <span>{details.notes}</span>
                        <span style={{fontSize:'12px'}}>Notes</span>
                    </div>
            </div>
        </>
        }
         <MainButton text={`${details?'Confirm Order':'Checkout'} $${total.toFixed(2)}`} onClick={handleCheckout} />
         <button onClick={handleCheckout}>{`${details?'Confirm Order':'Checkout'} $${total.toFixed(2)}`}</button>
        </div>
    )
}

export default Cart