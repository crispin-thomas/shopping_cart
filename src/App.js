import { BrowserRouter as Router, Route } from "react-router-dom";

import NavbarComp from "./components/navbarComp";
import Products from "./components/productsComp";
import CartComp from "./components/cartComp";

function App() {
  return (
    <div>
      <Router>
        <NavbarComp />
        <Route path="/" exact>
          <Products />
        </Route>
        <Route path="/cart" exact>
          <CartComp />
        </Route>
      </Router>
    </div>
  );
}

export default App;
