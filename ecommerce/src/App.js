import { BrowserRouter, Route, Routes } from "react-router-dom";

import Landing from "./components/Routes/Landing";
import ProductList from "./components/Routes/ProductsList";
import ViewProduct from "./components/Routes/SingleProd";
import Summary from "./components/Routes/Summary";
import CheckOut from "./components/Routes/Checkout";

import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<Landing />} />
        <Route path="/list" exact element={<ProductList />} />
        <Route path="/SingleProduct" exact element={<ViewProduct />} />
        <Route path="/summary" exact element={<Summary />} />
        <Route path="/checkout" exact element={<CheckOut />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
