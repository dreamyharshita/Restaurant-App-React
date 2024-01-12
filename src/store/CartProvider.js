import CartContext from './cart-context';
import React,{useState} from 'react';

const CartProvider=props=>{
    const[items,updateItems]=useState([]);
    const[amount,updateAmount]=useState(0);
   
    const addItemToCartHandler=(item)=>{
 
        if(items.length===0){
      
        updateItems([...items,item]);
        amountHandler(item.quantity);
        }
        else{
            let data=items.filter((it)=>{
                return it.id===item.id
            })
            console.log("data after filter",data);
            if(data.length===0)
            {
         updateItems([...items,item]);
        amountHandler(item.quantity);
            }
            else{
                
                 console.log("data quantity",data[0].quantity,data[0].name);
                 data[0].quantity=data[0].quantity+item.quantity;
                console.log("data",data);
                
                amountHandler(item.quantity);
                data="";
            }
        }

      
    }
    
   
    const amountHandler=(a)=>{
        updateAmount(a);
    }
    
    const removeItemFromCartHandler=id=>{};

const cartContext={
    items:items,
    totalAmount:amount,
    addItem:addItemToCartHandler,
    removeItem: removeItemFromCartHandler
}

return <CartContext.Provider value={cartContext}>
    {props.children}
</CartContext.Provider>
};

export default CartProvider;