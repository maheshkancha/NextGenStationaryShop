import React from "react";
import "./ProductDetails.css";

const ProductDetails = ({ product, getSelectedProduct }) => {
  const { product_name, category, quantity, price, sale_price } = product;

  const selectedProduct = () => {
    getSelectedProduct(product);
  };

  return (
    <div>
      {product ? (
        <div className="product-item-wrapper" onClick={selectedProduct}>
          <div>
            <span>{product_name}</span>
            <span>Product Name</span>
          </div>
          <div>
            <span>{category}</span>
            <span>Category</span>
          </div>
          <div>
            <span>{quantity}</span>
            <span>Quanity</span>
          </div>
          <div>
            <span>{price}</span>
            <span>Price</span>
          </div>
          <div>
            <span>{sale_price}</span>
            <span>Sale Price</span>
          </div>
        </div>
      ) : (
        "No products to display"
      )}
    </div>
  );
};

export default ProductDetails;
