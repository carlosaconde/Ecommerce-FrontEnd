import * as React from "react";
import Badge from "@mui/material/Badge";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState } from "react";

export const CartWidget = ({cant}) => {

  const [cantItems, setCantItems] = useState(1)
console.log(cant);
  // setCantItems(cantItems+counter)

  return (
    <Badge badgeContent={cantItems} color="error">
      <ShoppingCartIcon color="action" />
    </Badge>
  );
};
