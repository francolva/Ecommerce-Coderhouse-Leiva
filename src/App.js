import "./App.css";
import { createTheme, colors, ThemeProvider, CssBaseline } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import Checkout from "./components/Checkout/Checkout";
import CartContextProvider from "./context/CartContext";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      light: colors.teal[200],
      main: colors.teal[500],
      dark: colors.teal[900],
    },
    secondary: {
      light: colors.indigo[200],
      main: colors.indigo[500],
      dark: colors.indigo[900],
    },
    background: colors.blueGrey[50],
  },
});

function App() {
  
  return (
    
    <div className="App">
      <CssBaseline />
      <ThemeProvider theme={ theme }> 
        <BrowserRouter>
          <CartContextProvider>
            <Navbar />
            <Routes>
              <Route path='/' element={ <ItemListContainer greeting= { "Mobilia. Tu espacio, a tu alcance"} />} />
              <Route path='/category/:categoryId' element={ <ItemListContainer greeting= { "Mobilia. Tu espacio, a tu alcance"} />} />
              <Route path='/cart' element={ <Cart /> } />
              <Route path='/item/:itemId' element={ <ItemDetailContainer />} />
              <Route path='/checkout' element={ <Checkout /> } />
              <Route path='*' element={ <h1>404 NOT FOUND</h1> } />
            </Routes>
          </CartContextProvider>
        </BrowserRouter> 
      </ThemeProvider>
    </div>
    
  );
}

export default App;
