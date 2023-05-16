import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import NavbarMain from "./components/Navbar/NavbarMain";
import Itemlistcontainer from "./components/ItemListContainer/Itemlistcontainer";

function App() {
  return (
    <>
      <NavbarMain />
      <Itemlistcontainer
        greeting={"Bienvenido, soy un saludo pasado por props!"}
      />
    </>
  );
}

export default App;
