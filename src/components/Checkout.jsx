import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { CartContext } from "../context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { clear } from "@testing-library/user-event/dist/clear";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

export const Checkout = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [orderId, setOrderId] = useState("");

  const { cart, sumTotal, clearCart } = useContext(CartContext);

  const onAddName = (e) => {
    e.preventDefault();
    setNombre(e.target.value);
    console.log(nombre);
  };
  const onAddTelefono = (e) => {
    e.preventDefault();
    setTelefono(e.target.value);
    console.log(nombre);
  };

  const onAddEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
    console.log(nombre);
  };
  const createOrder = () => {
    if (nombre.length === 0) {
      return false;
    }

    if (email.length === 0) {
      return false;
    }

    if (telefono.length === 0) {
      return false;
    }

    const buyer = { name: nombre, phone: telefono, email: email };
    const items = cart.map((item) => ({
      id: item.id,
      title: item.nombre,
      price: item.precio,
      quantity: item.cantidad,
    }));
    const fecha = new Date();
    const date = `${fecha.getFullYear()}-${
      fecha.getMonth() + 1
    }-${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}`;
    const total = sumTotal();
    const order = { buyer: buyer, items: items, date: date, total: total };

    // Insertar un Documento en Firestore
    const db = getFirestore();
    const OrdersCollection = collection(db, "orders");
    addDoc(OrdersCollection, order)
      .then((resultado) => {
        setOrderId(resultado.id);
        console.log(orderId);
        clear();
      })
      .catch((resultado) => {
        console.log("Error! No se pudo completar la compra!");
      });
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          display: "grid",
          justifyContent: "center",
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          onInput={onAddName}
          id="nombre"
          label="nombre"
          variant="outlined"
        />
        <TextField
          onInput={onAddTelefono}
          id="telefono"
          label="telefono"
          variant="outlined"
        />
        <TextField
          onInput={onAddEmail}
          id="email"
          label="email"
          variant="outlined"
        />

        <Button onClick={createOrder}> Generar Orden de Compra</Button>

        <Box>
          <h2> orden nro {orderId}</h2>
        </Box>
      </Box>
    </>
  );
};
