const Products = require("../schema/products");

const products = [
  { product_id: 1, product_name: "Product 1" },
  { product_id: 2, product_name: "Product 2" },
  { product_id: 3, product_name: "Product 3" },
];

const saveProduct = (products) => {
  return { ...products, message: "Saved Product Successfully" };
};

const getProducts = () => {
  return products;
};

const getProductById = (id) => {
  return products.filter((item) => item.product_id === id);
};

const deleteProductById = (id) => {
  return products.filter((item) => item.product_id !== id);
};

module.exports = {
  saveProduct,
  getProducts,
  getProductById,
  deleteProductById,
};
