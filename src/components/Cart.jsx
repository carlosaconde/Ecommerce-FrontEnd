import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Box, Button, Card, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export const Cart = () => {
  const { cart, addItem, removeItem, clearCart, cartTotal, sumTotal } =
    useContext(CartContext);

  const totalCompra = sumTotal();

  if (cartTotal() === 0) {
    return <h1> El carrito esta vacio</h1>;
  }

  return (
    <>
      <Box
        sx={{
          display: "grid",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <h2>productos seleccionados</h2>
        {cart.map((item) => (
          <Card key={item.id}>
            <CardMedia
              component="img"
              sx={{ width: 240, height: 240, backgroundSize: "contain" }}
              image={item.imagen}
              title={item.nombre}
            />
            <Typography> {item.nombre}</Typography>
            <Typography>
              {" "}
              {item.quantity} unidades x ${item.precio}{" "}
            </Typography>
            <Typography>
              {" "}
              {(item.quantity * item.precio).toFixed(2)}{" "}
            </Typography>
            <Button onClick={() => removeItem(item.id)}>
              Eliminar item <DeleteForeverIcon />{" "}
            </Button>
          </Card>
        ))}

        <Typography>Total de su compra: {totalCompra} </Typography>
        <Button href="/checkout"> Finalizar Comprra
          {/* <Link to={"/checkout"}> Finalizar Compra</Link> */}
        </Button>

        <Button onClick={clearCart}> Vaciar Carrito </Button>
      </Box>
    </>
  );
};
