import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Products from './pages/Products/Products';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';

function App() {

  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="cart" element={<ShoppingCart />} />
        </Routes>
      </BrowserRouter>,
    </div>
  )
}

export default App
