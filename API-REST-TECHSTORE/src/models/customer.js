const mongoose = require("mongoose");

<<<<<<< HEAD
const customerSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  {
    collection: "customer",
  }
);

module.exports = Customer = mongoose.model("customer", customerSchema);
=======
const customerSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: Number,
    required: true
},
address: {
  type: String,
  required: true

},
  email: {
    type: String,
    required: true

  }
});

module.exports = mongoose.model('customer', customerSchema);
>>>>>>> ea6fffcd092903280b465a37d3d574f777787dd5
