const router = require("express").Router();
const productsRepo = require("../repo/products");

router.post("/", async (req, res) => {
  const products = await productsRepo.saveProduct(req.body);
  res.send(products);
});

router.get("/", async (req, res) => {
  const products = await productsRepo.getProducts();
  res.send(products);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const product = await productsRepo.getProductById(Number(id));
  res.send(product);
});

router.delete("/:id", async (req, res) => {
  const productId = req.params.id;
  const product = await productsRepo.deleteProductById(productId);
  res.send({ message: `Deleted product with ID ${productId}... ${product}` });
});

module.exports = router;
