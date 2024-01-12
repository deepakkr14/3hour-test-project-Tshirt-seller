import React from "react"
const CartContext= React.createContext({
    CartItems:[],
    TotalPrice:0,
    AddItems:(name)=>{},
    RemoveItems:(name)=>{},
    StoreItems:[],
    AddItemsToStore:(name)=>{},
})


// const StoreComtext=React.createContext({
//     StoreItems:[],
//     AddItemsToStore:(name)=>{},
  
    
// })
export default CartContext;