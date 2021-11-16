const router = require("express").Router();
const productsRepo = require("../repo/products");

router.post("/", async (req, res) => {
  const products = await productsRepo.saveProduct(req.body);
  if (req.body.hasOwnProperty("_id")) {
    res.status(200).json({ ...products });
  } else {
    res.status(201).json({ ...products });
  }
});

router.get("/", async (req, res) => {
  const products = await productsRepo.getProducts();
  if (products.hasOwnProperty("data")) {
    res.status(200).json({ ...products });
  } else {
    res.status(404).json({ ...products });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const product = await productsRepo.getProductById(id);
  if (product.hasOwnProperty("data")) {
    res.status(200).json({ ...product });
  } else {
    res.status(404).json({ ...product });
  }
});

router.delete("/:id", async (req, res) => {
  const productId = req.params.id;
  const deletedProduct = await productsRepo.deleteProductById(productId);
  res.json({ ...deletedProduct });
});

module.exports = router;
