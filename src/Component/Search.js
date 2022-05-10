import { useLazyQuery } from '@apollo/client'
import React, { useEffect,useState } from 'react'
import { GET_PRODUCT_BY_NAME } from '../gqloperation/queries'
import {Link} from 'react-router-dom';

function Search() {
  const [nameQuery, setNameQuery] = useState("")
  const [getProduct,{data,loading,error}] = useLazyQuery(GET_PRODUCT_BY_NAME,{
    variables:{
      "filters": {
        "name": {
          "startsWith": nameQuery
        }
      }
    }
  })

  useEffect(() => {
   if(nameQuery.length != 0) {
    getProduct();
   }  
  }, [nameQuery])
  

  const handleChange = (e) =>{
    setTimeout(() => {
      setNameQuery(e.target.value)
    },500); 
  }
  return (
    <div className='container'>
       <div className="nav-wrapper">
      <form>
        <div className="input-field">
          <input type="search"  onChange={handleChange} required/>
          <label className="label-icon" for="search"><i className="material-icons">search</i></label>
          <i className="material-icons">close</i>
        </div>
      </form>
    </div>
     {
       (nameQuery == 0) ?  null
              :
       <div className='showSuggestion'>
       {
          data && 
             data.products.data.map(({id,attributes}) =>{
                   return <Link to={`/product/${id}`}><h6 className='yellow white-text' style={{"padding": "20px"}}>{attributes.name}</h6></Link> 
             })
       }
        </div>
     }
    </div>
  )
}

export default Search