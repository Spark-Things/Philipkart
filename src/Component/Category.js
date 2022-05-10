import { useQuery } from '@apollo/client'
import React from 'react'
import { Link } from 'react-router-dom';
import { GET_CATEGORIES } from '../gqloperation/queries'

function Category() {
  const {data,loading,error} =  useQuery(GET_CATEGORIES);

  if(loading)return<h1>categories is loading...</h1>
  return (
    <div className='category'>

      {
         data.categories.data.map(({id,attributes}) =>{
           return <Link key={id} to={`/category/${id}`}><h4 className='chip btn white'>{attributes.name}</h4></Link>
         } )
      }
    </div>
  )
}

export default Category