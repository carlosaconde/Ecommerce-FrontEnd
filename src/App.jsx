import * as React from "react";
import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import { Footer } from "./components/Footer";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Box, Fab } from "@mui/material";
import { theme } from "./ui/styles";


function App() {
  return (
    <>
      <NavBar />

      <ItemListContainer greeting="Bienvenidos a Tienda Kurama" />

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignSelf: "flex-end",
        }}
      >
        <Fab sx={theme.WppIcon} color="primary" aria-label="add">
          <WhatsAppIcon sx={theme.WppIcon} />
        </Fab>
      </Box>

      <Footer />
    </>
  );
}

export default App;
