import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SIGNUP_USER } from '../gqloperation/mutation'

function Signup() {
   
   const [formdata,setFormData] = useState({})
           //  to nagigate to home after login 
          const navigate =  useNavigate()

      const [signupUser,{loading,error,data}] = useMutation(SIGNUP_USER);

      if(loading) return <h2>Signing up....</h2>
      if(error) console.log(error)
      if(data){
        localStorage.setItem("jwt",data.register.jwt)
        navigate("/")
      }
    

    const handleSubmit = (e) =>{
          e.preventDefault()
         console.log(formdata);

         signupUser({
           variables:{
             input:formdata
           }
         })
        //  console.log(data);
    }


   const handleChange = (e) =>{
      setFormData({
           ...formdata,[e.target.name]:e.target.value
      })
   }

  return (
    <div>
        <div className='container' style={{maxWidth:"500px"}}>

            {
              error && <div className='card-panel red'>{error.message}</div>
            }
          <h3>Signup</h3>
          <form>
            <input type="text" 
            placeholder='username'
            onChange={handleChange}
            name="username"
            required/>


            <input type="email" 
            placeholder='email'
            onChange={handleChange}
            name="email"
            required/>

            <input type="password" 
            placeholder='password'
            onChange={handleChange}
            name="password"
            required/>

            <button type='submit' className='btn blue' onClick={handleSubmit}>Signup</button>
          </form>
          </div>
    </div>
  )
}

export default Signup