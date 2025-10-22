import { Link } from 'react-router-dom';
import './LandingPage.css';

export default function LandingPage() {
  return (
    <div className="landing">
      <h1>Green Haven</h1>
      <p>Your trusted source for beautiful houseplants that bring life to your home.</p>
      <Link to="/products" className="get-started">Get Started</Link>
    </div>
  );
}
