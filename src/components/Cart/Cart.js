import ItemModal from '../UI/ItemModal';
import './Cart.css';

const Cart=(props)=>{
    const cartItems=<ul className="cart-items">
        {[{id:'c1',name:'sushi',amount:2,price:12.99},].map((item)=><li>{item.name}</li>)}
        </ul>;
return <ItemModal onClose={props.onClose}>
    {cartItems}
    <div className="total">
        <span>
            total amount
        </span>
        <span>
            35.66
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
