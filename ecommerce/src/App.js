import { BrowserRouter, Route, Routes } from "react-router-dom";

import FrontStore from "./components/FrontStore";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<FrontStore />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
