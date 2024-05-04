const ThankYou = ()=>{
    return (
        <div class="products flex" style={{padding:"20px",gap:'10px',width:'100%', maxWidth:'768px', margin:'0 auto',paddingTop:'20px'}}>
            <div className="thankyou">
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
            <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
            </svg>
            <h1>
                Order Placed Successfully
            </h1>
            </div>
        </div>
    )
}

export default ThankYou