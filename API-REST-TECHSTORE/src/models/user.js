const mongoose = require("mongoose");

<<<<<<< HEAD
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  {
    collection: "user",
  }
);

module.exports = mongoose.model("User", userSchema);
=======
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true

  }
});

module.exports = mongoose.model('User', userSchema);
>>>>>>> ea6fffcd092903280b465a37d3d574f777787dd5
