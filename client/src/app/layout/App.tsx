import { useEffect, useState } from "react";
import Catalog from "../features/catalog/Catalog";
import { Box, Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import NavBar from "./NavBar";
import type { Product } from "../models/product";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';

  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: (paletteType === 'light') ? '#eaeaea' : '#121212'
      }
    }
  })

  useEffect(() => {
    fetch('https://localhost:5001/api/product')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []) 


  const toggleChangeMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <ThemeProvider theme={theme}>
    <CssBaseline/>
    <NavBar darkMode={darkMode} setDarkMode={toggleChangeMode}/>
    <Box sx={{
      minHeight: '100vh',
      background: darkMode 
        ? 'radial-gradient(circle, #1e3aBa, #111B27)'
        : 'radial-gradient(circle, #baecf9, #f0f9ff)', 
      py: 6
    }}>
      <Container maxWidth="xl" sx={{mt: 8}}>
      <Catalog products={products}/>
    </Container>
    </Box>
    </ThemeProvider>
  );
}

export default App;
