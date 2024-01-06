import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.kalpav.com/api/v1/product/category/retail');
        setProducts(response.data.response || []);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filtered = products.filter(product =>
      product.productCategory.productCategoryName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm, products]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
    <img className='img' src='http://www.hindigraphics.in/wp-content/uploads/2019/01/pro.png' alt=''></img>

     
      <input
        className="search-bar"
        type="text"
        placeholder="Search by product name..."
        onChange={handleSearch} 
      />
      <div className="product-list">
        {filteredProducts.map(product => (
          <div key={product.productCategory.productCategoryId} className="product-card">
            <div className="product-box">
              <img src={product.productCategory.productCategoryImage} alt={product.productCategory.productCategoryName} />
              <h3 className="name">{product.productCategory.productCategoryName}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};




export default ProductList;
