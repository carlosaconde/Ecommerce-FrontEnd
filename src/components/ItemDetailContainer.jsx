import React, { useEffect, useState } from 'react'
import { ItemDetail } from './ItemDetail'
import { getProductById } from '../asyncMock'
import { useParams } from 'react-router-dom'

export const ItemDetailContainer = () => {
  
  const [product, setProduct] = useState([])

  const {itemId} = useParams()

    useEffect(() => {
      getProductById(itemId)
      .then(response => {
        setProduct(response)
        // console.log(response);
      })
      .catch(error => {
        console.error(error)
      })
    
      
    }, [itemId])
    
  // console.log(product);
    return (
    <>
    
        <ItemDetail  {...product}
          />
    
    
    </>
  )
}
