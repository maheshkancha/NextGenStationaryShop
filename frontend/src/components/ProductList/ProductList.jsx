import React from "react";
import ProductDetails from "../ProductDetails/ProductDetails";
import "./ProductList.css";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("http://localhost:3100/products")
      .then((response) => response.data)
      .then((data) => {
        setProducts(data.data);
      });
  }, []);

  return (
    <div className="product-list">
      {products &&
        products.map((product) => (
          <ProductDetails key={product._id} product={product} />
        ))}
    </div>
  );
};

export default ProductList;
