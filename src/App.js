import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { ProductContextProvider } from "./context/ProductContext";
import AddProducts from "./pages/AddProducts";

function App() {
  return (
    <>
      <Router>
        <ProductContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addProduct" element={<AddProducts />} />
          </Routes>
        </ProductContextProvider>
      </Router>
    </>
  );
}

export default App;
