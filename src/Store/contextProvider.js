import { useState } from "react";

import CartContext from "./cartContext";
const ContextProvider = (props) => {
  const [CartItems, setCartItems] = useState([]);
  const [StoreItems, setStoreItems] = useState([]);
  const [TotalPrice, setTotalPrice] = useState(0);
  const [Qty, setQty] = useState(0);
  const addItemToCart = (item, size) => {
    // IF ITEM EXIST IN THE CART
    const finditemIndex = CartItems.findIndex(
      (each) => each.item.name === item.name
    );
    if (finditemIndex !== -1) {
      let copy = CartItems;
      if (size === "s") {
        copy[finditemIndex].Small += 1;
      } else if (size === "m") {
        copy[finditemIndex].Medium += 1;
      } else if (size === "l") {
        copy[finditemIndex].Large += 1;
      }
      //   console.log(existingItem)
      setCartItems(copy);
    } else {
      //IF ITEM DOES NOT EXIST IN THE CART
      let Ssize = 0,
        Lsize = 0,
        Msize = 0;
      if (size === "s") {
        Ssize += 1;
      } else if (size === "m") {
        Msize += 1;
      } else if (size === "l") {
        Lsize += 1;
      }
      const obj = { item: item, Small: Ssize, Medium: Msize, Large: Lsize };
      setCartItems([...CartItems, obj]);
    }
    setTotalPrice((prevTotal) => (prevTotal += item.price));
    setQty((Qty) => (Qty += 1));
    // UPDATING STORE
    const index = StoreItems.indexOf(item);
    let copy = StoreItems;
    if (size === "s") {
      if (copy[index].S > 1) {
        copy[index].S -= 1;
      } else {
        copy[index].S = "out of stock";
      }
    } else if (size === "m") {
      if (copy[index].M > 1) {
        copy[index].M -= 1;
      } else {
        copy[index].M = "out of stock";
      }
    } else if (size === "l") {
      if (copy[index].L > 1) {
        copy[index].L -= 1;
      } else {
        copy[index].L = "out of stock";
      }
    }
    setStoreItems(copy);
  };

  const addItemToStore = (item) => {
    setStoreItems([...StoreItems, item]);
  };

  const finalContext = {
    CartItems: CartItems,
    TotalPrice: TotalPrice,
    AddItems: addItemToCart,
    StoreItems: StoreItems,
    AddItemsToStore: addItemToStore,
    TotalQuantity: Qty,
  };
  return (
    <CartContext.Provider value={finalContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default ContextProvider;
