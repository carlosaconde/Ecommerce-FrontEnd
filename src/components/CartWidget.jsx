import * as React from "react";
import Badge from "@mui/material/Badge";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const CartWidget = () => {
  return (
    <Badge  badgeContent={1} color="error">
      <ShoppingCartIcon color="action" />
    </Badge>
  );
};
