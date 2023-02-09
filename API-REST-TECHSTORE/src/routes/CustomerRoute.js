const express = require("express");
<<<<<<< HEAD
const Customer = require("../models/customer");
=======
const customerSchema = require("../models/customer");
>>>>>>> ea6fffcd092903280b465a37d3d574f777787dd5

const router = express.Router();

// create customer
<<<<<<< HEAD
router.post("/customers", (req, res) => {
  const customer = Customer(req.body);
=======
router.post("/customer", (req, res) => {
  const customer = customerSchema(req.body);
>>>>>>> ea6fffcd092903280b465a37d3d574f777787dd5
  customer
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all customers
<<<<<<< HEAD
router.get("/customers", async (req, res) => {
  Customer.find()
=======
router.get("/customer", (req, res) => {
  customerSchema
    .find()
>>>>>>> ea6fffcd092903280b465a37d3d574f777787dd5
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a customer
router.get("/customers/:id", (req, res) => {
  const { id } = req.params;
<<<<<<< HEAD
  Customer.findById(id)
=======
  customerSchema
    .findById(id)
>>>>>>> ea6fffcd092903280b465a37d3d574f777787dd5
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a customer
<<<<<<< HEAD
router.delete("/customers/:id", (req, res) => {
  const { id } = req.params;
  Customer.deleteOne({ _id: id })
=======
router.delete("/customer/:id", (req, res) => {
  const { id } = req.params;
  customerSchema
    .remove({ _id: id })
>>>>>>> ea6fffcd092903280b465a37d3d574f777787dd5
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a user
<<<<<<< HEAD
router.put("/customers/:id", (req, res) => {
  const { id } = req.params;
  const { name, lastname, address, email } = req.body;
  Customer.updateOne({ _id: id }, { $set: { name, lastname, address, email } })
=======
router.put("/customer/:id", (req, res) => {
  const { id } = req.params;
  const { name, lastname, address, email } = req.body;
  customerSchema
    .updateOne({ _id: id }, { $set: { name, lastname,address, email } })
>>>>>>> ea6fffcd092903280b465a37d3d574f777787dd5
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;
>>>>>>> ea6fffcd092903280b465a37d3d574f777787dd5
