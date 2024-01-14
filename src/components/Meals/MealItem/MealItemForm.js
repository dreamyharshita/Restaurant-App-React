import React,{useContext} from "react";
import './MealItemForm.css';
import CartContext from "../../../store/cart-context";

const MealItemForm=(props)=>{

    const cartcntx=useContext(CartContext);
   
const addItemInCart=(event)=>{
    
    event.preventDefault();
   
    const quantity=document.getElementById('amount_' + props.id).value;
      console.log("additem");
    cartcntx.addItem({...props.item,"quantity":parseInt(quantity)});
   
}
 
 
return(
    <form className="form">
       
        <label>Amount</label>
        <input type="number" id={'amount_'+props.id} min='1' max='5' step='1' defaultValue="1"></input>
        <br/>
        <br/>
        <button onClick={addItemInCart} >Add Amount</button>
    </form>
)
}

export default MealItemForm;