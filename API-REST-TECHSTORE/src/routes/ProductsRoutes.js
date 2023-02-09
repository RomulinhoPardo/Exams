const express = require("express");
<<<<<<< HEAD
const Product = require("../models/products");
=======
const productsSchema = require("../models/products");
>>>>>>> ea6fffcd092903280b465a37d3d574f777787dd5

const router = express.Router();

// create products
router.post("/products", (req, res) => {
<<<<<<< HEAD
  const products = Product(req.body);
=======
  const products = productsSchema(req.body);
>>>>>>> ea6fffcd092903280b465a37d3d574f777787dd5
  products
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all products
router.get("/products", (req, res) => {
<<<<<<< HEAD
  Product.find()
=======
  productsSchema
    .find()
>>>>>>> ea6fffcd092903280b465a37d3d574f777787dd5
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a product
router.get("/products/:id", (req, res) => {
  const { id } = req.params;
<<<<<<< HEAD
  Product.findById(id)
=======
  productsSchema
    .findById(id)
>>>>>>> ea6fffcd092903280b465a37d3d574f777787dd5
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a products
router.delete("/products/:id", (req, res) => {
  const { id } = req.params;
<<<<<<< HEAD
  Product.deleteOne({ _id: id })
=======
  productsSchema
    .remove({ _id: id })
>>>>>>> ea6fffcd092903280b465a37d3d574f777787dd5
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a products
router.put("/products/:id", (req, res) => {
  const { id } = req.params;
<<<<<<< HEAD
  const newProduct = req.body;
  Product.findByIdAndUpdate(id, newProduct)
=======
  const { ID_product, name_product, description, price, quantity } = req.body;
  customerSchema
    .updateOne({ _id: id }, { $set: { ID_product, name_product, description, price, quantity } })
>>>>>>> ea6fffcd092903280b465a37d3d574f777787dd5
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;
>>>>>>> ea6fffcd092903280b465a37d3d574f777787dd5
