import React from "react";
import AddProduct from "../AddProduct/AddProduct";
import ProductList from "../ProductList/ProductList";
import { Button, Snackbar, Alert } from "@mui/material";
import axios from "axios";
import "./Products.css";

const Products = () => {
  const [showProduct, toggleShowProduct] = React.useState(false);
  const [products, setProducts] = React.useState();
  const [productFlag, setProductFlag] = React.useState(false);
  const [responseMessage, setResponseMessage] = React.useState(undefined);
  const [productAction, setProductAction] = React.useState("addproduct");
  const [selectedProduct, setSelectedProduct] = React.useState(undefined);

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
    setProductAction("addproduct");
  };

  const updateProductList = (product, action) => {
    console.log("Product: ", product);
    if (product.data) {
      if (action === "update") {
        const productsClone = [...products];
        const updatedProductIndex = productsClone.findIndex(
          (item) => String(item._id) === String(product.data._id)
        );
        console.log("Product Index:", updatedProductIndex);
        productsClone[updatedProductIndex] = {
          ...productsClone[updatedProductIndex],
          ...product.data,
        };

        console.log("Updated Data... ", productsClone[updatedProductIndex]);
        setProducts(productsClone);
      } else {
        console.log("Save...");
        setProducts([...products, product.data]);
      }
    } else {
      console.log("else part...");
      const productAfterDeletion = products.filter(
        (product) => product._id !== selectedProduct._id
      );
      setProducts(productAfterDeletion);
    }
    setProductFlag(true);
    setTimeout(() => setProductFlag(false), 5000);
    setResponseMessage(product.message);
  };

  const closeAlert = () => {
    setProductFlag(false);
  };

  const getSelectedProduct = (selectedProduct) => {
    toggleShowProduct(true);
    setSelectedProduct(selectedProduct);
    setProductAction("productdetails");
  };

  const getProductActionTitle = () => {
    return (
      productAction &&
      (productAction.includes("add")
        ? "Add New Product"
        : productAction.includes("details")
        ? "Product Details"
        : "")
    );
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
          <ProductList
            products={products}
            getSelectedProduct={getSelectedProduct}
          />
        </section>
        <section className="product-mngmt-section">
          {productAction && showProduct ? (
            <div className="add-product-wrapper">
              <div className="product-mngmt-section-title">
                {getProductActionTitle()}
              </div>
              {productAction.includes("add") ? (
                <AddProduct getNewProduct={updateProductList} />
              ) : (
                <AddProduct
                  getNewProduct={updateProductList}
                  selectedProduct={selectedProduct}
                  actionType={productAction}
                />
              )}
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
