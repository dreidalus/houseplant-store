import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const cartCount = useSelector(state =>
    state.cart.items.reduce((sum, i) => sum + i.quantity, 0)
  );

  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: 20, background: '#eafbea' }}>
      <nav>
        <Link to="/">Home</Link> | <Link to="/products">Products</Link> | <Link to="/cart">Cart 🛒 ({cartCount})</Link>
      </nav>
    </header>
  );
}
