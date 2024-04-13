const Product = ({product:{title,price,image}})=>{
    return (
        <div className="product">
           <img src={image} alt="" />
           <p>{title}</p>
           <p>${price}</p>
        </div>
    )
}


export default Product