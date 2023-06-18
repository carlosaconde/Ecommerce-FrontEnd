import * as React from "react";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import AddCircleSharpIcon from "@mui/icons-material/AddCircleSharp";
import RemoveCircleSharpIcon from "@mui/icons-material/RemoveCircleSharp";
import { useCounter } from "../hooks/useCounter";
import { theme } from "../ui/styles";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export const ItemCount = ({ stock, onAdd }) => {
  const [itemStock, setItemStock] = useState(stock)
  const { counter, increment, decrement, reset } = useCounter({
    initialvalue: 1,
    stock: stock,
  });
  const [itemAded, setItemAded] = useState(false);
   const addToCart = () => {
    if (counter <= itemStock) {
      setItemStock(itemStock-counter)
      setItemAded(true);
      onAdd(counter);
      reset();
    }
  };

  useEffect(()=>{
    setItemStock(stock);
  },[stock])

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: 200,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          width: 200,
        }}
      >
        <Button onClick={() => decrement()} variant="text">
          <RemoveCircleSharpIcon sx={theme.Icon} />
        </Button>
        <Typography variant="h6" component="h6">
          {counter}
        </Typography>

        <Button onClick={() => increment()} variant="text">
          <AddCircleSharpIcon sx={theme.Icon} />
        </Button>
      </Box>

      {itemAded ? (
        <Link to={"/cart"}> Finalizar compra</Link>
      ) : (
        <Button
          onClick={addToCart}
          sx={theme.buttonAddCart}
          variant="contained"
        >
          Agregar al carrito
        </Button>
      )}
    </Box>
  );
};
