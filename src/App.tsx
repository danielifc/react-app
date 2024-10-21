import { useState } from "react";
import "./App.css";
import NavBar from "./components/01-ManagingState/NavBar";
import Cart from "./components/01-ManagingState/Cart";

function App() {
  const [cartItems, setCartItems] = useState(["Product1", "Product2"]);

  return (
    <div>
      <NavBar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
    </div>
  );
}

export default App;
