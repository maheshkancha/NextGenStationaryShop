import React from "react";
import Counter from "../Counter/Counter";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import "./AddProduct.css";
import axios from "axios";

const AddProduct = ({ updateProductList }) => {
  const initialState = {
    product_name: "",
    category: "",
    quantity: 0,
    price: 0,
    sale_price: 0,
  };
  const [product, setProduct] = React.useState(initialState);

  const setProductDetail = (e) => {
    const {
      target: { name, value },
    } = e;
    console.log(`${name} - ${value}`);
    setProduct({ ...product, [name]: value });
  };

  const saveProductDetail = () => {
    axios
      .post("http://localhost:3100/products", product)
      .then((response) => response.data.data)
      .then((data) => {
        updateProductList(data);
      });

    setProduct(initialState);
  };

  return (
    <div className="add-product-container">
      <TextField
        name="product_name"
        label="Product Name"
        variant="standard"
        value={product.productName}
        onChange={(e) => setProductDetail(e)}
      />

      <FormControl variant="filled">
        <InputLabel id="category-label">Category</InputLabel>
        <Select
          labelId="select-category-label"
          name="category"
          label="Category"
          value={product.category}
          onChange={(e) => setProductDetail(e)}
        >
          <MenuItem value="Pen">Pen</MenuItem>
          <MenuItem value="Pencil">Pencil</MenuItem>
          <MenuItem value="Glue">Glue</MenuItem>
          <MenuItem value="Book">Book</MenuItem>
        </Select>
      </FormControl>

      <Counter
        name="quantity"
        value={product.quantity}
        updateCounter={setProductDetail}
      />

      <TextField
        name="price"
        label="Price"
        type="number"
        variant="standard"
        value={product.price}
        onChange={(e) => setProductDetail(e)}
      />

      <TextField
        name="sale_price"
        label="Sale Price"
        type="number"
        variant="standard"
        value={product.salePrice}
        onChange={(e) => setProductDetail(e)}
      />

      <Button variant="contained" onClick={saveProductDetail}>
        Add
      </Button>
    </div>
  );
};

export default AddProduct;
