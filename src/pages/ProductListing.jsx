import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/cartSlice';
import { plants } from '../data/plants';

export default function ProductListing() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  return (
    <div style={{ padding: 20 }}>
      <h2>Our Plants</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {plants.map(p => {
          const isAdded = cartItems.find(i => i.id === p.id);
          return (
            <div key={p.id} style={{ border: '1px solid #ccc', borderRadius: 8, padding: 10, width: 200 }}>
              <img src={p.img} alt={p.name} style={{ width: '100%' }} />
              <h3>{p.name}</h3>
              <p>₱{p.price}</p>
              <button disabled={!!isAdded} onClick={() => dispatch(addToCart(p))}>
                {isAdded ? 'Added' : 'Add to Cart'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
