import React from "react";
// import { ItemCount } from "./ItemCount";
// import { Item } from "./Item";
import { ItemList } from "./ItemList";

export const ItemListContainer = ({ greeting }) => {
  return (
    <>
      <h2> {greeting} </h2>
      {/* <Item/> */}
      <ItemList/>
    </>
  );
};
