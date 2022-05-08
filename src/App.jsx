import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Products from './pages/Products/Products';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import Payment from './components/Payment/Payment'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="cart" element={<ShoppingCart />} />
          <Route path="checkout" element={<Payment />} />
        </Routes>
      </BrowserRouter>,
    </div>
  )
}

export default App
