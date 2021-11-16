const Products = require("../schema/products");
const mongoose = require("mongoose");
const messages = require("../constants/messages.json");

const saveProduct = async (product) => {
  if (product.hasOwnProperty("_id")) {
    const { _id } = product;
    const prodId = mongoose.Types.ObjectId(_id).toString();
    const existingProduct = await Products.findById(prodId);
    if (existingProduct) {
      Object.assign(existingProduct, product);
      const updateResponse = await existingProduct.save();
      return { data: updateResponse, message: messages.UPDATE_SUCCESS };
    } else {
      return { message: messages.NO_SUCH_PRODUCT };
    }
  } else {
    const productsObj = new Products(product);
    try {
      const saveResponse = await productsObj.save();
      return { data: saveResponse, message: messages.SAVE_SUCCESS };
    } catch (err) {
      return { error: err.message };
    }
  }
};

const getProducts = async () => {
  const products = await Products.find();
  if (products) {
    return { data: products };
  }

  return { message: messages.NO_PRODUCT_AVAILABLE };
};

const getProductById = async (id) => {
  const product = await Products.find({ _id: id });
  if (product && product.length > 0) {
    return { data: product };
  }

  return { message: messages.NO_SUCH_PRODUCT };
};

const deleteProductById = async (id) => {
  const existingProduct = getProductById(id);
  if (existingProduct) {
    await Products.deleteOne({ _id: id });
    return { message: messages.DELETE_SUCCESS };
  }

  return { message: messages.DELETE_FAILURE };
};

module.exports = {
  saveProduct,
  getProducts,
  getProductById,
  deleteProductById,
};
