import { useQuery } from '@apollo/client';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'  
import { GET_PRODUCT } from '../gqloperation/queries';
import {BACKEND_URL} from '../Helpers.js'
import Carousel,{Dots} from '@brainhubeu/react-carousel';
import { useCart } from 'react-use-cart';

function Product() {
  const {pid} = useParams()
  console.log(pid);
  
  const {addItem} = useCart();

  const {loading,error,data} =  useQuery(GET_PRODUCT,{
    variables:{
      productId:pid
    }
  })

  const [value, setValue] = useState(0);

  const onChange = value => {
  setValue(value);
  }

  if(loading) return <h2>Loading plzz wait</h2>
  if(error) console.log(error)
  if(data) console.log(data)


  const {name,price,description,images} = data.product.data.attributes

//Add items to CART


  const addTocart = () =>{
      addItem({
        id:pid,
        name,
        price,
        img: images.data[0].attributes.url
      })
  } 

  return (
    <>  
    <div className='container'>
    <div>
    <Carousel
      value={value}
      onChange={onChange}
      plugins={['arrows']}
    >
     {
        images.data.map(({attributes}) =>{
           return <img style={{height: "50vh"}} src={attributes.url} />
        }

        )
      }
    </Carousel>
    <Dots
      value={value}
      onChange={onChange}
      thumbnails={
        images.data.map(({attributes}) =>{
           return <img style={{height: "50px"}} src={attributes.url} />
        }

        )
      }
      />
       </div>
       <h2>{name}</h2>
       <p>{description}</p>
       <h2> ₹ {price}</h2>
       <button className='btn blue' onClick={addTocart}>ADD TO CART</button>
    </div>
    </>
  )
}

export default Product