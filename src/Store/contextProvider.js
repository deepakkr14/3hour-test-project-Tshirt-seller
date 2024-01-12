import { useState } from "react";

import  CartContext  from "./cartContext";
const ContextProvider=(props)=>{
    const [CartItems, setCartItems] = useState([]);
    const [StoreItems, setStoreItems] = useState([]);
    const [TotalPrice, setAmount] = useState(0);
const addItemToCart=(item,size)=>{
    const obj={item:item,size:size}
    setCartItems([...CartItems,obj])   
    console.log(CartItems)

}
const removeItemFromCart=()=>{}
const addItemToStore=(item)=>{
    setStoreItems([...StoreItems,item])   
    alert('itme added')
}

    const finalContext={
        CartItems:CartItems,
        TotalPrice:0,
        AddItems:addItemToCart,
        RemoveItems:removeItemFromCart,
        StoreItems:StoreItems,
        AddItemsToStore:addItemToStore,
    }
    return(<CartContext.Provider value={finalContext}>
          {props.children}

    
</CartContext.Provider>);
}
export default ContextProvider