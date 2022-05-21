import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Products from './pages/Products/Products';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import AdminPanel from './pages/Admin/AdminPanel';
import Login from './pages/Login/Login';

function App() {

  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    console.log('Cart changed');
    console.log('PRODUCTS:', cartProducts);
  }, [cartProducts]);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar cartProducts={cartProducts} />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="products" element={<Products cartProducts={cartProducts} setCartProducts={setCartProducts} />} />
          <Route path="cart" element={<ShoppingCart cartProducts={cartProducts} />} />
          <Route path="/admin" element={<AdminPanel/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
