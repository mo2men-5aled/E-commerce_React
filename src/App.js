import { Route, Routes } from "react-router-dom";

import Landing from "./components/Routes/Landing";
import ProductList from "./components/Routes/ProductsList";
import ViewProduct from "../src/components/SingleProduct/SingleProd";
import Summary from "./components/Routes/Summary/Summary";
import CheckOut from "./components/Routes/Checkout";

import Header from "./components/Header";
import Footer from "./components/Landing/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact element={<Landing />} />
        <Route path="/list" exact element={<ProductList />} />
        <Route path="/SingleProduct/:id" exact element={<ViewProduct />} />
        <Route path="/summary/:id/:amount" exact element={<Summary />} />
        <Route path="/checkout" exact element={<CheckOut />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
