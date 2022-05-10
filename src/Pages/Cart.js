import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { useCart } from 'react-use-cart'
import Checkout from '../Component/Checkout';
import emptycart from '../images/cart.png'

function Cart() {
   
     const [checkout,setCheckout] = useState(false)


      //add cart using react-cart laibrary

   const{isEmpty,items,cartTotal,removeItem} = useCart();
 
     const navigate = useNavigate();

      if(checkout){
      return(  
          <div className='container'>
            <h4>Payment Page</h4>
            <Checkout/><br/>
            <button className='btn red' onClick={()=>setCheckout(false)}>cancel</button>
         </div>
      )
      }


    

   const jwt = localStorage.getItem('jwt');


   if(isEmpty){return( 
                   <div className='empty'>
                      <img src={emptycart} className="cartimage"/>
                      <h3>Your Cart is Empty</h3>
                   </div>)}
   if(items){
     console.log(items)
   }
  return (
    <>
       <div className='container row'>
         <ul className="collection col m8">
           {
             items.map(item =>(
           <li class="collection-item avatar itemcontainer"
              style={{
                "paddingLeft":"10px",
              }}
              >
               <img src={item.img} alt="" class="circle" className='pimage'/>
               <div className='pdiscp'>
               <span class="title">{item.name}</span>
               <p className='green-text'>price - ₹ {item.price} * {item.quantity} = ₹ {item.itemTotal}</p>
               <i className=' secondary-content material-icons red-text'
               onClick={() =>removeItem(item.id)}
               style={{cursor:"pointer"}}>remove_circle</i>
               </div>
           </li>
             ))
           }
           </ul>
           <div className="col m3  offset-m1 total" style={{position:"sticky",top:"2px"}}>
             <h6>Total Price</h6>
             <h3> ₹ {cartTotal}</h3>
             {
                 jwt ? 
                     <button className='btn blue' onClick={() => setCheckout(true)}>Place Order</button>
                   :
                   <div className='cart-panel red white-text' style={{padding:"20px"}}>Plase Login to Checkout</div>  
             }
           </div>
       </div>
    </>
  )
}

export default Cart