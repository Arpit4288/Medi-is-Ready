const express = require("express");
const router = express.Router();

const {
  AddProduct,
  AddAllProduct,
  SearchByName,
  SearchByCategory,
  SearchById,
  GetAllProducts,
  GetAllCategories,
} = require("../controllers/productController");

router.post("/all", AddAllProduct);
router.get("/categories", GetAllCategories);
router.get("/category/:category", SearchByCategory);
router.get("/search", SearchByName);
router.get("/:id", SearchById);
router.get("/", GetAllProducts);
router.post("/", AddProduct);

module.exports = router;
