import * as React from "react";
import Badge from "@mui/material/Badge";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const CartWidget = () => {
  const { cartTotal } = useContext(CartContext);

  return (
    <Link to={"/cart"}>
      <Badge badgeContent={cartTotal()} color="error">
        <ShoppingCartIcon color="action" />
      </Badge>
    </Link>
  );
};
