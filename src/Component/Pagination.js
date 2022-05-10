import React from 'react'

function Pagination({pageCount,updatePage}) {
  return (
    <div className='container pagination'>
      {
         [...Array(pageCount).keys()].map(value =>{
           return <button 
                         key={value +1} 
                         className='btn chip'
                         onClick={ () =>updatePage(value+1)}
                         >{value+1}</button>
         })
      }
    </div>
  )
}

export default Pagination