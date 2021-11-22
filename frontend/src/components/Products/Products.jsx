import React from "react";
import AddProduct from "../AddProduct/AddProduct";
// import AddItem from "../AddItems/AddItem";
import ProductList from "../ProductList/ProductList";
import { Button } from "@mui/material";
import "./Products.css";

const Products = () => {
  const [showProduct, toggleShowProduct] = React.useState(true);
  // const addItemHandler = (item) => {
  //   console.log("Entered Value: ", item);
  // };
  const toggleProductView = () => {
    toggleShowProduct(!showProduct);
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
        <section className="product-mngmt-section">
          <div className="add-product-wrapper">
            <div className="product-mngmt-section-title">Add New Product</div>
            {showProduct && <AddProduct />}
          </div>
        </section>
        <section className="product-list-section">
          <h3>Products</h3>
          <ProductList />
        </section>
        {/* <AddItem addItemHandler={addItemHandler} /> */}
      </div>
    </div>
  );
};

export default Products;
