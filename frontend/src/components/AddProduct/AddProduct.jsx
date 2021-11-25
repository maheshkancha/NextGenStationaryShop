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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faPencilAlt,
  faSave,
} from "@fortawesome/free-solid-svg-icons";

const AddProduct = ({ getNewProduct, selectedProduct, actionType }) => {
  const initialState = {
    product_name: "",
    category: "",
    quantity: 0,
    price: 0,
    sale_price: 0,
  };

  const [product, setProduct] = React.useState(initialState);
  // const [showDeleteModel, setShowDeleteModel] = React.useState(false);

  React.useEffect(() => {
    if (selectedProduct) {
      setProduct(selectedProduct);
    }
  }, [selectedProduct]);

  const setProductDetail = (e) => {
    const {
      target: { name, value },
    } = e;
    setProduct({ ...product, [name]: value });
  };

  const saveProductDetail = () => {
    axios
      .post("http://localhost:3100/products", product)
      .then((response) => response.data)
      .then((data) => {
        getNewProduct(data);
      });

    if (!actionType.includes("detail")) {
      setProduct(initialState);
    }
  };

  return (
    <div className="add-product-container">
      <TextField
        name="product_name"
        label="Product Name"
        variant="standard"
        value={product.product_name}
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
        value={product.sale_price}
        onChange={(e) => setProductDetail(e)}
      />

      <div className="button-panel">
        {actionType && actionType.includes("detail") ? (
          <>
            <Button variant="contained" onClick={saveProductDetail}>
              <FontAwesomeIcon icon={faPencilAlt} title="Edit" />
              Update
            </Button>
            <Button variant="contained" onClick={() => {}}>
              <FontAwesomeIcon icon={faTrashAlt} title="Delete" />
              Delete
            </Button>
          </>
        ) : (
          <Button
            variant="contained"
            onClick={saveProductDetail}
            style={{ width: "100%" }}
          >
            <FontAwesomeIcon icon={faSave} title="Save" />
            Add
          </Button>
        )}
      </div>
    </div>
  );
};

export default AddProduct;
