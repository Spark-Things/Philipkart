import React from 'react';
import { Link } from 'react-router-dom';
import {BACKEND_URL} from '../Helpers.js'
 
function Card({id,name,discription,price,img}) {
  return (
    <Link to={`/product/${id}`} className="p-card" >
    <div className="card ">
        <div className="card-image">
          <img className='productImage' src={img}/> 
        </div>
        <div className="card-content">
          <span className="card-title truncate">{name}</span>
          <p className='truncate'>{discription}</p>
          <h6 className='green-text'> ₹ {price}</h6>
        </div>
      </div>
      </Link>
  )
}

export default Card