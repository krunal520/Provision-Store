// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import ProductList from './components/ProductList/ProductList';
import About from './components/About/About';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Set the default route to render the Login component */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
