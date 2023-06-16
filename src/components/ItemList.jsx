import React from "react";
import { Item } from "./Item";
import {Box}   from "@mui/material";


export const ItemList = ({products}) => {
 

  return (
    <>
    <Box
        sx={{
          mt: 5,
          maxWidth: "100vw",
          display: "flex",
          flexDirection: "row",
          justifyContent:'center',
          flexWrap: "wrap",
        }}
      >
       {products.map((producto) => (
        <Item 
          key={producto.id}
          id={producto.id}
          title={producto.nombre}
          image={producto.imagen}
          count={producto.cantidad}
          price={producto.precio}
        />
      ))}
       
      </Box>
      
    </>
  );
};
