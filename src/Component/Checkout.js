import React,{useState} from 'react'
import {loadStripe} from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { useCart } from 'react-use-cart';
import {BACKEND_URL} from '../Helpers.js'

function Checkoutform() {

     const stripe = useStripe();
     const elements = useElements();

    const [paybutton, setPaybutton] = useState(true)
    const {cartTotal,items,emptyCart} = useCart();
    const [formdata, setFormdata] = useState({})
    const [paymentprocs, setPaymentprocs] = useState(false)
   
    const [error, setError] = useState(false);
    const [done, setDone] = useState(false)  

    const handleChange = (e) =>{
       setFormdata({
         ...formdata,
         [e.target.name]:e.target.value
       }) 
      }

    const makePayment = async (allformdata) =>{
      try{
        const res = await fetch(`${BACKEND_URL}/order`,{
          method:"post",
          headers:{
            "Content-Type":"application/json",
            "Authorization":"Bearer "+ localStorage.getItem("jwt")
          },
          body:JSON.stringify(allformdata) 
      
        })
        // console.log("done");
        // console.log(res.json());    
        return await res.json();
       }catch(error){
               setError(true)
       }
      } 
      

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        if (elements == null) {
          return;
        }

       const cardElement = elements.getElement(CardElement)
       const payload = await stripe.createToken(cardElement)

       const allFormdata = {
         ...formdata,
         token:payload.token,
         amount:cartTotal,
         items:items
       }
       console.log(allFormdata);
       setPaymentprocs(true)
       setDone(true)
       await makePayment(allFormdata)
       setPaymentprocs(false)
       emptyCart();
      }
      
      if(done)return<h3 className='green-text'>Payment done succesfully......</h3>
      if(error)return<h3 className='red-text'>Payment Failed succesfully......</h3>
      if(paymentprocs)return<h1>Payment is Processing..  </h1>                                             

  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
       name="shippingAdress"
       placeholder='shippingAddress'
       onChange={handleChange}
       required
      />
      <input type="text"
       name="city"
       placeholder='city'
       onChange={handleChange}
       required
      />
      <input type="text"
       name="state"
       placeholder='state'
       onChange={handleChange}
       required
      />
      <input type="number"
       name="pincode"
       placeholder='pincode'
       onChange={handleChange}
       required
       maxLength='6'
      />

      <CardElement onChange={(e) =>{
        if(e.complete){
          // console.log('====================================');
          console.log(e);
          // console.log('====================================');
                setPaybutton(false)
        }else{
            setPaybutton(true)
        }
      }} /><br/>
        <button className='btn blue' type="submit" disabled={!stripe || paybutton}>
          Pay
        </button>
        
    </form>
  )
}
const stripePromise = loadStripe('pk_test_51KwjDaSEPDWRfwRTTQbKmjZBYnK1nYwuCeX98OY8msPZ6vTkaGRYlZQAKoJPHOTWJyzeSRMsPij0cH4xQk7K59vg00VOY0HoXK');


  const Checkout = () =>{
    return(
      <Elements stripe={stripePromise}>
    <Checkoutform />
  </Elements>
    )
  }

export default Checkout