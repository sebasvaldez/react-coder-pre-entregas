import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import Accesoriospage from "../Views/Accesoriospage.jsx";
import EsteticaPage from "../Views/EsteticaPage";
import SnacksPage from "../Views/SnacksPage";
import HomePage from "../Views/HomePage";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/estetica" element={<EsteticaPage />} />
        <Route path="/category/accesorios" element={<Accesoriospage />} />
        <Route path="/category/snacks" element={<SnacksPage />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<h1>404 NOT FOUND</h1>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
