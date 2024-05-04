import { InputText } from "primereact/inputtext"
import PhoneInput from 'react-phone-input-2'
import { useForm, SubmitHandler } from "react-hook-form"
import { Button } from "primereact/button"
import { useState } from "react"
import { useShoppingCart } from "../context/useShoppingCart"
import { useNavigate } from "react-router-dom"


const Checkout = ()=>{
    const navigate = useNavigate()
    const { addShippingDetails } = useShoppingCart()
    const [phone, setPhone] = useState()
    const {register,handleSubmit,formState: { errors }} = useForm()
    const onSubmit = (data) => {
        addShippingDetails(data)
        navigate('/cart')
    }
return  (
    <form onSubmit={handleSubmit(onSubmit)} class="products flex" style={{width:'100%',flexDirection:'column', maxWidth:'768px', margin:'0 auto',paddingTop:'20px'}}>
        <div className="flex" style={{padding:"20px",width:'100%', gap:'10px',flexDirection:'column',background:'white'}}>
            <p>Shipping address</p>
            <div className="flex flex-column gap-2">
                <InputText invalid={errors?.address1} {...register("address1", { required: true })} id="address1" placeholder="Address 1 (Street)" aria-describedby="address1" />
            </div>
            <div className="flex flex-column gap-2">
                <InputText {...register("address2", { required: false })} id="address2" placeholder="Address 2 (Street)" aria-describedby="address1" />
            </div>
            <div className="flex flex-column gap-2">
                <InputText invalid={errors?.city} {...register("city", { required: true })} id="city" placeholder="City" aria-describedby="username-help" />
            </div>
            <div className="flex flex-column gap-2">
                <InputText invalid={errors?.state} {...register("state", { required: true })} id="state" placeholder="State" aria-describedby="username-help" />
            </div>
            <div className="flex flex-column gap-2">
            <PhoneInput
                style={{width:'100%'}}
                country={'us'}
                enableSearch={true}
                value={phone}
                onChange={v => setPhone(v)}
            />
            </div>
            <div className="flex flex-column gap-2">
                <InputText invalid={errors?.postcode} {...register("postcode", { required: true })} id="postcode" placeholder="Postcode" aria-describedby="username-help" />
            </div>
        </div>
        <div className="flex" style={{padding:"20px",width:'100%', gap:'10px',flexDirection:'column',background:'white'}}>
            <div className="flex flex-column gap-2">
                <InputText invalid={errors?.fullname} {...register("fullname", { required: true })} id="fullname" placeholder="Full Name" aria-describedby="username-help" />
            </div> 
        </div>
        <div className="flex" style={{padding:"20px",width:'100%', gap:'10px',flexDirection:'column',background:'white'}}>
            <div className="flex flex-column gap-2">
                <input type="submit" value="Save" />
            </div> 
        </div>
    </form>
)
}

export default Checkout