import React from "react";
import { ItemList } from "./ItemList";
import { Box } from "@mui/material";
import { useState, useEffect } from "react";
// import { getProducts,getProductByCategory } from "../asyncMock";
import { useParams } from "react-router-dom";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../firebase/config";

export const ItemListContainer = ({ greetings }) => {
  const [products, setProducts] = useState([]);

  const { category } = useParams();

  useEffect(() => {
    const collectionRef = category
      ? query(collection(db, "productos"), where("categoria", "==", category))
      : collection(db, "productos");

    getDocs(collectionRef)
      .then((response) => {
        const dataProducts = response.docs.map((item) => {
          const data = item.data();
          return { id: item.id, ...data };
        });
        setProducts(dataProducts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [category]);

  return (
    <>
      <Box
        sx={{
          mt: 10,
          maxWidth: "100vw",
          display: "grid",
          justifyItems:'center',
        
        }}
      >
        <ItemList products={products} />
      </Box>
    </>
  );
};
