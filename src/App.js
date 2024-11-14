import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Product from "./Pages/Products";

function App() {
  return (
   
   <Routes>
    <Route path="/" element={< Home />} />
    <Route path="products" element={< Product />} />
   </Routes>
  
  );
}

export default App;
