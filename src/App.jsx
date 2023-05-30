import * as React from "react";
import { Footer } from "./components/Footer";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Box, Fab } from "@mui/material";
import { theme } from "./ui/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        </Routes>
      </BrowserRouter>

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignSelf: "flex-end",
        }}
      >
        {/* <ItemListContainer greeting="Bienvenidos a Tienda Kurama" /> */}
        <Fab size="large" sx={theme.WppIcon} color="success" aria-label="add">
          <WhatsAppIcon />
        </Fab>
      </Box>

      <Footer />
    </>
  );
}

export default App;
