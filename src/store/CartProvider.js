import CartContext from './cart-context';
import React,{useState} from 'react';

const CartProvider=props=>{
    const[items,updateItems]=useState([]);
    const[amount,updateAmount]=useState(0);

    
    const addItemToCartHandler=(item)=>{
 console.log("item with quantity",item);
        if(items.length===0){
      
        updateItems([...items,item]);
        updateAmount(item.quantity);
        }
        else{
            let data=items.filter((it)=>{
                return it.id===item.id
            })
           
            if(data.length===0)
            {
         updateItems([...items,item]);
        updateAmount(item.quantity);
            }
            else{
                
                
                 data[0].quantity=data[0].quantity+item.quantity;
                item.quantity=data[0].quantity;
                
                updateAmount(item.quantity);
                updateItems(items);
                data="";
            }
        }

      
    }

   
    
    const removeItemFromCartHandler=id=>{
      
       let data=items.filter((it)=>{
        return it.id===id})

if(data[0].quantity>1){
    data[0].quantity=data[0].quantity-1;
    updateAmount(data[0].quantity);
    updateItems(items);
}
else if(data[0].quantity===1){
    const updatedData = items.filter((item) => item.id !== data[0].id);
    updateItems(updatedData);
    
}
    };

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