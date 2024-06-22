import "./sass/style.css";
import { Categories } from "./pages/Categories";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { ProductPage } from "./pages/ProductPage";

import Navbar from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  return (
    <div className="App">
      <ShoppingCartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="categories" element={<Categories />} />

          <Route path="productpage" element={<ProductPage />}>
            <Route path=":id" element={<ProductPage />} />
          </Route>
        </Routes>
      </ShoppingCartProvider>
    </div>
  );
}

export default App;
