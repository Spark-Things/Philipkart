import { useQuery } from '@apollo/client';
import React from 'react'
import { useParams } from 'react-router-dom'
import { GET_PRODUCT_BY_CATEGORY } from '../gqloperation/queries';
import Card from '../Component/Card'

function ProductByCategory() {

   const {cid} = useParams();
   const {loading,data,error} = useQuery(GET_PRODUCT_BY_CATEGORY,{
      variables:{
        categoryId: cid
      }
    })

    if(loading)return <div class="progress">
    <div class="indeterminate"></div>
</div>
  return (
    <div className='ProductPage'>
         {
             data.category.data.attributes.products.data.map( ({id,attributes}) =>{
                return <Card key={id}
                id={id}
                name={attributes.name}
                price={attributes.price}
                discription={attributes.description}
                img={attributes.images.data[0].attributes.url}/>
             })
          }

    </div>
  )
}

export default ProductByCategory