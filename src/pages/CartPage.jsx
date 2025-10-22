import { useDispatch, useSelector } from 'react-redux';
import { increase, decrease, remove } from '../features/cartSlice';
import { Link } from 'react-router-dom';

export default function CartPage() {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const totalItems = cart.reduce((sum, i) => sum + i.quantity, 0);
  const totalCost = cart.reduce((sum, i) => sum + i.quantity * i.price, 0);

  return (
    <div style={{ padding: 20 }}>
      <h2>Your Shopping Cart</h2>
      <p>Total Items: {totalItems}</p>
      <p>Total Cost: ₱{totalCost}</p>

      {cart.map(i => (
        <div key={i.id} style={{ borderBottom: '1px solid #ccc', marginBottom: 10 }}>
          <img src={i.img} alt={i.name} width="80" />
          <h3>{i.name}</h3>
          <p>₱{i.price}</p>
          <button onClick={() => dispatch(decrease(i.id))}>-</button>
          {i.quantity}
          <button onClick={() => dispatch(increase(i.id))}>+</button>
          <button onClick={() => dispatch(remove(i.id))}>Delete</button>
        </div>
      ))}

      <button onClick={() => alert("Coming Soon!")}>Checkout</button>
      <Link to="/products"><button>Continue Shopping</button></Link>
    </div>
  );
}
