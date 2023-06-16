import React, { useEffect, useState } from 'react'
import { ItemDetail } from './ItemDetail'
// import { getProductById } from '../asyncMock'
import { useParams } from 'react-router-dom'
import {doc, getDoc} from 'firebase/firestore'
import { db } from '../firebase/config'

export const ItemDetailContainer = () => {
  
  const [product, setProduct] = useState([])

  const {itemId} = useParams()




  useEffect(()=>{


    const docRef = doc(db,'productos',itemId)
  

            getDoc(docRef)
            .then(response => {
                const data = response.data()
                const dataProduct ={id:response.id,...data}
                setProduct(dataProduct)
              })
              
            .catch(error => {
              console.log(error);
            },[itemId])
  })

          
            


    // useEffect(() => {
    //   getProductById(itemId)
    //   .then(response => {
    //     setProduct(response)
    //     // console.log(response);
    //   })
    //   .catch(error => {
    //     console.error(error)
    //   })
    
      
    // }, [itemId])
    
  // console.log(product);
    return (
    <>
    
        <ItemDetail  {...product}
          />
    
    
    </>
  )

}
