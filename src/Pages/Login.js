import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LOGIN_USER } from '../gqloperation/mutation'

function Login() {
  //  to nagigate to home after login 
    const navigate = useNavigate()

    
   const [formdata,setFormData] = useState({})


      const [loginUser,{loading,error,data}] = useMutation(LOGIN_USER);

      if(loading) return <h2>Logging in....</h2>
      if(error) console.log(error)
        if(data){
          localStorage.setItem("jwt",data.login.jwt)
          navigate("/")
        }
    

    const handleSubmit = (e) =>{
          e.preventDefault()
         console.log(formdata);

         loginUser({
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
          <h3>Login</h3>
          <form>
            <input type="text" 
            placeholder='Email or username'
            onChange={handleChange}
            name="identifier"
            required/>

            <input type="password" 
            placeholder='password'
            onChange={handleChange}
            name="password"
            required/>

            <button type='submit' className='btn blue' onClick={handleSubmit}>Login</button>
          </form>
          </div>
    </div>
  )
}

export default Login