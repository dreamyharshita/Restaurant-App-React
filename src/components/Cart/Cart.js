import ItemModal from '../UI/ItemModal';
import './Cart.css';
import CartContext from '../../store/cart-context';
import { useContext } from 'react';

const Cart=(props)=>{
    const cartCTX=useContext(CartContext);
    let total=0;
    const cartItems=<ul className="cart-items">
        {
        cartCTX.items.map(item=>{
         total=total+(parseFloat(item.price)*parseInt(item.quantity));
        
         return <li>{item.name} Price: {item.price} Quantity: {item.quantity}</li>
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
