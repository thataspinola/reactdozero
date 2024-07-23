import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Product from "./pages/Product/Product";
import Info from "./pages/Info/Info";
import NotFound from "./pages/NotFound/NotFound";
import Search from "./pages/Search/Search";

import Navbar from "./components/Navbar/Navbar";
import { SearchForm } from "./components/SearchForm/SearchForm";

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        <Navbar />

        <SearchForm />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/products/:id/info" element={<Info />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/search" element={<Search />} />
          <Route path="/company" element={<Navigate to="/about" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
