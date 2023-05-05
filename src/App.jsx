import * as React from "react";
import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";


function App() {
  return (
    <>
      
        <NavBar />
      

      <ItemListContainer greeting="Bienvenidos a Tienda Kurama" />
    </>
  );
}

export default App;
