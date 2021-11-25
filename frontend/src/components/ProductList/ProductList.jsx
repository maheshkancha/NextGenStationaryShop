import React from "react";
import ProductDetails from "../ProductDetails/ProductDetails";
import "./ProductList.css";

const ProductList = ({ products, getSelectedProduct }) => {
  return (
    <div className="product-list">
      {products &&
        products.map((product) => (
          <ProductDetails
            key={product._id}
            product={product}
            getSelectedProduct={getSelectedProduct}
          />
        ))}
    </div>
  );
};

export default ProductList;
