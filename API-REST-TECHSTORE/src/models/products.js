const mongoose = require("mongoose");

<<<<<<< HEAD
const productsSchema = mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },

  {
    collection: "products",
  }
);

module.exports = Product = mongoose.model("products", productsSchema);
=======
const productsSchema = mongoose.Schema({
    ID_product: {
        type: Number,
        required: true,
      },
  name_product: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
},
price: {
  type: Number,
  required: true

},
  quantity: {
    type: Number,
    required: true
}
});

module.exports = mongoose.model('products', customerSchema);
>>>>>>> ea6fffcd092903280b465a37d3d574f777787dd5
