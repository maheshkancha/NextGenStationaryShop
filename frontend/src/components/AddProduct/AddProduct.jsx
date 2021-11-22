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

const AddProduct = () => {
  const [category, setCategory] = React.useState("Select Category");

  const handleCategoryChange = ({ target: { value } }) => {
    setCategory(value);
  };

  return (
    <div className="add-product-container">
      <TextField id="product-name" label="Product Name" variant="standard" />

      <FormControl variant="filled">
        <InputLabel id="category-label">Category</InputLabel>
        <Select
          labelId="select-category-label"
          id="category"
          value={category}
          onChange={(e) => handleCategoryChange(e)}
          label="Category"
        >
          <MenuItem value="Pen">Pen</MenuItem>
          <MenuItem value="Pencil">Pencil</MenuItem>
          <MenuItem value="Glue">Glue</MenuItem>
          <MenuItem value="Book">Book</MenuItem>
        </Select>
      </FormControl>

      <Counter />

      <TextField
        id="product-price"
        label="Price"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        variant="standard"
      />

      <TextField
        id="product-sale-price"
        label="Sale Price"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        variant="standard"
      />

      <Button variant="contained" onClick={() => {}}>
        Add
      </Button>
    </div>
  );
};

export default AddProduct;
