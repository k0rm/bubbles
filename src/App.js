import './App.scss';
import { BrowserRouter as Router, Routes,  Route} from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Home from './Views/Home/Home';
import Products from './Views/Products/Products';
import Bundles from './Views/Bundles/Bundles';
import AboutUs from './Views/AboutUs/AboutUs';
import Cart from './Views/Cart/Cart';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/bundles" element={<Bundles />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
