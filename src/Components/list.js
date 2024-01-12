import { useContext } from "react";
import CartContext from "../Store/cartContext";
const List = () => {
  const cartCtx = useContext(CartContext);
  console.log(cartCtx.StoreItems);
  const addItemCart = (item,size) => {
    cartCtx.AddItems(item,size);
  };
  return (
    <div>
      <h3>List Of Items</h3>
      <pre>Nmae description price Quantity</pre>
      <ul>
        {cartCtx.StoreItems.map((item) => (
          <li key={Math.random()}>
            Name:{item.name} Description:{item.description}Price:{item.price}
          {/* Size S-{item.S} M-{item.M} L-{item.L} */}
            <button onClick={()=>addItemCart(item.name,'s')}>Buy Small({item.S})</button>
            <button onClick={()=>addItemCart(item.name,'m')}>Buy Medium({item.M})</button>
            <button onClick={()=>addItemCart(item.name,'l')}>Buy Large({item.L})</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default List;
