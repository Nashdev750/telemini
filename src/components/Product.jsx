import { useShoppingCart } from "../context/useShoppingCart"

import baseurl from '../http/public'

const Product = (props)=>{
    const { cart, addItemToCart, removeItemFromCart } = useShoppingCart()
    const {name,price,image} = props.product
  
    
    
    const item = cart.find(p => p._id === props.product._id)
   
    
    return (
        <div className="product">
            {item &&
                <div className="incart">{item.count}</div>
            }
           <img src={`${baseurl}${image}`} alt="" />
           <p>{name}</p>
           <p>${price}</p>
           <div className="actions">
            <div style={{visibility:`${item?"visible":"hidden"}`}} className="remove" role="button" onClick={e=>removeItemFromCart(props.product._id)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
                </svg>
            </div>
            <div className="add" role="button" onClick={e=>addItemToCart(props.product)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                </svg>
            </div>
           </div>
        </div>
    )
}


export default Product