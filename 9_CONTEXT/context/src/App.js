import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import About from "./pages/About/Products";

function App() {
  return (
    <div className="App">
      <Home />
      <Products />
      <About />
    </div>
  );
}

export default App;
