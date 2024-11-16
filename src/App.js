import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Product from "./Pages/Products";
import Cart from "./Pages/Cart";

function App() {
  return (
   
   <Routes>
    <Route path="/" element={< Home />} />
    <Route path="products/:category/:id" element={< Product />} />
    <Route path="Cart/:category/:id" element={< Cart />} />
   </Routes>
  
  );
}

export default App;
