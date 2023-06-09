import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar.jsx";
import Itemlistcontainer from "./components/ItemListContainer/Itemlistcontainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>

      
        <Route
          path="/"
          element={
            <Itemlistcontainer
              
            />
          }
        />

        <Route
          path="/category/:id"
          element={<Itemlistcontainer greeting={"category:id"} />}
        />

        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
      
      
      
    </Router>
  );
}

export default App;
