import ItemModal from '../UI/ItemModal';
import './Cart.css';
import CartContext from '../../store/cart-context';
import { useContext} from 'react';

const Cart=(props)=>{
    const cartCTX=useContext(CartContext);
    let total=0;
   
    const removeItemInCart=(event)=>{
        
        event.preventDefault();
        console.log(event.target.parentElement.previousSibling.id);
        cartCTX.removeItem(event.target.parentElement.previousSibling.id);
    }

    const addItemInCart=(event)=>{
        event.preventDefault();
       let event_id=event.target.parentElement.previousSibling.id;
       const item=(cartCTX.items.filter((it)=>it.id==event_id));
       const data=item[0];
       cartCTX.addItem({...data, "quantity":1});
    }
    const cartItems=<ul className="cart-items">
        {
        cartCTX.items.map(item=>{
            
          

         total=total+(parseFloat(item.price)*parseInt(item.quantity));
        
         return (<div className='li-edit'>
        
         <li id={item.id}>{item.name} Price: {item.price} Quantity: {item.quantity} </li>
         
         <div>
         <button id="plus" onClick={addItemInCart}>+</button>
         <button id="minus" onClick={removeItemInCart}>-</button></div>
         <hr/>
         </div>)
        })
        
        
        }
       
        </ul>;
return <ItemModal onClose={props.onClose}>
    {cartItems}
    <div className="total">
        <span>
            total amount
        </span>
        <span>
            {total}
        </span>
    </div>
    <div className="actions">
<button className="button" onClick={props.onClose}>close</button>
<br/>
<button className="button">order</button>
    </div>
</ItemModal>

}

export default Cart;
