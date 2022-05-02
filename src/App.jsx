import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Products from './pages/Products/Products';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';

function App() {

  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Products />} />
        </Routes>
      </BrowserRouter>,
    </div>
  )
}

export default App
