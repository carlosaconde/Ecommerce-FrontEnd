import React from "react";
import { useFetch } from "../hooks/useFetch";
import { Item } from "./Item";
import { Box } from "@mui/material";

export const ItemList = () => {
  const productos = useFetch("https://fakestoreapi.com/products");

  console.log(productos);
  return productos.map((producto) => {
    
    return (
      <>
        
          <Item
            key={producto.id}
            title={producto.title}
            description={producto.description}
          />
        
      </>
    );
  });
};
