import React from "react";
import { ItemList } from "./ItemList";
import { Box } from "@mui/material";
import { useState,useEffect } from "react";
import { getProducts,getProductByCategory } from "../asyncMock";
import { useParams } from "react-router-dom";



export const ItemListContainer = ({ greetings }) => {
    const [products, setProducts] = useState([])

  const { category } = useParams()

  useEffect(()=>{
    const asyncFunc = category? getProductByCategory : getProducts
  
      asyncFunc(category)
      .then(response=>{
        setProducts(response)
      })
      .catch(error=>{
        console.error(error)
      })
  },[category])


    useEffect(() => {
      getProducts()
         .then(response => {
          setProducts(response)
         })
         .catch(error => {
          console.error(error);
         })
    
      
    }, [])
    

  return (
    <>
      <Box
        sx={{
          mt: 10,
          maxWidth: "90vw",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
       
        <ItemList  products={products}/>
      </Box>
    </>
  );
};
