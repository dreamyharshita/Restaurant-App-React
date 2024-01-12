import React, { useContext } from "react";
import CartIcon from '../Cart/CartIcon';
import './HeaderCartButton.css';
import CartContext from "../../store/cart-context";





const HeaderCartButton=(props)=>{
  

const CartCtx= useContext(CartContext);

let numberofCartItems=0;

CartCtx.items.forEach(item=>{
  numberofCartItems=numberofCartItems+item.quantity;
})


 
return (
    <button className="button"  onClick={props.onClick}>
        <span className="icon">
         <CartIcon/>
        </span>
        <span>
          Your Cart
        </span>
        <span className="badge">
           {numberofCartItems}
        </span>
    </button>
)
}

export default HeaderCartButton;