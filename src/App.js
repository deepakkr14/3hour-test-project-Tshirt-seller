import Form from "./Components/addingForm";
import { useState } from "react";
import Cart from "./Components/Cart/Cart";
import CartContext from "./Store/contextProvider";
import List from './Components/list'
function App() {
  const [showCart, setShowCart] = useState(false);

  const closeCart = () => {
    setShowCart(false);
  };
  const openCart = () => {
    setShowCart(true);
  };
  const quantity = 0;
  return (
    <CartContext>
    

      {showCart && <Cart onClosebtn={closeCart} />}
     
      <button onClick={openCart}>Open Shopping Cart({quantity})</button>

      <Form />
      <List/>
    </CartContext>
  );
}

export default App;
