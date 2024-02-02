import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";

BrowserRouter;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
