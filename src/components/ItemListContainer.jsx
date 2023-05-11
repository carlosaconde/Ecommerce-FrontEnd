import React from "react";
// import { ItemCount } from "./ItemCount";
// import { Item } from "./Item";
import { ItemList } from "./ItemList";
import { Box } from "@mui/material";
import { useState } from "react";




export const ItemListContainer = ({ greeting }) => {

const [items, setItems] = useState([])


  return (
    <>
      <Box
        sx={{
          mt: 10,
          maxWidth: 1800,
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <ItemList />
      </Box>
    </>
  );
};
