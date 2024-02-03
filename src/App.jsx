import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import SearchResults from "./components/SearchResults";
import Products from "./components/Products";
import Checkout from "./components/Checkout";
import NavBar from "./components/NavBar";

BrowserRouter;

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/product/:id" element={<Products />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
