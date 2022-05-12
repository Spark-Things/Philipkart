import { useQuery } from '@apollo/client'
import React,{useState,useEffect} from 'react'
import Card from '../Component/Card.js'
import Pagination from '../Component/Pagination.js'
import Search from '../Component/Search.js'
import { GET_ALL_PRODUCTES } from '../gqloperation/queries.js'


const Home = () => {
  const [page, setPage] = useState(1)

   const updatePage = (page) =>{
     setPage(page)
   }




  //  for not pagination :--  const {loading,error,data} = useQuery(GET_ALL_PRODUCTES)

  //for pagination 
  const {loading,error,data,refetch} = useQuery(GET_ALL_PRODUCTES,{
    variables:{
        "pagination": {
          "page": page,
          "pageSize": 6
        }
    }
  })
 
   useEffect(() => {
    if(page != 1) refetch();
   }, [page])
   
  

   if(loading)return <div class="progress">
   <div class="indeterminate"></div></div>
   
  return (
    <div className='maintab'>
       <Search />
      <div className='ProductPage container'>
          {
             data.products.data.map( ({id,attributes}) =>{
                return <Card key={id}
                id={id}
                name={attributes.name}
                price={attributes.price}
                discription={attributes.description}
                img={attributes.images.data[0].attributes.url}/>
             })
          }
      </div>
      <Pagination pageCount={data.products.meta.pagination.pageCount} updatePage={updatePage}/>
    </div>
  )
}

export default Home