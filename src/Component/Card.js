import React from 'react';
import { Link } from 'react-router-dom';
import {BACKEND_URL} from '../Helpers.js'
 
function Card({id,name,discription,price,img}) {
  return (
    <Link to={`/product/${id}`} >
    <div className="card p-card">
        <div className="card-image"
         style={{
           "backgroundColor":"green",
          "borderRadius": "20px 20px 0 0"
        }}>
          <img className='productImage' src={img}
           style={{
             "backgroundColor":"red",
            "borderRadius": "20px 20px 0 0"
          }}
          /> 
        </div>
        <div className="card-content"
         style={{
           "borderRadius": "0 0 20px 20px"
         }}
        >
          <span className="card-title truncate">{name}</span>
          <p className='truncate'>{discription}</p>
          <h6 className='green-text'> ₹ {price}</h6>
        </div>
      </div>
      </Link>
  )
}

export default Card