import './App.scss';
import { BrowserRouter as Router, Routes,  Route} from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Home from './Views/Home/Home';
import Products from './Views/Products/Products';
import Product from './Views/Product/Product';
import Bundles from './Views/Bundles/Bundles';
import AboutUs from './Views/AboutUs/AboutUs';
import Cart from './Views/Cart/Cart';
import CartCheckout from './Views/Cart/CartCheckout/CartCheckout';
import CartReview from './Views/Cart/CartReview/CartReview';
import CartConfirmation from './Views/Cart/CartConfirmation/CartConfirmation';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/bundles" element={<Bundles />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart/checkout" element={<CartCheckout />} />
          <Route path="/cart/checkout/review/" element={<CartReview />} />
          <Route path="/cart/checkout/confirmed" element={<CartConfirmation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
