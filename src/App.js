import React, { useState, useEffect } from 'react';
import './App.css';
import ProductForm from './Product/ProductForm';
import ProductList from './Product/ProductList';

function App() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(''); 

  
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(storedProducts);
  }, []);

  
  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const deleteProduct = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
  };

  return (
    <div className="App">
      <h1>E-commerce Application</h1>
      <ProductForm onAddProduct={addProduct} />
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        <option value="skincare">Skincare</option>
        <option value="food">Food</option>
        <option value="electronics">Electronics</option>
        <option value="household">Household</option>
        <option value="furniture">Furniture</option>
        <option value="toy">Toys</option>
        <option value="footwear">Footwear</option>
        <option value="clothing">Clothings</option>
      </select>
      <ProductList products={products} selectedCategory={selectedCategory} onDeleteProduct={deleteProduct} />
    </div>
  );
}

export default App;