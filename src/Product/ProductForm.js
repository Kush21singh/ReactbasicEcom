import React, { useState } from 'react';

import './ProductForm.css';


function ProductForm({ onAddProduct }) {
  const [product, setProduct] = useState({
    id: '',
    name: '',
    price: '',
    category: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!product.name || !product.price || !product.category) {
      alert('Please fill out all required fields.');
      return;
    }

    
    const newProduct = { ...product, id: Date.now().toString() };
    onAddProduct(newProduct);
    
    setProduct({ id: '', name: '', price: '', category: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Product Name"
        value={product.name}
        onChange={handleInputChange}
        required 
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={product.price}
        onChange={handleInputChange}
        required 
      />
      <select
        name="category"
        value={product.category}
        onChange={handleInputChange}
        required 
      >
        <option value="">Select Category</option>
        <option value="skincare">Skincare</option>
        <option value="food">Food</option>
        <option value="electronics">Electronics</option>
        <option value="household">Household</option>
        <option value="furniture">Furniture</option>
        <option value="toy">Toys</option>
        <option value="footwear">Footwear</option>
        <option value="clothing">Clothings</option>
      </select>
      <button type="submit">Add Product</button>
    </form>
  );
}

export default ProductForm;
