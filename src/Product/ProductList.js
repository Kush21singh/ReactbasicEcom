import React from 'react';

import './ProductList.css'

function ProductList({ products, selectedCategory, onDeleteProduct }) {
  
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div className="product-list">
      <h2>Product List</h2>
      <ul>
        <li className="product-heading">
          <span>Product Name</span>
          <span>Price</span>
          <span>Category</span>
          <span>Action</span>
        </li>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <span>{product.name}</span>
            <span>{product.price}</span>
            <span>{product.category}</span>
            <button onClick={() => onDeleteProduct(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
