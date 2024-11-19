import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Product from "./Pages/Products";
import Cart from "./Pages/Cart";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
   <Routes>
    <Route path="/" element={< Home />} />
    <Route path="/products/:category/:id" element={< Product />} />
    <Route path="/Cart" element={< Cart />} />
   </Routes>
  );
}

export default App;
