import React from "react";
import AddProduct from "../AddProduct/AddProduct";
// import AddItem from "../AddItems/AddItem";
import ProductList from "../ProductList/ProductList";
import { Button, Snackbar, Alert } from "@mui/material";
import axios from "axios";
import "./Products.css";

const Products = () => {
  const [showProduct, toggleShowProduct] = React.useState(true);
  const [products, setProducts] = React.useState();
  const [productFlag, setProductFlag] = React.useState(false);
  const [responseMessage, setResponseMessage] = React.useState("");

  React.useEffect(() => {
    axios
      .get("http://localhost:3100/products")
      .then((response) => response.data.data)
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const toggleProductView = () => {
    toggleShowProduct(!showProduct);
  };

  const updateProductList = (product) => {
    setProducts([...products, product.data]);
    setProductFlag(true);
    setTimeout(() => setProductFlag(false), 5000);
    setResponseMessage(product.message);
  };

  const closeAlert = () => {
    setProductFlag(false);
  };

  return (
    <div>
      <div className="product-mngmt-header">
        <div className="product-mngmt-title">Product Management</div>
        <div className="product-mngmt-menu">
          <ul>
            <li>
              <Button variant="contained" onClick={toggleProductView}>
                Product
              </Button>
            </li>
            <li>
              <Button variant="contained" onClick={() => {}}>
                Category
              </Button>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="product-container">
        <section className="product-list-section">
          <h3>Products</h3>
          <ProductList products={products} />
        </section>
        <section className="product-mngmt-section">
          {showProduct ? (
            <div className="add-product-wrapper">
              <div className="product-mngmt-section-title">Add New Product</div>
              <AddProduct updateProductList={updateProductList} />
            </div>
          ) : (
            <div className="no-selection">No Product Selected</div>
          )}
        </section>
      </div>
      {productFlag && (
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          open={productFlag}
          autoHideDuration={6000}
          onClose={closeAlert}
        >
          <Alert onClose={closeAlert} severity="success">
            {responseMessage}
          </Alert>
        </Snackbar>
      )}
    </div>
  );
};

export default Products;
