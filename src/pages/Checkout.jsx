import { InputText } from "primereact/inputtext"
import PhoneInput from 'react-phone-input-2'
import { useForm, SubmitHandler } from "react-hook-form"
import { Button } from "primereact/button"
import { useEffect, useState } from "react"
import { useShoppingCart } from "../context/useShoppingCart"
import { useNavigate } from "react-router-dom"
import { InputTextarea } from "primereact/inputtextarea";


const Checkout = ()=>{
    const navigate = useNavigate()
    const {details, addShippingDetails } = useShoppingCart()
    const [phone, setPhone] = useState()
    const {register,setValue,handleSubmit,formState: { errors }} = useForm()
    useEffect(()=>{
        setPhone(details?.phone)
        setValue('phone',details?.phone)
        setValue('address1',details?.address1)
        setValue('address2',details?.address2)
        setValue('city',details?.city)
        setValue('state',details?.state)
        setValue('postcode',details?.postcode)
        setValue('fullname',details?.fullname)
        setValue('notes',details?.notes)
    },[])
    const onSubmit = (data) => {
        data.phone = phone
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
                 <InputTextarea style={{padding:'5px',background:'white'}} placeholder="Notes" autoResize {...register("notes", { required: false })} rows={3} cols={30} />
            </div>
        </div>
        <div className="flex" style={{padding:"20px",width:'100%', gap:'10px',flexDirection:'column',background:'white'}}>
            <div className="flex flex-column gap-2">
                <button className="btn" type="submit">
                    <span>Save</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>
                    </svg>
                </button>
            </div> 
        </div>
    </form>
)
}

export default Checkout